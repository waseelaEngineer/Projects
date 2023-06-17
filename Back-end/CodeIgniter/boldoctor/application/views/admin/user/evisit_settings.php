
<div class="content-wrapper">

  <!-- Main content -->
  <section class="content container">

    <div class="row">

      <div class="col-md-12">
        <h2 class="box-title pull-left mb-5"><?php echo trans('consultation-settings') ?></h2>
        <a href="<?php echo base_url('admin/live_consults') ?>" class="pull-right btn btn-light-secondary"><i class="icon-calendar"></i> <?php echo trans('consultations') ?>  </a>
      </div>

      <div class="col-md-12">
       
          <form method="post" enctype="multipart/form-data" class="validate-form" action="<?php echo base_url('admin/live_consults/evisit_settings')?>" role="form" novalidate>
          
            <div class="row">

              <div class="col-md-8">
                <div class="box">
                  <div class="box-bodys">
                    <div class="evisit-content m-30">
                      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item mr-2">
                          <a class="wh nav-link <?php if(evisit_settings(user()->id)->meet_type == 'zoom'){echo "active";} ?>" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><?php echo trans('zoom') ?></a>
                        </li>
                        <li class="nav-item">
                          <a class="wh nav-link <?php if(evisit_settings(user()->id)->meet_type == 'meet'){echo "active";} ?>" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><?php echo trans('google-meet') ?></a>
                        </li>
                      </ul>

                      <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade  mt-30 <?php if(evisit_settings(user()->id)->meet_type == 'zoom'){echo "show active";} ?>" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                          
                          <div class="row">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label><?php echo trans('zoom') ?> <?php echo trans('meeting-id') ?> <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="zoom_meeting_id" value="<?php echo evisit_settings(user()->id)->zoom_meeting_id; ?>" >
                              </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                  <label><?php echo trans('zoom') ?> <?php echo trans('meeting-password') ?> <span class="text-danger">*</span></label>
                                  <input type="text" class="form-control" name="zoom_meeting_password" value="<?php echo evisit_settings(user()->id)->zoom_meeting_password; ?>" >
                                </div>
                            </div>
                          

                            <div class="col-sm-12">
                              <div class="form-group">
                                <label><?php echo trans('zoom') ?> <?php echo trans('invitation-link') ?> </label>
                                <textarea class="form-control" name="invitation_link"><?php echo evisit_settings(user()->id)->invitation_link; ?></textarea>
                              </div>
                            </div>
                           </div>

                        </div>

                        <div class="tab-pane fade mt-30 <?php if(evisit_settings(user()->id)->meet_type == 'meet'){echo "show active";} ?>" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="form-group">
                                <label><?php echo trans('google-meet') ?> <?php echo trans('invitation-link') ?> <span class="text-danger">*</span></label>
                                <textarea rows="2" class="form-control" name="meet_invitation_link"><?php echo evisit_settings(user()->id)->meet_invitation_link; ?></textarea>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="box">
                  <div class="box-body mt-30">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label><?php echo trans('consultation-fees') ?> <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" required name="price" value="<?php echo evisit_settings(user()->id)->price; ?>" >
                      </div>
                    </div>

                    <div class="col-sm-12">
                      <div class="form-group">
                        <label><?php echo trans('active-video-meeting-option') ?> <span class="text-danger">*</span></label>
                        <select class="form-control" name="meet_type">
                          <option value="zoom" <?php if(evisit_settings(user()->id)->meet_type == 'zoom'){echo "selected";} ?>><?php echo trans('zoom') ?></option>
                          <option value="meet" <?php if(evisit_settings(user()->id)->meet_type == 'meet'){echo "selected";} ?>><?php echo trans('google-meet') ?></option>
                        </select>
                        <p class="text-danger small text-italic"><i class="fa fa-info-circle"></i> <?php echo trans('active-video-meeting-option-info') ?></p>
                      </div>
                    </div>

                    <div class="col-sm-12">
                      <div class="form-group">
                          <div class="custom-control custom-switch ml-10">
                              <input type="checkbox" name="status" class="custom-control-input" value="1" id="switch-2" <?php if(evisit_settings(user()->id)->status == 1){echo "checked";} ?>>
                              <label class="custom-control-label" for="switch-2"><?php echo trans('live-consultation') ?></label>
                              <p class="text-muted"><small><?php echo trans('enable-to-allow-consultation') ?></small></p>
                          </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <input type="hidden" name="settings_id" value="<?php if (!empty(evisit_settings(user()->id))){echo evisit_settings(user()->id)->id;}else{echo 0;} ?>">
            
            <!-- csrf token -->
            <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">

            <div class="row">
              <div class="col-sm-12">
                  <button type="submit" class="btn btn-primary btn-md pull-left"><i class="ficon flaticon-check"></i> <?php echo trans('save-changes') ?></button>
              </div>
            </div>
          </form>

      </div>
  </section>
</div>
