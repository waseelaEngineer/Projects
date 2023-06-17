<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/


$route['default_controller'] = 'home/index';
$route['404_override'] = 'home/error_404';
$route['translate_uri_dashes'] = FALSE;
$route['index'] = 'home/index';
$route['error-404'] = 'home/error_404';

//site routes
$route['features'] = 'home/features';
$route['faqs'] = 'home/faqs';
$route['pricing'] = 'home/pricing';
$route['about'] = 'home/about';
$route['contact'] = 'home/contact';
$route['ecommerce'] = 'home/ecommerce';
$route['pro'] = 'home/pro';
$route['mobile'] = 'home/mobile';
$route['pos'] = 'home/pos';
$route['terms'] = 'home/terms';
$route['policy'] = 'home/policy';
$route['blogs'] = 'home/blogs';
$route['users'] = 'home/users';
$route['category/(:any)'] = 'home/category/$1';
$route['post/(:any)'] = 'home/post_details/$1';
$route['page/(:any)'] = 'home/page/$1';

$route['create-profile'] = 'home/create_profile';
$route['create-profile/(:any)'] = 'home/create_profile/$1';
$route['page/(:any)'] = 'home/page/$1';
$route['home/check_username/(:any)'] = 'home/check_username/$1';
$route['purchase-plan/(:any)'] = 'home/purchase/$1';
$route['payment-success/(:any)'] = 'home/payment_success/$1';
$route['payment-cancel/(:any)'] = 'home/payment_cancel/$1';
$route['pay'] = 'home/pays';

//user route
$route['profile/(:any)'] = 'profile/user/$1';
$route['profile/about-me/(:any)'] = 'profile/about_me/$1';
$route['resume/(:any)'] = 'profile/resume/$1';
$route['portfolio/(:any)'] = 'profile/portfolio/$1';
$route['blog/(:any)'] = 'profile/blog/$1';
$route['post/(:any)/(:any)'] = 'profile/details/$1/$2';
$route['category/(:any)/(:any)'] = 'profile/category/$1/$2';
$route['contact/(:any)'] = 'profile/contact/$1';
$route['appointment/(:any)'] = 'profile/appointment/$1';
$route['book-appointment/(:any)'] = 'profile/book_appointment/$1';
$route['send-message'] = 'profile/send_message';
$route['download/(:any)'] = 'profile/download/$1';
$route['portfolio/(:any)/(:any)'] = 'profile/portfolio_details/$1/$2';


$route['change_password'] = 'admin/dashboard/change_password';


//auth routes
$route['login'] = 'auth/login';
$route['register'] = 'auth/register';
$route['verify-email'] = 'auth/verify';
$route['setup'] = 'auth/setup';