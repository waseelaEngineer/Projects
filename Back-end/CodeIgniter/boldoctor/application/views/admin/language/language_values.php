
<div class="content-wrapper">
  <!-- Start content -->
  <div class="content">
    <div class="container">

      <div class="row">
        <div class="col-md-12" style="display: block;">
          <div class="box">
              <div class="box-header"><h3 class="box-title">Language Values</h3></div>
              <div class="box-body">
                  <form method="post" class="validate-form" action="<?php echo base_url('admin/language/add_value')?>" role="form" novalidate>
                      
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label><?php echo trans('label') ?></label>
                            <input type="text" class="form-control" placeholder="Example: Home / Register User" name="label" autocomplete="off" required>
                          </div><br>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                            <label><?php echo trans('keyword') ?></label>
                            <input type="text" class="form-control" placeholder="Example: home / register_user" name="keyword" autocomplete="off" required>
                          </div>
                        </div>

                        <div class="col-md-4 hides">
                          <div class="form-group">
                              <label class="col-sm-2 control-label p-0" for="example-input-normal">Type</label>
                              <select class="form-control" name="type" required>
                                  <option value="">Select</option>
                                  <option value="front">Frontend</option>
                                  <option value="admin">Admin</option>
                                  <option selected value="user">User</option>
                              </select>
                          </div>
                        </div>

                      </div>

                      <input type="hidden" name="lang" value="<?php echo html_escape($value) ?>">
                      <!-- csrf token -->
                      <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">

                 
                        <div class="col-sm-12 p-0">
                            <button type="submit" class="btn btn-primary btn-lg btn-block pull-right"><i class="fa fa-check"></i> <?php echo trans('save') ?></button>
                        </div>
                

                  </form>
              </div>
          </div>
        </div>

        <div class="col-md-12 add_area">
          <div class="box input_area">
            <div class="box-header">
      
              <h4 class="box-title pt-10 pull-<?php echo($settings->dir == 'rtl') ? 'right' : 'left'; ?>"><?php echo trans('update-language-for') ?> - <?php echo ucfirst($value) ?> </h4>

              <div class="ml-10 dropdown pull-<?php echo($settings->dir == 'rtl') ? 'left' : 'right'; ?>">
                <button type="button" class="btn btn-light-primary dropdown-toggle btn-sm" data-toggle="dropdown">
                  <?php echo ucfirst($type) ?>            
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="<?php echo base_url('admin/language/values/front/'.$value) ?>"><?php echo trans('frontend') ?></a>
                  <a class="dropdown-item" href="<?php echo base_url('admin/language/values/admin/'.$value) ?>"><?php echo trans('admin') ?></a>
                  <a class="dropdown-item" href="<?php echo base_url('admin/language/values/user/'.$value) ?>"><?php echo trans('user') ?></a>
                </div>
              </div>

              <div class="dropdown pull-<?php echo($settings->dir == 'rtl') ? 'left' : 'right'; ?>">
                <button type="button" class="btn btn-light-primary dropdown-toggle btn-sm" data-toggle="dropdown">
                  <i class="fa fa-language"></i> <?php echo ucfirst($value); ?>              
                </button>
                <div class="dropdown-menu">
                  <?php $lang_list = get_language(); ?>
                  <?php foreach ($lang_list as $lg): ?>
                    <a class="dropdown-item" href="<?php echo base_url('admin/language/values/'.$type.'/'.$lg->slug) ?>"><?php echo ucfirst($lg->name) ?></a>
                  <?php endforeach ?>
                </div>
              </div>

              
            </div>
            <div class="box-body">

            <form method="post" class="validate-form" action="<?php echo base_url('admin/language/update_values/'.$type)?>" role="form" novalidate>

              <div class="row">
                <div class="col-sm-6">
                    <button type="submit" class="mb-10 btn btn-primary pull-<?php echo($settings->dir == 'rtl') ? 'right' : 'left'; ?> m-t-20"><i class="fa fa-check"></i> <?php echo trans('update-values') ?></button>
                </div>
                <div class="col-sm-6">
                    
                </div>
              </div>

              <table class="table table-bordered table-striped dataTable">
                <thead>
                  <tr role="row">
                    <th>#</th>
                    <th><?php echo trans('type') ?></th>
                    <th><?php echo trans('label') ?></th>
                    <th><?php echo trans('value') ?> <br><small>(<?php echo trans('insert-your-translate-value-here') ?>)</small></th>
                  </tr>
                </thead>
                <tbody>
                  <?php $i=1; foreach ($language as $lang): ?>
                    <tr class="tr-phrase">
                      <td style="width: 50px;"><?php echo $i; ?></td>
                      <td style="width: 10%;">
                        <span class="label label-inverse"><?php echo ucfirst($lang->type); ?></span>
                      </td>
                      <td style="width: 40%">
                        <p class="mb-0"><b><?php echo trans('label') ?>:</b> <?php echo html_escape($lang->label) ?></p>
                        <p><b><?php echo trans('keyword') ?>:</b> <?php echo html_escape($lang->keyword) ?></p>
                      </td>
                      <td style="width: 50%;" <?php if($value == 'arabic'){echo "dir='rtl'";} ?>>
                        <textarea rows="2" name="value<?php echo html_escape($lang->id) ?>" class="form-control" style="min-height: 50px !important;"><?php echo html_escape($lang->$value) ?></textarea>
                        <!-- <input type="text" name="value<?php echo html_escape($lang->id) ?>" class="form-control" value="<?php echo html_escape($lang->$value) ?>"> -->
                      </td>
                    </tr>
                  <?php $i++; endforeach ?>

                </tbody>
              </table>

              <input type="hidden" name="lang_type" value="<?php echo html_escape($value) ?>">
              <!-- csrf token -->
              <input type="hidden" name="<?php echo $this->security->get_csrf_token_name();?>" value="<?php echo $this->security->get_csrf_hash();?>">

              <div class="row">
                <div class="col-sm-6">
                    <button type="submit" class="btn btn-primary pull-<?php echo($settings->dir == 'rtl') ? 'right' : 'left'; ?> m-t-20"><i class="fa fa-check"></i> <?php echo trans('update-values') ?></button>
                </div>
                <div class="col-sm-6">
                    
                </div>
              </div>

            </form>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
