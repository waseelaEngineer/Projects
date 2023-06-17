<div class="min-height-100vh d-flex align-items-center bg-default-3">
    <div class="container-fluid h-100 p-0">
        <div class="row no-gutters align-items-center justify-content-center h-100">
            <!-- left side  -->
            <div class="col-xl-6  col-lg-6 col-md-10">
                <div class="pt-26 pt-md-17 pt-lg-18 pb-md-4 pb-lg-10 max-w-413 mx-auto aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                    
                    <!-- Login form -->
                    <div id="login-area" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" class="aos-init aos-animate">
                        <?php if (isset($_GET['msg']) && $_GET['msg'] == 'success'): ?>
                            <div class="alert alert-success alert-dismissible mb-4 log_alert">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <?php echo trans('logout-successfully-') ?>
                            </div>
                        <?php endif ?>
                        <div class="mb-4 mt-4">
                            <div class="success text-success"></div>
                            <div class="error text-danger"></div>
                            <div class="warning text-warning"></div>
                        </div>
                        <?php if (settings()->type == 'demo'): ?>
                            <div class="row alert alert-default mb-4">
                                <div class="rows col-md-3 badge badge-pill badge-primary-soft">
                                    <div class="col-4 mb-1">admin</div>
                                    <div class="col-4">1234</div>
                                </div>
                                <div class="rows col-md-3 badge badge-pill badge-primary-soft">
                                    <div class="col-4 mb-1">doctor</div>
                                    <div class="col-4">1234</div>
                                </div>
                                <div class="rows col-md-3 badge badge-pill badge-primary-soft">
                                    <div class="col-4 mb-1">staff</div>
                                    <div class="col-4">1234</div>
                                </div>
                                <div class="rows col-md-3 badge badge-pill badge-primary-soft">
                                    <div class="col-4 mb-1">patient</div>
                                    <div class="col-4">1234</div>
                                </div>
                            </div>
                        <?php endif ?>
                            
                        <form id="login-form" method="post" action="<?php echo base_url('auth/log'); ?>">
                            <div class="mb-10 text-center text-lg-right">
                                <h2 class="mb-1 font-size-10 letter-spacing-n83">مرحبا بعودتك</h2>
                                <p class="text-bali-gray font-size-7 mb-0">أدخل تفاصيل حسابك أدناه</p>
                            </div>
                            <div class="form-group mb-6 position-relative">
                                <input type="email" class="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5" name="user_name" placeholder="بريدك الالكتروني او اسم المستخدم">
                            </div>
                            <div class="form-group mb-6 position-relative">
                                <input type="password" class="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5" name="password" placeholder="كلمة السر">
                                <a href="#" class="btn-link text-light-orange absolute-center-left ml-6 forgot_pass">نسيت كلمة السر</a>
                            </div>
                            <div class="button">
                                <button type="submit" class="btn btn-primary btn-block mt-4 mb-0 signin_btn">تسجيل دخول</button>
                                <p class="font-size-5 mt-8 text-bali-gray aos-init aos-animate text-right" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">ليس لديك حساب ؟ 
                                    <a href="<?php echo base_url('register') ?>" class="text-blue-3 ">انشئ حساب الان</a>
                                </p>
                            </div>
                            <!-- csrf token -->
                            <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">
                        </form>

                    </div>
                        
                    <div id="forgot-area" class="" style="display: none;" data-aos="fade-up" data-aos-duration="400">
                        <div class="mb-10 text-center text-lg-right">
                            <h2 class="mb-1 font-size-10 letter-spacing-n83">مرحبا بعودتك</h2>
                            <p class="text-bali-gray font-size-7 mb-0">إستعادة كلمة السر</p>
                        </div>
                        <form id="lost-form" method="post" action="<?php echo base_url('auth/forgot_password'); ?>">
                            <div class="form-group mb-6 position-relative">
                                <select class="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-bali-gray pl-7 font-size-5" name="role" required>
                                    <option value="">إختر دورك</option>
                                    <option value="users">أدمن / دكتور</option>
                                    <option value="staffs">موظف</option>
                                    <option value="patientses">مريض</option>
                                </select>
                            </div>
                            <div class="form-group mb-6 position-relative">
                                <input type="text" class="form-control form-control-lg bg-white rounded-4 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5" name="email" required placeholder="ادخل الإيميل">
                            </div>
                            <!-- <div class="col-sm-6 text-left text-sm-left">
                                <a href="#" class="small back_login"><i class="fas fa-long-arrow-left"></i> رجوع</a>
                            </div> -->
                            <div class="button">
                                <!-- csrf token -->
                                <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">
                                <button type="submit" class="btn btn-primary btn-block mt-4 mb-0">تقديم</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <!-- end left side  -->
            <!-- Right Image -->
            <div class="col-xl-6 col-lg-6 col-md-6 min-height-lg-100vh" style="background:#5be7c4">
                <div class="bg-images min-height-100vh d-none d-lg-block" style="background-image: url(<?php echo base_url();?>vendor/image/login.png);"></div>
            </div>
        </div>
    </div>
</div>