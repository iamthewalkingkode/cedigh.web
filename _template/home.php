<?php
$slides = [
    ['Promoting <br /> <small>National Development</small>', '1'],
    ['Fighting <br /> <small>Poverty and Unemployment</small>', '2'],
    ['Together <br /> <small>We Build</small>', '3'],
];
?>
<section class="mobex-slider mobex-slider-3">
    <div class="owl-carousel r_slider" data-fade="true" data-nav="off">
        <?php foreach ($slides as $slide): ?>
        <div class="r_wrap_slider r_wrap_slider_3">
            <div class="r_slider_img" style="background-image:url(<?php echo _WEB_ . 'img/slider/' . $slide[1] . '.jpg?v=' . $v; ?>)"></div>
            <div class="r-slider-container">
                <div class="r-slider-conten container">
                    <h1 class="slider-title tp_animate_when_visible bottom-t-top" data-speed="600">
                        <?php echo $slide[0]; ?>
                    </h1>
                </div>
            </div>
        </div>
        <?php endforeach;?>
    </div>
</section>

<section class="mobex-section private_services tertiary-bg">
    <div class="container">
        <div class="row row_private_services">
            <?php foreach ($__['services'] as $srv): ?>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12 col-private-services">
                <div class="wrap_private-service">
                    <div class="icon_private_service">
                        <i class="fas fa-<?php echo $srv[0]; ?>"></i>
                    </div>
                    <div class="private_service_content">
                        <h4><?php echo $srv[1]; ?></h4>
                        <p><?php echo Engine::shorten($srv[2]); ?></p>
                        <a href="<?php echo WEB . 'services/'; ?>" title="Read More"
                            class="head-title m-small-btn m-primary-color">Read More <i
                                class="fas fa-long-arrow-alt-right m-primary-color"></i></a>
                    </div>
                </div>
            </div>
            <?php endforeach;?>
        </div>
    </div>
</section>

<section class="mobex-section our-mission m-secondary-bg">
    <div class="container">
        <div class="row row_mission align-items-center">
            <div class="col-lg-9 col-md-12 col-12">
                <div class="wrap_mission tp_animate_when_visible fade-bottom" data-offest="75%" data-speed="600">
                    <h2 class="m-title"><strong>Our Mission</strong> is to promote national development. We
                        positively impact the life of people.</h2>
                </div>
            </div>
            <div class="col-lg-3 col-md-12  col-12">
                <div class="wrap_mission_icon explore_project tp_animate_when_visible fade-left" data-offest="75%"
                    data-speed="600" data-delay="500">
                    <a href="<?php echo WEB . 'about/'; ?>" class="head-title m-primary-bg">About Company <i
                            class="fas fa-long-arrow-alt-right"></i></a>

                </div>
            </div>
        </div>
    </div>
</section>

<section class="mobex-section partners-section m-secondary-bg">
    <div class="container">
        <div class="row_partners">
            <ul>
                <?php foreach ($__['partners'] as $part): ?>
                <li>
                    <a target="_blank" href="<?php echo $part[2]; ?>">
                        <img styles="height: 55px;" src="<?php echo _WEB_ . 'img/partners/' . $part[0]; ?>"
                            alt="<?php echo $part[1]; ?>" title="<?php echo $part[1]; ?>" style="border-radius: 6px;" />
                    </a>
                </li>
                <?php endforeach;?>
            </ul>

        </div>
    </div>
</section>

<section class="mobex-section about_us_3 ">
    <div class="container">
        <div class="row row_about_3">
            <div class="col-lg-12 col-md-12 col-12 col-aboutus">
                <div class="wrap_aboutus_3">
                    <?php foreach ($__['projects'] as $prj): ?>
                    <div class="row row_about_pvm justify-content-center align-items-center tp_animate_when_visible fade-bottom"
                        data-offest="75%" data-speed="300">
                        <div class="col-lg-3 col-md-3  col-12 col-aicon">
                            <span class="about_us_3_icon">
                                <i class="fas fa-<?php echo $prj['icon']; ?>"></i>
                            </span>
                        </div>
                        <div class="col-lg-3 col-md-4  col-12 col-atitle">
                            <h3 class="about_us_3_title"><?php echo $prj['name']; ?></h3>
                        </div>
                        <div class="col-lg-6 col-md-12 col-12 col-atext">
                            <p class="about_us_3_text"><?php echo $prj['description']; ?></p>
                        </div>
                    </div>
                    <?php endforeach;?>
                </div>
            </div>
        </div>
    </div>
</section>