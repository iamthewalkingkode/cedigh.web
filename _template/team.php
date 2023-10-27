<section class="mobex-section r-breadcurmbs-2 m-secondary-bg">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="wrap_breadcrumbs_1">
                    <h1 class="breadcurmbs-head">Board Of Directors</h1>
                    <ul class="breadcrumbs_content_1">
                        <li><a href="<?php echo WEB; ?>" title="home"> Home </a> /</li>
                        <li><span>Board of Directors</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>



<?php if (empty($thisform) == true) {?>
<section class="mobex-section core-values-page">
    <div class="container">
        <div class="row row_core_values">
            <?php foreach ($__['teams'] as $slug => $team): ?>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 col-core tp_animate_when_visible fade-top start_animation" data-offest="70%" data-speed="600">
                <div class="wrap_service bottom-text">
                    <div class="service-img" style="background-image: url(<?php echo _WEB_ . 'img/team/' . $slug . '.png?v=' . $v; ?>);">

                    </div>
                    <div class="service-text">
                        <h3><?php echo $team[0]; ?></h3>
                        <p>- <?php echo $team[1]; ?> -</p>
                        <p><?php echo Engine::shorten($team[2], 120); ?>...</p>
                        <a href="<?php echo WEB . 'team/' . $slug; ?>" class="btn btn-sm btn-primary btn-outline">Read More</a>
                    </div>
                </div>
                <p>&nbsp;</p>
            </div>
            <?php endforeach;?>
        </div>
    </div>
</section>
<?php } else {?>
    <?php $team = $__['teams'][$thisform];?>
    <section class="mobex-section m-single-page msp-project">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12 col-12">
                    <img src="<?php echo _WEB_ . 'img/team/' . $thisform . '.png?v=' . $v; ?>" alt="<?php echo $team[0]; ?>" />
                </div>
                <div class="col-lg-7 col-md-12 col-12">
                    <div class="wrapa_project_details single-page">
                        <h3><?php echo $team[0]; ?></h3>
                        <div class="project_desc">
                            <p><?php echo $team[2]; ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php }?>