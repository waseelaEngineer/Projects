<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Settings extends Home_Controller {

    public function __construct()
    {
        parent::__construct();
        //check auth
        
        if (!is_admin()) {
            redirect(base_url());
        }
    }

    
    public function index()
    {
        $data = array();
        $data['page_title'] = 'Settings';
        $data['settings'] = $this->admin_model->get('settings');
        $data['currencies'] = $this->admin_model->select_asc('country');
        $data['main_content'] = $this->load->view('admin/settings', $data, TRUE);
        $this->load->view('admin/index', $data);
    }


    //set default language
    public function set_language()
    {
        check_status();
        
        if ($_POST) {
            $data = array(
                'lang' => $this->input->post('language', true)
            );
            $data = $this->security->xss_clean($data);
            $this->admin_model->edit_option($data, 1, 'settings');
            $this->session->set_flashdata('msg', trans('updated-successfully')); 
            redirect(base_url('admin/language'));
        }
    }

    public function appearance(){

        $data = array();
        $data['page_title'] = 'Appearance';
        $data['main_content'] = $this->load->view('admin/appearance', $data, TRUE);
        $this->load->view('admin/index', $data);

        if ($_POST) {
            $data = array(
                'theme' => $this->input->post('theme', true)
            );
            $data = $this->security->xss_clean($data);
            $this->admin_model->edit_option($data, 1, 'settings');
            $this->session->set_flashdata('msg', trans('updated-successfully')); 
            redirect(base_url('admin/settings/appearance'));
        }
    }



    //update settings
    public function update(){

        check_status();
        
        if ($_POST) {

            if(!empty($this->input->post('enable_multilingual'))){$enable_multilingual = $this->input->post('enable_multilingual', true);}
            else{$enable_multilingual = 0;}

            if(!empty($this->input->post('enable_registration'))){$enable_registration = $this->input->post('enable_registration', true);}
            else{$enable_registration = 0;}

            if(!empty($this->input->post('enable_email_verify'))){$enable_email_verify = $this->input->post('enable_email_verify', true);}
            else{$enable_email_verify = 0;}

            if(!empty($this->input->post('enable_captcha'))){$enable_captcha = $this->input->post('enable_captcha', true);}
            else{$enable_captcha = 0;}

            if(!empty($this->input->post('enable_payment'))){$enable_payment = $this->input->post('enable_payment', true);}
            else{$enable_payment = 0;}

            if(!empty($this->input->post('enable_blog'))){$enable_blog = $this->input->post('enable_blog', true);}
            else{$enable_blog = 0;}

            if(!empty($this->input->post('enable_faq'))){$enable_faq = $this->input->post('enable_faq', true);}
            else{$enable_faq = 0;}

            if(!empty($this->input->post('enable_users'))){$enable_users = $this->input->post('enable_users', true);}
            else{$enable_users = 0;}

            if(!empty($this->input->post('enable_workflow'))){$enable_workflow = $this->input->post('enable_workflow', true);}
            else{$enable_workflow = 0;}

            
            $data = array(
                'site_name' => $this->input->post('site_name', true),
                'site_title' => $this->input->post('site_title', true),
                'keywords' => $this->input->post('keywords', true),
                'description' => $this->input->post('description', true),
                'footer_about' => $this->input->post('footer_about', true),
                'admin_email' => $this->input->post('admin_email', true),
                'copyright' => $this->input->post('copyright', true),
                'pagination_limit' => 0,
                'expire_reminder' => $this->input->post('expire_reminder', true),
                'trial_days' => $this->input->post('trial_days', true),
                'facebook' => $this->input->post('facebook', true),
                'twitter' => $this->input->post('twitter', true),
                'instagram' => $this->input->post('instagram', true),
                'linkedin' => $this->input->post('linkedin', true),
                'enable_multilingual' => $enable_multilingual,
                'enable_registration' => $enable_registration,
                'enable_captcha' => $enable_captcha,
                'enable_payment' => $enable_payment,
                'enable_blog' => $enable_blog,
                'enable_faq' => $enable_faq,
                'enable_users' => $enable_users,
                'enable_workflow' => $enable_workflow,
                'enable_email_verify' => $enable_email_verify,
                'google_analytics' => base64_encode($this->input->post('google_analytics')),
                'country' => $this->input->post('country', true),
                'site_color' => '#ddd',
                'site_font' => 'Alata',
                'layout' => 0,
                'captcha_site_key' => $this->input->post('captcha_site_key', true),
                'captcha_secret_key' => $this->input->post('captcha_secret_key', true),
                'zoom_api_key' => $this->input->post('zoom_api_key', true),
                'zoom_secret_key' => $this->input->post('zoom_secret_key', true),
                'mail_protocol' => $this->input->post('mail_protocol', true),
                'mail_title' => $this->input->post('mail_title', true),
                'mail_host' => $this->input->post('mail_host', true),
                'mail_port' => $this->input->post('mail_port', true),
                'mail_username' => $this->input->post('mail_username', true),
                'mail_password' => base64_encode($this->input->post('mail_password')),
                'mail_encryption' => $this->input->post('mail_encryption') 
            );
            
            // upload signature image
            $data_img = $this->admin_model->do_upload('photo1');
            if($data_img){

                $data_img = array(
                    'favicon' => $data_img['thumb']
                );
                $this->admin_model->edit_option($data_img, 1, 'settings'); 
             }

            // upload logo
            $data_img2 = $this->admin_model->do_upload('photo2');
            if($data_img2){
                $data_img = array(
                    'logo' => $data_img2['medium']
                );            
                $this->admin_model->edit_option($data_img, 1, 'settings');
            }

            // upload home hero image
            $data_img3 = $this->admin_model->do_upload('photo3');
            if($data_img3){
                $data_img = array(
                    'hero_img' => $data_img3['medium']
                );            
                $this->admin_model->edit_option($data_img, 1, 'settings');
            }

            $user_data = array(
                'email' => $this->input->post('admin_email', true)        
            );
            
            $user_data = $this->security->xss_clean($user_data);
            $this->admin_model->edit_option($user_data, user()->id, 'users');

            $data = $this->security->xss_clean($data);
            $this->admin_model->edit_option($data, 1, 'settings');
            $this->session->set_flashdata('msg', trans('updated-successfully')); 
            redirect($_SERVER['HTTP_REFERER']);
        }
    }


}