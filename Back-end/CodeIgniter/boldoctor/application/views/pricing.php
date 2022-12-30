<!-- style="background: #27348b;color: #fff !important;" -->
<!-- for border delete bg-white border  -->
<!-- style="border: 4px solid #27348b;background: #fff; " -->

<!DOCTYPE html>
<html lang="ar">

<head>
    <title>Bold Doctor - الاسعار والباقات بولد دكتور</title> <?php include('templates/header.php'); ?> <style>
      
    </style>
    <div class="pt-25  bg-default-80">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-11">
                    <div class="text-center mb-23 mb-lg-23 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-once="true"><br><br>
                        <h1 class="font-size-10 mb-7">الاسعار والباقات</h1>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pb-5 pb-md-11 pb-lg-19 bg-default-2" >
        <div class="container"> <br><br><br><br>
            <h2 class="font-size-10 mb-5 text-center" style="color: #27348b;">عروض الجمعة البيضاء </h2>
            <p class="font-size-7 mb-0 text-center">وفر شهرين عند اختيارك الباقة السنوية</p>
            <p class="text-center" style="font-size: 22px; padding-top: 23px; color: #f76875; font-weight: bold;" id="demo"></p><br><br>
            <div class="row justify-content-center">
                <div class="col-12  text-center pb-10">
                    <div class="btn-section" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                        <a href="javascript:" class="btn-toggle-square active mx-3 price-deck-trigger rounded-10 bg-golden-yellow">
                            <span data-pricing-trigger data-target="#table-price-value" data-value="yearly" class="active text-break">سنوى</span>
                            <span data-pricing-trigger data-target="#table-price-value" data-value="monthly" class="text-break">شهرى</span>
                        </a>
                    </div>
                </div>

            </div>

            <div class="row justify-content-center " id="table-price-value" data-pricing-dynamic data-value-active="yearly">


                <?php $i=1; foreach ($packages as $package): ?>

                    <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                        <div style="<?php if($i == 2){echo "border: 4px solid #27348b;background: #fff; ";} ?>" class="<?php if($i != 2){echo "bg-white border";} ?> text-right p-10 gr-hover-2 rounded-10 pl-9pt-7 pt-xs-12 mb-13 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500" data-aos-once="true">
                            <div class="mb-9">
                                <h4 class="text-dodger-blue-1 font-size-7 "><?php echo html_escape($package->name); ?></h4>
                            </div>

                            <h2 class="mb-0 font-size-11 font-weight-medium"><span class="dynamic-value" data-active="150" data-monthly="<?php echo round($package->monthly_price); ?>" data-yearly="<?php echo round($package->price); ?>"></span> <span class="font-size-7 "> جنية</span> </h2>
                            <ul class="list-unstyled p-0 font-size-5 text-dark-cloud">

                                <?php if (empty($package->features)): ?>
                                    <?php echo trans('features-not-selected') ?>
                                <?php else: ?>
                                    <?php foreach ($features as $all_feature): ?>

                                        <?php foreach ($package->features as $feature): ?>
                                            <?php if ($feature->feature_id == $all_feature->id): ?>
                                                <?php $icon = 'fa fa-check-circle text-success'; break; ?>
                                            <?php else: ?>
                                                <?php $icon = 'fa fa-times-circle text-danger'; ?>
                                            <?php endif ?>
                                        <?php endforeach ?>

                                        <?php $package_slug = $package->slug; $limit = get_feature_limit($all_feature->id)->$package_slug; ?>
                                        <div class="feature">
                                            <span class="numberf"><?php if(isset($limit) && $limit > 0){echo html_escape($limit);}else{ echo '<i class="fa fa-infinity"></i>';}; ?> </span> 
                                            <span class="limit mr-2"><i class="<?php echo html_escape($icon); ?>"></i></span> <?php echo trans($all_feature->slug) ?>
                                        </div>
                                    <?php endforeach ?>
                                <?php endif ?>
                                
                            
                            </ul>
                            <!-- <input type="hidden" name="billing_type" value="yearly" class="billing_type"> -->
                            <div class="mt-11"> <a style="<?php if($i == 2){echo "background: #27348b;color: #fff !important;";} ?>" class="btn btn-outline-dark-cloud gr-hover-bg-dodger-blue-1 rounded-5 text-black btn-xl h-55" href="<?php echo base_url('register?plan='.$package->slug) ?>">إبدأ الان</a> </div>
                        </div>
                    </div>

                <?php $i++; endforeach ?>
                
            </div>
        </div>
        
        
        <!---->
        
        <div class="col-lg-12">
            <div class="text-center  py-12 ">
                <h2 class="font-size-9 mb-9 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-once="true" style="display:inline-block">هل تريد انشاء نظام خاص  </h2> <a style="color: #fff" class="btn btn-blue-3 btn-2 rounded-5 mr-md-10 aos-init aos-animate" href="tel:01062024977" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">اتصل بنا</a> </div>
        </div>
        
        <!---->
    </div>




    <script>
        // Set the date we're counting down to
        var countDownDate = new Date("12 1, 2022 15:37:25").getTime();
        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Display the result in the element with id="demo"
            document.getElementById("demo").innerHTML = days + " يوم   " + hours + " <span>ساعة</span> " + minutes + "<span></span>  دقيقة  " + seconds + " <span></span> ثواني  ";
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);
    </script>
    <?php include('templates/footer.php'); ?>