<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Live_consults extends Home_Controller {

    public function __construct()
    {
        parent::__construct();
        //check auth
        if (!is_staff() && !is_user()) {
            redirect(base_url());
        }
    }


    public function index()
    {
        if (isset($_GET) && $_GET['cancel'] != '') {
            $edit_data = array(
                'is_start' => 0
            );
            $this->admin_model->edit_option($edit_data, $_GET['cancel'], 'appointments');
        }
        
        $data = array();
        $data['page_title'] = 'Consultations';      
        $data['page'] = 'Live consults';   
        $data['consult'] = FALSE;
        $data['appointments'] = $this->admin_model->get_appointments(user()->id);
        $data['patients'] = $this->admin_model->select_by_chamber('patientses');
        $data['main_content'] = $this->load->view('admin/user/live_consults',$data,TRUE);
        $this->load->view('admin/index',$data);
    }


   
    public function edit($id)
    {  
        if ($_POST) {
            $data=array(
                'date' => $this->input->post('date', true),
                'time' => $this->input->post('time', true),
                'meeting_notes' => $this->input->post('meeting_notes')
            );
            $this->admin_model->edit_option($data, $id, 'appointments');
            $this->session->set_flashdata('msg', trans('updated-successfully')); 
            redirect(base_url('admin/live_consults'));
        }
        $data = array();
        $data['page_title'] = 'Edit';   
        $data['consult'] = $this->admin_model->select_option($id, 'appointments');
        $data['patients'] = $this->admin_model->select_by_chamber('patientses');
        $data['main_content'] = $this->load->view('admin/user/live_consults',$data,TRUE);
        $this->load->view('admin/index',$data);
    }



    public function settings()
    {  
        $data = array();
        $data['page_title'] = 'Consultation Settings';  
        $data['main_content'] = $this->load->view('admin/user/evisit_settings',$data,TRUE);
        $this->load->view('admin/index',$data);
    }


    public function evisit_settings() 
    {

        if (get_user_info() == FALSE) {
            $price = 0;
        }else{
            $price =  $this->input->post('price', true);
        }

        $id = $this->input->post('settings_id', true);
        $data = array(
            'zoom_meeting_id' => str_replace( ' ', '', $this->input->post('zoom_meeting_id')),
            'zoom_meeting_password' => trim($this->input->post('zoom_meeting_password')),
            'user_id' => user()->id,
            'price' =>$price,
            'invitation_link' => $this->input->post('invitation_link', true),
            'meet_invitation_link' => $this->input->post('meet_invitation_link', true),
            'meet_type' => $this->input->post('meet_type'),
            'allow_user' => 1,
            'status' => $this->input->post('status', true)
        );
        $data = $this->security->xss_clean($data);
        if ($id != 0) {
            $this->admin_model->edit_option($data, $id, 'evisit_settings');
            $this->session->set_flashdata('msg', trans('updated-successfully')); 
        } else {
            $id = $this->admin_model->insert($data, 'evisit_settings');
            $this->session->set_flashdata('msg', trans('inserted-successfully')); 
        }
        redirect(base_url('admin/live_consults/settings'));
    }

    
    public function status_operation($status, $id) 
    {
        $data = array(
            'status' => $status
        );
        $data = $this->security->xss_clean($data);
        $this->admin_model->update($data, $id,'appointments');
        $this->session->set_flashdata('msg', trans('updated-successfully')); 
        redirect(base_url('admin/live_consults'));
    }


    public function delete($id)
    {
        $this->admin_model->delete($id,'appointments'); 
        echo json_encode(array('st' => 1));
    }

}
	

