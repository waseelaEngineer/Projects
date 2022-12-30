<!DOCTYPE html>
<html lang="ar">

<head>
    <title>Bold Doctor - تواصل معنا بولد دكتور</title>
    <?php include('templates/header.php'); ?>
        <div class="min-height-100vh d-flex align-items-center pt-10 pt-md-10 pt-lg-10" style="background: #f7f9fc">
            <div class="container">
                <div class="extra-space"></div>
                <div class="row justify-content-center">
                    <div class="col-xl-12">
                        <div class="mb-5 mb-lg-18 text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="300" data-aos-once="true">
                            <h2 class="font-size-11 mb-7">تواصل معنا</h2>
                            <p class="font-size-7 mb-0">تواصل معنا باحدي الطرق ادناه.</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="top-contact-info text-right bg-default-1 max-w-540 mx-auto py-10 px-13 rounded-10 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                            <div class="row">
                                <div class="col-lg-6 mb-5 mb-lg-0">
                                    <div class="border-md-left border-cornflower-blue">
                                        <h4 class="font-size-5 heading-default-color font-weight-normal mb-0">اتصل بنا</h4> <a class="font-size-7 font-weight-bold heading-default-color" href="tel:+201062024977">+201062024977</a> </div>
                                </div>
                                <div class="col-lg-6 mb-5 mb-lg-0">
                                    <div class="pr-1 pr-3">
                                        <h4 class="font-size-5 heading-default-color font-weight-normal mb-0">عبر البريد الالكتروني</h4> <a class="font-size-7 font-weight-bold heading-default-color" href="mailto:hello@Bold Doctor.co">support@boldoctor.com</a> </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <!-- Form -->
                <div id="contactForm" class="row justify-content-center py-5">
                    <div class="col-md-8">
                        <form method="post" action="<?php echo base_url('home/send_message'); ?>">
                            <div class="row">
                                <div class="col-sm-6 mb-2">
                                    <div class="form-group">
                                        <label id="name">الإسم</label>
                                        <input type="text" class="form-control" name="name">
                                    </div>
                                </div>

                                <div class="col-sm-6 mb-2">
                                    <div class="form-group">
                                        <label id="email">إيميل</label>
                                        <input type="text" class="form-control" name="email" required>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 mb-2">
                                    <label id="name1">الرسالة</label>
                                    <div class="form-group mb-1">
                                        <textarea name="message" id="message" rows="6" class="form-control" required></textarea>
                                    </div>
                                </div>
                            </div>

                            <?php if (settings()->enable_captcha == 1 && settings()->captcha_site_key != ''): ?>
                                <div class="row">
                                    <div class="col-12 mb-2">
                                        <div class="g-recaptcha pull-left" data-sitekey="<?php echo html_escape($settings->captcha_site_key); ?>"></div>
                                    </div>
                                </div>
                            <?php endif ?>

                            <!-- csrf token -->
                            <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">
                            <button type="submit" class="btn btn-primary btn-md mt-5">إرسال</button>
                        </form>
                    </div>
                </div>
                <!-- End Form -->


            </div>
        </div>
        <?php include('templates/footer.php'); ?>