<div class="content-wrapper">

  <!-- Main content -->
  <section class="content">

    <div class="row">

      <?php if ($type == 'online'): ?>
        
        <?php if (settings()->type == 'demo'): ?>
          <div class="col-lg-8">
            <div class="card p-4 bg-danger-soft">
              <span><i class="fa fa-info-circle"></i> Payment gateways are only available with Extended License</span>
            </div>
          </div>
        <?php endif ?>
        
        <div class="col-md-12">
          <form method="post" action="<?php echo base_url('admin/payment/update') ?>" role="form" class="form-horizontal pr-20">
            
            <div class="row">
              <div class="col-sm-12">
                <div class="box">
                    <div class="box-body">
                      <p class="font-weight-bold"><?php echo trans('currency') ?></p>
                      <select class="form-control single_select pt-0" id="country" name="country">
                          <option value=""><?php echo trans('select') ?></option>
                          <?php foreach ($currencies as $currency): ?>
                              <?php if (!empty($currency->currency_name)): ?>
                                <option value="<?php echo html_escape($currency->id); ?>" 
                                  <?php echo (settings()->country == $currency->id) ? 'selected' : ''; ?>>
                                  <?php echo html_escape($currency->name.'  -  '.$currency->currency_code.' ('.$currency->currency_symbol.')'); ?>
                                </option>
                              <?php endif ?>
                          <?php endforeach ?>
                      </select>
                  </div>
                </div>
              </div>
            </div>
           
            <div class="row">

              <div class="col-sm-6">
                <div class="box">
                  <div class="box-header with-border">
                    <h3 class="box-title d-block">
                      <img width="100px" src="<?php echo base_url() ?>assets/admin/payment/paypal.svg"/> 
                      <span class="pull-right"><input type="checkbox" name="paypal_payment" value="1" <?php if(settings()->paypal_payment == 1){echo 'checked';} ?> data-toggle="toggle" data-onstyle="primary" data-width="80"></span></h3>
                  </div>

                  <div class="box-body minh-200">
                      <div class="form-group">
                          <label class=" control-label" for="example-input-normal">Paypal <?php echo trans('mode') ?> </label>
                          <div class="">
                            <select class="form-control" name="paypal_mode">
                                <option value=""><?php echo trans('select') ?></option>
                                  <option value="sandbox" <?php echo (settings()->paypal_mode == 'sandbox') ? 'selected' : ''; ?>>Sandbox</option>
                                  <option value="live" <?php echo (settings()->paypal_mode == 'live') ? 'selected' : ''; ?>>Live</option>
                            </select>
                          </div>
                      </div>

                      <div class="form-group">
                          <label class=" control-label" for="example-input-normal">Paypal <?php echo trans('account') ?></label>
                          <div class="">
                              <input type="text" name="paypal_email" value="<?php echo html_escape(settings()->paypal_email); ?>" class="form-control" >
                          </div>
                      </div>
                  </div>

                </div>
              </div>

              <div class="col-sm-6">
                <div class="box">
                  <div class="box-header with-border">
                    <h3 class="box-title d-block"><img width="80px" src="<?php echo base_url() ?>assets/admin/payment/stripe.svg"/>   <span class="pull-right"><input type="checkbox" name="stripe_payment" value="1" <?php if(settings()->stripe_payment == 1){echo 'checked';} ?> data-toggle="toggle" data-onstyle="primary" data-width="80"></span></h3>
                  </div>

                  <div class="box-body minh-200">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                            <label class=" control-label" for="example-input-normal"><?php echo trans('publish-key') ?></label>
                            <div class="">
                              <input type="text" name="publish_key" value="<?php echo html_escape(settings()->publish_key); ?>" class="form-control" >
                            </div>
                        </div>
                      </div>

                      <div class="col-sm-12">
                          <div class="form-group">
                            <label class=" control-label" for="example-input-normal"><?php echo trans('secret-key') ?> </label>
                            <div class="">
                              <input type="text" name="secret_key" value="<?php echo html_escape(settings()->secret_key); ?>" class="form-control" >
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


              <div class="col-sm-6">
                <div class="box">
                  <div class="box-header with-border">
                    <h3 class="box-title d-block"><img width="100px" src="<?php echo base_url() ?>assets/admin/payment/razorpay.svg"/>   <span class="pull-right"><input type="checkbox" name="razorpay_payment" value="1" <?php if(settings()->razorpay_payment == 1){echo 'checked';} ?> data-toggle="toggle" data-onstyle="primary" data-width="80"></span></h3>
                  </div>

                  <div class="box-body minh-200">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                            <label class=" control-label" for="example-input-normal"><?php echo trans('key-id') ?></label>
                            <div class="">
                              <input type="text" name="razorpay_key_id" value="<?php echo html_escape(settings()->razorpay_key_id); ?>" class="form-control" >
                            </div>
                        </div>
                      </div>

                      <div class="col-sm-12">
                          <div class="form-group">
                            <label class=" control-label" for="example-input-normal"><?php echo trans('key-secret') ?> </label>
                            <div class="">
                              <input type="text" name="razorpay_key_secret" value="<?php echo html_escape(settings()->razorpay_key_secret); ?>" class="form-control" >
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="col-sm-6">
                <div class="box">
                  <div class="box-header with-border">
                    <h3 class="box-title d-block"><img width="100px" src="<?php echo base_url() ?>assets/admin/payment/paystack.svg"/>   <span class="pull-right"><input type="checkbox" name="paystack_payment" value="1" <?php if(settings()->paystack_payment == 1){echo 'checked';} ?> data-toggle="toggle" data-onstyle="primary" data-width="80"></span></h3>
                  </div>

                  <div class="box-body minh-200">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                            <label class=" control-label" for="example-input-normal"><?php echo trans('publish-key') ?></label>
                            <div class="">
                              <input type="text" name="paystack_public_key" value="<?php echo html_escape(settings()->paystack_public_key); ?>" class="form-control" >
                            </div>
                        </div>
                      </div>

                      <div class="col-sm-12">
                          <div class="form-group">
                            <label class="c control-label" for="example-input-normal"><?php echo trans('secret-key') ?> </label>
                            <div class="">
                              <input type="text" name="paystack_secret_key" value="<?php echo html_escape(settings()->paystack_secret_key); ?>" class="form-control" >
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="col-sm-6">
                <div class="box">
                  <div class="box-header with-border">
                    <h3 class="box-title d-block"><img width="100px" src="<?php echo base_url() ?>assets/admin/payment/mercado_pago.svg"/>   <span class="pull-right"><input type="checkbox" name="mercado_payment" value="1" <?php if(settings()->mercado_payment == 1){echo 'checked';} ?> data-toggle="toggle" data-onstyle="primary" data-width="80"></span></h3>
                  </div>

                  <div class="box-body minh-200">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group">
                            <label class="control-label" for="example-input-normal"><?php echo trans('publish-key') ?></label>
                            <div class="">
                              <input type="text" name="mercado_api_key" value="<?php echo html_escape(settings()->mercado_api_key); ?>" class="form-control" >
                            </div>
                        </div>
                      </div>

                      <div class="col-sm-12">
                          <div class="form-group">
                            <label class="control-label" for="example-input-normal"><?php echo trans('access-token') ?> </label>
                            <div class="">
                              <input type="text" name="mercado_token" value="<?php echo html_escape(settings()->mercado_token); ?>" class="form-control" >
                            </div>
                        </div>
                      </div>

                      <div class="col-sm-12">
                        <div class="form-group">
                            <label class="control-label">Default Currency</label>
                            <select name="mercado_currency" class="form-control">
                                <option value="BRL" <?php if(settings()->mercado_currency == 'BRL'){echo "selected";} ?>>BRL&nbsp;(Brazil Real)</option>
                                <option value="ARS" <?php if(settings()->mercado_currency == 'ARS'){echo "selected";} ?>>ARS&nbsp;(Argentina Peso)</option>
                            </select>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>



            </div>

            <!-- csrf token -->
            <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">

            <div class="div">
              <button type="submit" class="btn btn-primary btn-lgs waves-effect w-md waves-light m-b-5"><i class="ficon flaticon-check"></i> <?php echo trans('save-changes') ?></button>
            </div>

          </form>
        </div>

      <?php endif ?>




      <?php if ($type == 'offline'): ?>
        <div class="col-md-6 m-auto">
          <div class="box">
            
            <div class="box-header with-border">
              <h3 class="box-title"><?php echo trans('add-offline-payment') ?></h3>
            </div>

            <form method="post" enctype="multipart/form-data" class="validate-form" action="<?php echo base_url('admin/payment/offline')?>" role="form" novalidate>

              <div class="box-body minh-500 p-20">
                
                  <div class="form-group">
                      <select class="form-control single_select" name="user" required>
                          <option value=""><?php echo trans('select-user') ?></option>
                          <?php foreach ($users as $user): ?>
                            <option value="<?php echo html_escape($user->id) ?>"><?php echo html_escape($user->name.' - '.$user->email) ?> 
                              <span class="c-b"><?php if(!empty($user->payment_status)){echo '('.$user->payment_status.')';} ?></span>
                            </option>
                          <?php endforeach ?>
                      </select>
                  </div>

                  <div class="form-group">
                      <select class="form-control single_select" name="package" required>
                          <option value=""><?php echo trans('select-plans') ?></option>
                          <?php foreach ($packages as $package): ?>
                            <option value="<?php echo html_escape($package->id) ?>"><?php echo html_escape($package->name) ?> </option>
                          <?php endforeach ?>
                      </select>
                  </div>

                  <div class="form-group">
                    <label><?php echo trans('subscription-type') ?></label>
                    <div class="radio radio-info radio-inline mt-10">
                      <input type="radio" id="inlineRadio1" value="monthly" name="billing_type" required>
                      <label for="inlineRadio1"> <?php echo trans('monthly') ?> </label>
                      &emsp;&emsp;
                      <input type="radio" id="inlineRadio2" value="yearly" name="billing_type" required>
                      <label for="inlineRadio2"> <?php echo trans('yearly') ?> </label>
                    </div>
                  </div>
                    
                  <div class="form-group">
                    <label>Payment Status</label>
                    <div class="radio radio-info radio-inline mt-10">
                      <input type="radio" id="inlineRadio3" value="verified" name="status" required>
                      <label for="inlineRadio3"> <?php echo trans('verified') ?> </label>
                      &emsp;&emsp;
                      <input type="radio" id="inlineRadio4" value="pending" name="status" required>
                      <label for="inlineRadio4"> <?php echo trans('pending') ?> </label>
                    </div>
                  </div>
                 
                  <!-- csrf token -->
                  <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">

                  <div class="row">
                    <div class="col-sm-12 pt-60">
                        <button type="submit" class="btn btn-primary pull-left"><i class="ficon flaticon-check"></i> <?php echo trans('add-payment') ?></button>
                    </div>
                  </div>

              </div>

            </form>

          </div>
        </div>
      <?php endif; ?>

    </div>

  </section>
</div>
