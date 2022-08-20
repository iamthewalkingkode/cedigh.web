<section class="mobex-section r-breadcurmbs-2 m-secondary-bg">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="wrap_breadcrumbs_1">
                    <h1 class="breadcurmbs-head">Our Programmes
                    </h1>
                    <ul class="breadcrumbs_content_1">
                        <li><a href="<?php echo WEB; ?>" title="home"> Home </a> /</li>
                        <li><span>Programmes</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>


<?php
$services = [
    ['building', 'Fellowship Programme', 'This fellowship programme develop the next generation of global leaders through leadership training and
mentorship. It is a one year leadership development programme designed to connect and develop young
global leaders to make a lasting contribution to their communities.', ],
    ['building', 'LED Programme', 'The Leadership and Entrepreneurship Development Programme as commonly called LED programme also
trains, mentor and provide funding opportunities to unemployed youth and start-up entrepreneurs. This
programme provides a week residential training, a year- long tailored package of online learning,
mentoring, networking and funding. <br/> <br/> <button onClick="window.location=\'https://play.google.com/store/apps/details?id=org.cedi.ghana.ledpro\'" class="btn btn-sm btn-dark">Get From Play Store</button>', ],
    ['users', 'Entrepreneurship Jobs for All (E-Jobs4All)', 'The Leadership and Entrepreneurship Development Programme as commonly called LED programme also
trains, mentor and provide funding opportunities to unemployed youth and start-up entrepreneurs. This
programme provides a week residential training, a year- long tailored package of online learning,
mentoring, networking and funding. <br/> <br/> <a href="' . WEB . 'e-jobs-4-all" class="btn btn-sm btn-dark">Apply here</a>'],
];
?>
<section class="mobex-section services-section-3 spage-2">
    <div class="container">
        <div class="row row_services_3">
            <?php foreach ($services as $srv): ?>
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
            <?php endforeach;?>
        </div>
    </div>
</section>
