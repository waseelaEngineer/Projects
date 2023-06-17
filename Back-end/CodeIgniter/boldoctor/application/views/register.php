<div class="min-height-100vh d-flex align-items-center bg-default-3">
    <div class="container-fluid h-100 p-0">
        <div class="row no-gutters align-items-center justify-content-center h-100">

            <div class="col-xl-7 scroll col-lg-7 col-md-7 text-right" style="overflow: scroll;height: 100vh;">
                <div class="pt-8 px-5 pt-md-12 pt-lg-12 pt-xs-10 pb-md-4 pb-lg-10 px-md-25 px-xs-10 mx-auto">
               
                    <?php if (isset($page_title) && $page_title == 'Register'): ?>
     
                        <div class="mb-10 text-right" data-aos="fade-up " data-aos-duration="500" data-aos-once="true">
                            <h2 class="mb-1 font-size-10 letter-spacing-n83 pb-3 text-right"> انشئ متجرك الان</h2>
                            <p class="text-bali-gray font-size-7 mb-0 text-right">كل ما عليك ملئ البيانات وامتلك متجرك الان</p>
                        </div>

                        <?php if (settings()->enable_registration == 0): ?>
                            <div class="mb-6 text-center">
                                <img class="mb-4" width="30%" src="<?php echo base_url('assets/front/img/not-found.png') ?>">
                                <h3 class="text-muted"><?php echo trans('registration-system-is-disabled-') ?></h3>
                                <a class="btn btn-light-primary btn-sm mt-2" href="<?php echo base_url('contact') ?>"> <?php echo trans('contact-admin') ?></a>
                                <a class="btn btn-light-primary btn-sm mt-2" href="<?php echo base_url() ?>"><i class="icon-home"></i> <?php echo trans('home') ?> </a>
                            </div>
                        <?php else: ?>

                            <div class="mb-4 mt-4">
                                <div class="success text-success"></div>
                                <div class="success_extend text-success"></div>
                                <div class="error text-danger"></div>
                                <div class="warning text-warning"></div>
                            </div>

                            <form id="register_form" class="authorization__form authorization__form--shadow leave_con" method="post" action="<?php echo base_url('auth/register_user'); ?>">
                                <!-- name  -->
                                <div class="form-group mb-6 position-relative">
                                    <input type="name" name="name" placeholder="الأسم" class="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pr-17 font-size-5">
                                    <label class="absolute-center-right font-size-7 mt-1 mr-9" for="password">
                                        <i class="icon icon-single-02 mb-0 font-weight-bold"></i>
                                </label>
                                </div>
                                <!-- email  -->
                                <div class="form-group mb-6 position-relative">
                                    <input type="email" name="email" class="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pr-17 font-size-5" placeholder="البريد الالكتروني">
                                    <label class="absolute-center-right font-size-7 mt-1 mr-9" for="email"> 
                                        <i class="icon icon-email-84 mb-0 font-weight-bold"></i> 
                                    </label>
                                </div>
                                <!-- password  -->
                                <div class="form-group mb-6 position-relative">
                                    <input type="password" name="password" class="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pr-17 font-size-5" placeholder="كلمة المرور">
                                    <label class="absolute-center-right font-size-7 mt-1 mr-9" for="password">
                                        <i class="icon icon-lock mb-0 font-weight-bold"></i>
                                    </label>
                                </div>

                                <div class="col-md-12">
                                    <?php if (settings()->enable_captcha == 1 && settings()->captcha_site_key != ''): ?>
                                        <div class="g-recaptcha pull-left" data-sitekey="<?php echo html_escape(settings()->captcha_site_key); ?>"></div>
                                    <?php endif ?>
                                </div>

                                <div>
                                    <input type="checkbox" name="agree" class="agree_btn" id="terms-condition" required>
                                    <label class="px-5 pt-5" for="terms-condition">
                                        لقد قرأت وفهمت
                                        <a href="<?php echo base_url('terms') ?>">الشروط و الأحكام</a> 
                                        و
                                        <a href="<?php echo base_url('policy') ?>">سياسة الخصوصية</a>
                                        من هذا الموقع.
                                    </label>
                                </div>

                                <input type="hidden" name="plan" value="<?php if(isset($_GET['plan'])){echo html_escape($_GET['plan']);}else{echo "basic";} ?>">
                                <input type="hidden" name="billing" value="<?php if(isset($_GET['billing'])){echo html_escape($_GET['billing']);}else{echo "monthly";} ?>">
                                <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">
                                <button type="submit" class="btn btn-primary btn-block mb-0 register_button">انشاء</button>

                                <span class="mt-5 text-left">هل لديك حساب؟ 
                                    <a href="<?php echo base_url('login') ?>">تسجيل الدخول</a>
                                </span>
                            </form>
                        <?php endif ?>
                    <?php endif ?>

                    <?php if (isset($page_title) && $page_title == 'Email Verification'): ?>

                        <div class="mb-3 text-center">
                            <img class="mb-4" width="30%" src="<?php echo base_url('assets/front/img/message.png') ?>">
                            <p class="lead">لقد أرسلنا رمز التحقق في بريدك الإلكتروني.</p>
                        </div>
    
                        <form id="verify_from" method="post" action="<?php echo base_url('auth/verify_account'); ?>">
                            <div class="form-group">
                                <input type="text" name="code" placeholder="أدخل رمز التحقق" class="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pr-17 font-size-5">
                            </div>
                            <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">
                            <button type="submit" class="btn btn-success btn-blocks mb-0 verify_btn w-100"> التحقق من الرمز</button>
                            <div class="loader mb-2 mt-4 text-primary text-center hide">
                                جاري الإرسال <i class="fa fa-spinner fa-spin"></i>
                            </div>
                            <span>مازلت لم تتلقى الرمز؟
                                <a class="resend_mail mt-5" href="<?php echo base_url('auth/resend') ?>"><?php echo trans('resend') ?>اعادة الإرسال</a>
                            </span>
                        </form>

                    <?php endif ?>  

                </div>
            </div>

            <!-- Right Image -->
            <div class="col-xl-5 col-lg-5 col-md-5 min-height-lg-100vh" style="background:#5be7c4">
                <div class="bg-images min-height-100vh d-none d-lg-block" style="background-image: url(<?php echo base_url();?>vendor/image/signup.png);"></div>
            </div>

        </div>
    </div>
</div>