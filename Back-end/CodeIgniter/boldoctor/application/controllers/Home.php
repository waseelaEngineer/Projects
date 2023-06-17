<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends Home_Controller {

    public function __construct()
    {
        parent::__construct();
    }


    public function index()
    { 
        //set language 
        $language = "english";
        $site_lang = array('site_lang' => $language);
        $this->session->set_userdata($site_lang);

        $data = array();
        $data['page_title'] = 'Home';
        $data['menu'] = TRUE;
        $data['features'] = $this->common_model->select_orders('product_services');
        $data['workflows'] = $this->admin_model->select_asc('workflow');
        $data['posts'] = $this->common_model->get_home_blog_posts();
        $data['main_content'] = $this->load->view('home', $data, TRUE);
        $this->load->view('home', $data);
    }

    //switch language
    public function switch_lang($language = "")
    {   
        $language = ($language != "") ? $language : "english";
        $site_lang = array('site_lang' => $language);
        $this->session->set_userdata($site_lang);
        redirect($_SERVER['HTTP_REFERER']);
    }


    //phpinfo
    public function phpinfo()
    {   
        echo phpinfo();
    }

    //features
    public function features()
    {   
        //set language 
        $language = "english";
        $site_lang = array('site_lang' => $language);
        $this->session->set_userdata($site_lang);

        $data = array();
        $data['page_title'] = 'Features';
        $data['menu'] = TRUE;
        $data['features'] = $this->common_model->select('features');
        $data['main_content'] = $this->load->view('features', $data, TRUE);
        $this->load->view('features', $data);
    }

    //users
    public function users()
    {   
        //set language 
        $language = "english";
        $site_lang = array('site_lang' => $language);
        $this->session->set_userdata($site_lang);

        if (settings()->enable_users == 0){
            redirect(base_url());
        }

        $data = array();
        //initialize pagination
        $this->load->library('pagination');
        $config['base_url'] = base_url('users');
        $total_row = $this->common_model->get_all_users(1 , 0, 0);
        $config['total_rows'] = $total_row;
        $config['per_page'] = 9;
        $this->pagination->initialize($config);
        $page = $this->security->xss_clean($this->input->get('page'));
        if (empty($page)) {
            $page = 0;
        }
        if ($page != 0) {
            $page = $page - 1;
        }

        $data['page_title'] = 'Users';
        $data['menu'] = TRUE;
        $data['departments'] = $this->common_model->select('chamber_category');
        $data['all_users'] = $this->common_model->select('users');
        $data['cities'] = $this->common_model->get_user_cities('');
        $data['countries'] = $this->admin_model->select_asc('country');
        $data['users'] = $this->common_model->get_all_users(0 , $config['per_page'], $page * $config['per_page']);
        $data['main_content'] = $this->load->view('users', $data, TRUE);
        $this->load->view('users', $data);
    }

    //pricing
    public function pricing()
    {   
        //set language 
        $language = "arabic";
        $site_lang = array('site_lang' => $language);
        $this->session->set_userdata($site_lang);

        $data = array();
        $data['page_title'] = 'Pricing';
        $data['menu'] = TRUE;
        $data['packages'] = $this->admin_model->get_package_features();
        $data['features'] = $this->admin_model->select('features');
        $data['main_content'] = $this->load->view('pricing', $data, TRUE);
        $this->load->view('pricing', $data);
    }

    //about
    public function about()
    {   
        //set language 
        $language = "english";
        $site_lang = array('site_lang' => $language);
        $this->session->set_userdata($site_lang);

        $this->load->view('about');
    }

    //ecommerce
    public function ecommerce()
    {   
        $this->load->view('ecommerce');
    }
  
    //pro
    public function pro()
    {   
        $this->load->view('pro');
    }
 
    //mobile
    public function mobile()
    {   
        $this->load->view('mobile');
    }

    //pos
    public function pos()
    {   
        $this->load->view('pos');
    }
    
    //terms
    public function terms()
    {   
        $this->load->view('terms');
    }
    
    //policy
    public function policy()
    {   
        $this->load->view('policy');
    }

    //faqs
    public function faqs()
    {   
        //set language 
        $language = "english";
        $site_lang = array('site_lang' => $language);
        $this->session->set_userdata($site_lang);

        $data = array();
        $data['page_title'] = 'Faqs';
        $data['menu'] = TRUE;
        $data['faqs'] = $this->admin_model->select_asc('faqs');
        $data['main_content'] = $this->load->view('faqs', $data, TRUE);
        $this->load->view('faqs', $data);
    }

 
    //purchase page
    public function purchase($payment_id)
    {   
        $data = array();
        $data['menu'] = TRUE;
        $data['payment'] = $this->common_model->get_payment($payment_id);
        $data['payment_id'] = $payment_id;  
        $data['package'] = $this->common_model->get_package_by_slug($data['payment']->package);
        $this->load->view('purchase', $data);
    }

    

    //send contact message
    public function send_message()
    {     
        if ($_POST) {
            $data = array(
                'name' => $this->input->post('name', true),
                'email' => $this->input->post('email', true),
                'message' => $this->input->post('message', true),
                'created_at' => my_date_now()
            );
            $data = $this->security->xss_clean($data);
            
            //check reCAPTCHA status
            if (!$this->recaptcha_verify_request()) {
                $this->session->set_flashdata('error', trans('recaptcha-is-required')); 
            } else {
                $this->common_model->insert($data, 'site_contacts');
                $this->session->set_flashdata('msg', trans('message-send-successfully'));
            }
            redirect($_SERVER['HTTP_REFERER']);
        }
    }

  
    public function contact()
    {   
        //set language 
        $language = "english";
        $site_lang = array('site_lang' => $language);
        $this->session->set_userdata($site_lang);

        $data = array();
        $data['menu'] = TRUE;
        $data['page_title'] = 'Contact';
        $data['settings'] = $this->common_model->get('settings');
        $data['main_content'] = $this->load->view('contact', $data, TRUE);
        $this->load->view('contact', $data);
    }

    //show pages
    public function page($slug)
    {   
        $data = array();
        $data['page_title'] = 'Page';
        $data['menu'] = TRUE;
        $data['page'] = $this->common_model->get_single_page($slug);
        if (empty($data['page'])) {
            redirect(base_url());
        }
        $data['page_name'] = $data['page']->title;
        $data['main_content'] = $this->load->view('page', $data, TRUE);
        $this->load->view('index', $data);
    }

    //show pages
    // public function terms()
    // {   
    //     $data = array();
    //     $data['page_title'] = 'Terms of Service';
    //     $data['menu'] = TRUE;
    //     $data['main_content'] = $this->load->view('terms', $data, TRUE);
    //     $this->load->view('index', $data);
    // }

    //blogs
    public function blogs()
    {   
        $data = array();
        //initialize pagination
        // $this->load->library('pagination');
        // $config['base_url'] = base_url('blogs');
        // $total_row = $this->common_model->get_site_blog_posts(1 , 0, 0);
        // $config['total_rows'] = $total_row;
        // $config['per_page'] = 9;
        // $this->pagination->initialize($config);
        // $page = $this->security->xss_clean($this->input->get('page'));
        // if (empty($page)) {
        //     $page = 0;
        // }
        // if ($page != 0) {
        //     $page = $page - 1;
        // }
        
        // $data['page_title'] = 'Blog Posts';
        // $data['menu'] = TRUE;
        // $data['posts'] = $this->common_model->get_site_blog_posts(0 , $config['per_page'], $page * $config['per_page']);
        // $data['categories'] = $this->common_model->get_blog_categories();
        // $data['main_content'] = $this->load->view('blog_posts', $data, TRUE);
        $this->load->view('blog_posts');
    }

    //category
    public function category($slug)
    {   
        $data = array();
        $slug = $this->security->xss_clean($slug);
        $category = $this->common_model->get_category_by_slug($slug);
        
        if (empty($category)) {
            redirect(base_url('blog'));
        }

        //initialize pagination
        $this->load->library('pagination');
        $config['base_url'] = base_url('category/'.$slug);
        $total_row = $this->common_model->get_category_posts(1 , 0, 0, $category->id);
        $config['total_rows'] = $total_row;
        $config['per_page'] = 9;
        $this->pagination->initialize($config);
        $page = $this->security->xss_clean($this->input->get('page'));
        if (empty($page)) {
            $page = 0;
        }
        if ($page != 0) {
            $page = $page - 1;
        }
        
        $data['page_title'] = 'Category Posts';
        $data['menu'] = TRUE;
        $data['title'] = $category->name;
        $data['posts'] = $this->common_model->get_category_posts(0, $config['per_page'], $page * $config['per_page'], $category->id);
        $data['categories'] = $this->common_model->get_blog_categories();
        $data['main_content'] = $this->load->view('blog_posts', $data, TRUE);
        $this->load->view('index', $data);
    }

    //post details
    public function post_details($slug)
    {   

        $data = array();
        $slug = $this->security->xss_clean($slug);
        $data['page_title'] = 'Post details';
        $data['menu'] = TRUE;
        $data['page'] = 'Post';
        $data['post'] = $this->common_model->get_post_details($slug);

        if (empty($data['post'])) {
            redirect(base_url());
        }
        $category_id = $data['post']->category_id;
        $post_id = $data['post']->id;
        $data['post_id'] = $post_id;

        $data['comments'] = $this->common_model->get_comments_by_post($data['post']->id);
        $data['total_comment'] = count($data['comments']);
        $data['tags'] = $this->common_model->get_post_tags($post_id);
        $data['main_content'] = $this->load->view('single_post', $data, TRUE);
        $this->load->view('index', $data);
    }


    //send comment
    public function send_comment($post_id)
    {     
        if ($_POST) {
            $data = array(
                'post_id' => $post_id,
                'name' => $this->input->post('name', true),
                'email' => $this->input->post('email', true),
                'message' => $this->input->post('message', true),
                'created_at' => my_date_now()
            );
            $data = $this->security->xss_clean($data);
            $this->common_model->insert($data, 'comments');
            redirect($_SERVER['HTTP_REFERER']);
        }
    }


    // not found page
    public function get_time($date, $user_id)
    {
        $day = date('l', strtotime($date));
        $day_id = get_day_id($day);
       
        $value = array();
        $value['times'] = get_time_by_days($day_id, $user_id);
        $value['date'] = $date;

        $data = array();
        $data['result'] = $this->load->view('include/time_loop', $value, TRUE);
        
        die(json_encode($data));
    }


    // this used for installation
    public function table()
    {
        $this->load->dbforge();
        $this->db->truncate('additional_advises');
        $this->db->truncate('advises');
        $this->db->truncate('advise_investigations');
        $this->db->truncate('appointments');
        $this->db->truncate('assaign_days');
        $this->db->truncate('assign_time');
        $this->db->truncate('blog_category');
        $this->db->truncate('blog_posts');
        $this->db->truncate('chamber');
        $this->db->truncate('comments');
        $this->db->truncate('contacts');
        $this->db->truncate('diagnosis_reports');
        $this->db->truncate('diagonosis');
        $this->db->truncate('drugs');
        $this->db->truncate('educations');
        $this->db->truncate('evisit_settings');
        $this->db->truncate('experiences');
        $this->db->truncate('faqs');
        $this->db->truncate('patientses');
        $this->db->truncate('payment');
        $this->db->truncate('payment_user');
        $this->db->truncate('prescription');
        $this->db->truncate('prescription_items');
        $this->db->truncate('pre_advice');
        $this->db->truncate('pre_ad_advices');
        $this->db->truncate('pre_diagonosis');
        $this->db->truncate('pre_investigation');
        $this->db->truncate('ratings');
        $this->db->truncate('site_contacts');
        $this->db->truncate('staffs');
        $this->db->truncate('tags');
        $this->db->truncate('testimonials');
        $this->db->truncate('users');

        echo "Done";
        
    }


    public function openssl()
    {
        echo !extension_loaded('openssl')?"Not Available":"Available";
    }


    public function update_id($id, $tval, $field, $value)
    {
        $action = array($field => $value);
        $this->db->where('id',$id);
        $this->db->update($tval,$action);
        echo "done";
    }

    public function get_id($id, $tval)
    {
        $values = $this->common_model->get_by_id($id, $tval);
        echo "<pre>"; print_r($values);
    }

    public function get($tval)
    {
        $values = $this->common_model->select($tval);
        echo "<pre>"; print_r($values);
    }

    public function demo()
    {  
        $this->load->view('demo');
    }

    // not found page
    public function error_404()
    {
        $data['page_title'] = "Error 404";
        $data['description'] = "Error 404";
        $data['keywords'] = "error,404";
        $this->load->view('error_404');
    }


}