<!DOCTYPE html>
<html lang="en" dir="<?php echo text_dir(); ?>">

<head>

    <!-- Title  -->
    <?php $settings = get_settings(); ?>
    <title><?php echo html_escape($settings->site_name) ?> &bull; <?php if(isset($page_title)){echo html_escape($page_title).' &bull; ';} ?>  <?php echo html_escape($settings->site_title) ?></title>

    <!-- Metas -->
    <meta charset="utf-8">
    <meta name="author" content="<?php echo html_escape($settings->site_name) ?>">
    <meta name="description" content="<?php echo html_escape($settings->description) ?>">
    <meta name="keywords" content="<?php echo html_escape($settings->keywords) ?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#286efb" />
    <meta name="msapplication-navbutton-color" content="#286efb" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#286efb" />

    <!-- Favicons-->
    <link rel="icon" href="<?php echo base_url($settings->favicon) ?>">
    <link rel="apple-touch-icon" href="<?php echo base_url($settings->favicon) ?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url($settings->favicon) ?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url($settings->favicon) ?>">
    <link rel="shortcut icon" href="<?php echo base_url() ?>assets/img/favicon.ico">

    <!-- CSS Libs  -->
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/front/libs/font-awesome/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/front/libs/jarallax/dist/jarallax.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/front/libs/owl-carousel/dist/css/owl.carousel.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/front/libs/owl-carousel/dist/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/front/css/simple-line-icons.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/admin/css/sweet-alert.css" rel="stylesheet" />
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/admin/css/select2.css" rel="stylesheet" />
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/font/flaticon.css">
    <link href="<?php echo base_url() ?>assets/admin/css/toast.css" rel="stylesheet" />
    <link href="<?php echo base_url() ?>assets/admin/css/timepicki.css" rel="stylesheet">
    <!-- Template CSS -->
    <link href="<?php echo base_url() ?>assets/front/css/template.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/front/css/aos.css">

    <?php if (text_dir() == 'rtl'): ?>
        <link rel="stylesheet" href="<?php echo base_url()?>assets/admin/css/bootstrap-rtl.min.css" crossorigin="anonymous">
    <?php endif ?>

    <!-- csrf token -->
    <script type="text/javascript">
       var csrf_token = '<?php echo $this->security->get_csrf_hash(); ?>';
       var token_name = '<?php echo $this->security->get_csrf_token_name();?>';
    </script>
    
    <!-- google analytics -->
    <?php if (!empty($settings->google_analytics)): ?>
        <?php echo base64_decode($settings->google_analytics) ?>
    <?php endif ?>

    <?php if (settings()->enable_captcha == 1 && settings()->captcha_site_key != ''): ?>
        <script src='https://www.google.com/recaptcha/api.js'></script>
    <?php endif; ?>


    <meta charset="UTF-8">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="shortcut icon" href="<?php echo base_url();?>vendor/image/png/favicon.png" type="image/x-icon">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="shortcut icon" href="<?php echo base_url();?>vendor/image/favicon.png" type="image/x-icon">
<!-- Bootstrap , fonts & icons  -->
<link rel="stylesheet" href="<?php echo base_url();?>vendor/css/bootstrap.css">
<link rel="stylesheet" href="<?php echo base_url();?>vendor/fonts/icon-font/css/style.css">
<!-- Plugin'stylesheets  -->
<link rel="stylesheet" href="<?php echo base_url();?>vendor/plugins/aos/aos.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
<link rel="stylesheet" href="<?php echo base_url();?>vendor/plugins/fancybox/jquery.fancybox.min.css">
<link rel="stylesheet" href="<?php echo base_url();?>vendor/plugins/slick/slick.min.css">
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TDBBN4F');</script>
<!-- End Google Tag Manager -->

</head>

