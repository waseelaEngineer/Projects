<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Live extends Home_Controller {

    public function __construct()
    {
        parent::__construct();
    }


    public function zoom($type='', $id)
    {
        $data = array();
        if ($type == 'patient') {
            $data['leave_url'] = base_url('admin/patients/appointments');  
        } else {
            $data['leave_url'] = base_url('admin/live_consults?cancel='.$id);
            $edit_data = array(
                'is_start' => 1
            );
            if ($id != 0) {
                $this->admin_model->edit_option($edit_data, $id, 'appointments');
            }
        }
        
        $data['page_title'] = 'Zoom Meeting';      
        $data['page'] = 'Live';
        $data['appointment'] = $this->admin_model->get_by_id($id, 'appointments');
        $data['patient'] = $this->admin_model->get_by_id($data['appointment']->patient_id, 'patientses');
        $data['user'] = $this->admin_model->get_by_id($data['appointment']->user_id, 'users');
        $data['main_content'] = $this->load->view('admin/user/zoom',$data);
    }


    public function meet($type='', $id){
       
        $edit_data = array(
            'is_start' => 1
        );
        if ($id != 0) {
            $this->admin_model->edit_option($edit_data, $id, 'appointments');
        }
        redirect(base_url('admin/live_consults'));
        
    }



    public function cancel_meeting($id)
    {
        $edit_data = array(
            'is_start' => 0
        );
        if ($id != 0) {
            $this->admin_model->edit_option($edit_data, $id, 'appointments');
        }
        $this->session->set_flashdata('msg', trans('meeting-canceled-successfully')); 
        redirect($_SERVER['HTTP_REFERER']);
    }



}
	

