<section class="mobex-section r-breadcurmbs-2 m-secondary-bg">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="wrap_breadcrumbs_1">
                    <h1 class="breadcurmbs-head">Our Services
                    </h1>
                    <ul class="breadcrumbs_content_1">
                        <li><a href="<?php echo WEB; ?>" title="home"> Home </a> /</li>
                        <li><span>Services</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="mobex-section services-section-3 spage-2">
    <div class="container">
        <div class="row row_services_3">
            <?php foreach($services as $srv): ?>
            <div class="col-lg-12 col-md-12 col-sm-12 col-12 col-service-3">
                <div class="wrap_service_3">
                    <div class="service-head-3">
                        <span class="service_3_icon">
                            <i class="fas fa-<?php echo $srv[0]; ?>"></i>
                        </span>
                        <div class="service_3_title">
                            <h3><?php echo $srv[1]; ?></h3>
                            <p style="text-transform: inherit;"><?php echo $srv[2]; ?></p>
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