<body>

    <!-- main wrapper -->
    <div class="main-wrapper">

        <!-- header -->
        <?php if (isset($menu) && $menu == TRUE): ?>
            <header>
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                        <a class="navbar-brand mr-lg-5" href="<?php echo base_url() ?>">
                            <img src="<?php echo base_url(settings()->logo) ?>" alt="logo">
                        </a>

                        <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Menu -->
                        <div id="navbarContent" class="collapse navbar-collapse">

                            <ul class="navbar-nav align-items-lg-center ml-auto">

                                <li class="nav-item"><a href="<?php echo base_url() ?>" class="nav-link  <?php if(isset($page_title) && $page_title == "Home"){echo "active";} ?>"><?php echo trans('home') ?></a></li>
                                
                                <li class="nav-item"><a href="<?php echo base_url('pricing') ?>" class="nav-link <?php if(isset($page_title) && $page_title == "Pricing"){echo "active";} ?>"><?php echo trans('pricing') ?></a></li>

                                <?php if (settings()->enable_users == 1): ?>
                                <li class="nav-item"><a href="<?php echo base_url('users') ?>" class="nav-link <?php if(isset($page_title) && $page_title == "Users"){echo "active";} ?>"><?php echo trans('experts') ?></a></li>
                                <?php endif ?>

                                <?php if (settings()->enable_blog == 1): ?>
                                <li class="nav-item"><a href="<?php echo base_url('blogs') ?>" class="nav-link <?php if(isset($page_title) && $page_title == "Blogs"){echo "active";} ?>"><?php echo trans('blogs') ?></a></li>
                                <?php endif ?>

                                <?php if (settings()->enable_faq == 1): ?>
                                <li class="nav-item"><a href="<?php echo base_url('faqs') ?>" class="nav-link <?php if(isset($page_title) && $page_title == "Faqs"){echo "active";} ?>"><?php echo trans('faqs') ?></a></li>
                                <?php endif ?>

                                <li class="nav-item"><a href="<?php echo base_url('contact') ?>" class="nav-link <?php if(isset($page_title) && $page_title == "Contact"){echo "active";} ?>"><?php echo trans('contact') ?></a></li>

                                
                                <?php if (!empty(get_pages())): ?>
                                    <li class="nav-item dropdown">
                                        <a href="javascript:void(0);" data-toggle="dropdown" class="nav-link dropdown-toggle"><?php echo trans('pages') ?></a>

                                        <ul class="dropdown-menu shadow">
                                            <?php foreach (get_pages() as $page): ?>
                                                <li><a class="dropdown-item" href="<?php echo base_url('page/'.$page->slug) ?>"><?php echo html_escape($page->title) ?></a></li>
                                            <?php endforeach ?>
                                        </ul>
                                    </li>
                                <?php endif ?>


                                <?php if (settings()->enable_multilingual == 1): ?>
                                    <li class="nav-item dropdown">
                                        <a href="javascript:void(0);" data-toggle="dropdown" class="nav-link dropdown-toggle"><?php echo lang_short_form(); ?></a>
                                        <ul class="dropdown-menu shadow">
                                            <?php foreach (get_language() as $lang): ?>
                                                <li><a class="dropdown-item" href="<?php echo base_url('home/switch_lang/'.$lang->slug) ?>"><?php echo html_escape($lang->name) ?></a></li>
                                            <?php endforeach ?>
                                        </ul>
                                    </li>
                                <?php endif ?>

                            </ul>
                            

                            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                                <li class="nav-item mr-0">
                                    <?php if (is_admin()): ?>
                                        <a class="btn btn-sm btn-light-secondary ml-auto" href="<?php echo base_url('auth/logout') ?>"><i class="icon-logout"></i> <?php echo trans('logout') ?> </a>

                                        <a class="btn btn-sm btn-primary ml-auto" href="<?php echo base_url('admin/dashboard') ?>"><i class="icon-speedometer mr-1"></i> <?php echo trans('dashboard') ?></a>
                                    <?php elseif(is_user()): ?>

                                        <a class="btn btn-sm btn-light-secondary ml-auto" href="<?php echo base_url('auth/logout') ?>"><i class="icon-logout"></i> <?php echo trans('logout') ?> </a>

                                        <a class="btn btn-sm btn-primary ml-auto" href="<?php echo base_url('admin/dashboard/user') ?>"><i class="icon-speedometer mr-1"></i> <?php echo trans('dashboard') ?></a>
                                         
                                    <?php else: ?>
                                        <a class="btn btn-sm btn-light-primary ml-auto" href="<?php echo base_url('login') ?>"><?php echo trans('sign-in') ?></a>
                                        <a class="btn btn-sm btn-primary ml-auto" href="<?php echo base_url('register') ?>"><?php echo trans('get-started') ?></a>
                                    <?php endif ?>
                                </li>
                            </ul>

                        </div>
                        <!-- End Menu -->

                    </nav>
                </div>
            </header>
        <?php endif ?>
