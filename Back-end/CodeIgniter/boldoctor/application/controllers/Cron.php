<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Cron extends Home_Controller {

    public function __construct()
    {
        parent::__construct();
    }

    //expire payments
    public function expire_payments()
    {   

        $payments = $this->common_model->get_expire_payments();
        foreach ($payments as $payment) {
            $data = array(
                'status' => 'expire'
            );
            $data = $this->security->xss_clean($data);
            $this->common_model->update($data, $payment->id, 'payment');
        }

        //check trial expire users
        $trial_users = $this->common_model->get_trial_users();
        foreach ($trial_users as $user) {
            $user_data = array(
                'status' => 1,
                'user_type' => 'registered',
                'trial_expire' => '0000-00-00'
            );
            $user_data = $this->security->xss_clean($user_data);
            $this->common_model->update($user_data, $user->id, 'users');
        }

        //send expire reminder
        $expire_days = settings()->expire_reminder;
        if ($expire_days != 0) {
            $epayments = $this->common_model->get_notified_expire_payments($expire_days);
            foreach ($epayments as $epayment) {
                $subject = settings()->site_name.' '.trans('subscription-expire-reminder');
                $message = trans('hello').' '.$epayment->name.', <br>'.trans('your').' '.settings()->site_name.' '.strtolower(trans($epayment->billing_type)).' '.trans('subscription-will-expire-in').' '.settings()->expire_reminder.' '.trans('days').'. '.trans('please-click-below-link-to-renew-your-plan').' <br>'.'<a href="'.base_url().'">'.base_url().'</a>';
                echo $subject.'<br>'.$message; exit();
                if (!empty($epayment->email)) {
                    $this->email_model->send_email($epayment->email, $subject, $message);
                }
            }
        }
        
    }

}