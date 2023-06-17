<!DOCTYPE html>
<html lang="ar">

<head>
<title>Bold Doctor - الخبراء</title>
<?php include('templates/header.php'); ?>
<div class="pt-33 pt-md-33 pt-lg-33 bg-default-80">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-11">
                <div class="text-center mb-10 mb-lg-23 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                    <h2 class="font-size-10 mb-7">الخبراء</h2>
                    <p class="font-size-7 mb-0">قابل خبرائنا واحجز موعدك اونلاين</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="padding-top">

    <section class="pt-6">
        <div class="container">

            <form method="get" class="sort_form" action="<?php echo base_url('users?page=1') ?>">
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <select name="country" class="form-control sort_department">
                                <option value="">الدولة</option>
                                <?php foreach ($countries as $country): ?>
                                    <option value="<?php echo html_escape($country->id); ?>" 
                                    <?php if(isset($_GET['country']) && $_GET['country'] == $country->id){echo "selected";} ?>>
                                    <?php echo html_escape($country->name); ?>
                                    </option>
                                <?php endforeach ?>
                            </select>
                        </div>
                    </div>


                    <?php if (empty($cities)): ?>
                        <div class="col-md-2">
                            <div class="form-group">
                                <select name="city" class="form-control sort_department">
                                    <option value="">المدينة</option>
                                    <?php foreach ($cities as $usercity): ?>
                                        <?php if (!empty($usercity->city)): ?>
                                            <option <?php if(isset($_GET['city']) && $_GET['city'] == $usercity->city){echo "selected";} ?> value="<?php echo html_escape($usercity->city); ?>"><?php echo html_escape($usercity->city); ?></option>
                                        <?php endif ?>
                                    <?php endforeach ?>
                                </select>
                            </div>
                        </div>
                    <?php endif ?>
                    
                    <div class="col-md-2">
                        <div class="form-group">
                            <select name="department" class="form-control sort_department">
                                <option value="">القسم</option>
                                    <?php foreach ($all_users as $user): ?>
                                        <?php if (!empty($user->specialist)): ?>
                                            <option <?php if(isset($_GET['department']) && $_GET['department'] == $department->id){echo "selected";} ?> value="<?php echo html_escape($user->specialist); ?>"><?php echo html_escape($user->specialist); ?></option>
                                        <?php endif ?>
                                    <?php endforeach ?>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <select name="experience" class="form-control sort_experience">
                                <option value="">سنوات الخبرة</option>
                                <?php for ($i=1; $i < 51; $i++) { ?>
                                    <option <?php if(isset($_GET['experience']) && $_GET['experience'] == $i){echo "selected";} ?> value="<?= $i ?>"><?= $i ?> <?php echo trans('years') ?></option>
                                <?php } ?>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-3 col-xs-12 pull-right">
                        <div class='costum-search'>
                            <input name="search" type="text" class="form-control" placeholder="بحث بالإسم">
                            <!-- <button class="" type="submit">
                                <i class="fa fa-search"></i>
                            </button> -->
                        </div>
                    </div>  
                </div>
            </form>
            
            <?php if (empty($users)): ?>
                <div class="row">
                    <div class="col-md-10 col-lg-9 col-xl-8 mx-md-auto">
                        <?php include'include/not_found_msg.php'; ?>
                    </div>
                </div>
            <?php else: ?>

                <div class="row mt-4">
                    <?php foreach ($users as $user): ?>

                        <?php if (settings()->site_info == 1): ?>
                                <?php $pstatus = ""; ?>
                        <?php else: ?>
                            <?php if(settings()->enable_payment == 1): ?>
                                <?php if(user_payment_details($user->id)->status != 'verified'){$pstatus = "d-none";} ?>
                            <?php else: ?>
                                <?php $pstatus = ""; ?>
                            <?php endif; ?>
                        <?php endif ?>

                        <!-- Users -->
                        <div class="col-sm-6 col-md-3 mb-5 mb-md-0 <?php echo html_escape($pstatus); ?>">
                            <div class="user-area">
                                <div class="team-img">
                                    <?php if (empty($user->image)): ?>
                                        <img src="<?php echo base_url('assets/images/avatar.png') ?>" alt="User Image">
                                    <?php else: ?>
                                        <img src="<?php echo base_url($user->image) ?>" alt="User Image">
                                    <?php endif ?>
                                </div>
                                <div class="text-center bg-white shadow-light py-4 minh-150">

                                    <h6 class="h6 mb-1">
                                        <?php echo html_escape($user->name) ?>
                                        <?php if (!empty($user->specialist)): ?>
                                            - <?php echo html_escape($user->specialist) ?>
                                        <?php endif ?>
                                    </h6>
                                    <p class="mb-1">
                                        <?php if (!empty($user->exp_years)): ?>
                                            <?php echo html_escape($user->exp_years) ?> <?php echo trans('years-experience') ?>
                                        <?php endif ?>
                                    </p>
                                    
                                    <div class="row justify-content-center">
                                        <?php if (check_user_feature_access('profile-page', $user->id) == TRUE): ?>
                                            <?php if (check_user_feature_access('appointments', $user->id) == TRUE): ?>
                                                <a href="<?php echo base_url('profile/'.$user->slug) ?>" class="btn btn-light-primary btn-sm mt-2"><i class="flaticon-calendar"></i> <?php echo trans('book-appointment') ?></a>
                                            <?php else: ?>
                                                <a href="<?php echo base_url('profile/'.$user->slug) ?>" class="btn btn-light-secondary btn-sm mt-2"><i class="icon-eye"></i> <?php echo trans('view-profile') ?></a>
                                            <?php endif; ?>
                                        <?php endif; ?>
                                    </div>                                    

                                </div>
                            </div>
                        </div>
                    <?php endforeach ?>
                </div>

                <div class="col-md-12 text-center mt-4">
                    <?php echo $this->pagination->create_links(); ?>
                </div>
            <!-- End Users -->
            <?php endif; ?>
        </div>
    </section>

</div>

<?php include('templates/footer.php'); ?>