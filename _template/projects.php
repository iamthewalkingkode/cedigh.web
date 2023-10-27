<section class="mobex-section r-breadcurmbs-2 m-secondary-bg">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="wrap_breadcrumbs_1">
                    <h1 class="breadcurmbs-head">Our Projects
                    </h1>
                    <ul class="breadcrumbs_content_1">
                        <li><a href="<?php echo WEB; ?>" title="home"> Home </a> /</li>
                        <li><span>Projects</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="mobex-section core-values-page">
    <div class="container">
        <div class="row row_core_values">
            <?php foreach ($__['projects'] as $prj): ?>
            <div class="col-lg-12 col-md-6 col-sm-6 col-12 col-core tp_animate_when_visible fade-top start_animation" data-offest="70%" data-speed="600" style="margin-bottom:25px;">
                <div class="wrap_service bottom-text">
                    <div class="service-text">
                        <?php if ($prj['image']): ?>
                        <img src="<?php echo _WEB_ . 'img/project/' . $prj['image'] . '.jpg'; ?>" alt="<?php echo $prj['name']; ?> - CEDI GHANA" />
                        <?php endif;?>
                        <div>&nbsp;</div>
                        <h3><?php echo $prj['name']; ?></h3>
                        <p><?php echo $prj['description']; ?></p>
                    </div>
                </div>
            </div>
            <?php endforeach;?>
        </div>
    </div>
</section>
