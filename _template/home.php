    <section class="mobex-slider mobex-slider-3">
        <div class="owl-carousel r_slider" data-fade="true" data-nav="off">
            <div class="r_wrap_slider r_wrap_slider_3">
                <div class="r_slider_img" style="background-image:url(<?php echo _WEB_.'img/slider/1.jpg'; ?>)"></div>
                <div class="r-slider-container">
                    <div class="r-slider-conten container">
                        <h1 class="slider-title tp_animate_when_visible bottom-t-top" data-speed="600">
                            Promoting <br /> <small>National Development</small>
                        </h1>
                    </div>
                </div>
            </div>
            <div class="r_wrap_slider r_wrap_slider_3">
                <div class="r_slider_img" style="background-image:url(<?php echo _WEB_.'img/slider/2.jpg'; ?>)"></div>
                <div class="r-slider-container">
                    <div class="r-slider-conten container">
                        <h1 class="slider-title tp_animate_when_visible bottom-t-top" data-speed="600">
                            Fighting <br /> <small>Poverty and Unemployment</small>
                        </h1>
                    </div>
                </div>
            </div>
            <div class="r_wrap_slider r_wrap_slider_3">
                <div class="r_slider_img" style="background-image:url(<?php echo _WEB_.'img/slider/3.jpg'; ?>)"></div>
                <div class="r-slider-container">
                    <div class="r-slider-conten container">
                        <h1 class="slider-title tp_animate_when_visible bottom-t-top" data-speed="600">
                            Together <br /> <small>We Build</small>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mobex-section private_services tertiary-bg">
        <div class="container">
            <div class="row row_private_services">
                <?php foreach($services as $srv): ?>
                <div class="col-lg-4 col-md-6 col-sm-6 col-12 col-private-services">
                    <div class="wrap_private-service">
                        <div class="icon_private_service">
                            <i class="fas fa-<?php echo $srv[0]; ?>"></i>
                        </div>
                        <div class="private_service_content">
                            <h4><?php echo $srv[1]; ?></h4>
                            <p><?php echo Engine::shorten($srv[2]); ?></p>
                            <a href="<?php echo WEB.'services/'; ?>" title="Read More" class="head-title m-small-btn m-primary-color">Read More <i class="fas fa-long-arrow-alt-right m-primary-color"></i></a>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section class="mobex-section our-mission m-secondary-bg">
        <div class="container">
            <div class="row row_mission align-items-center">
                <div class="col-lg-9 col-md-12 col-12">
                    <div class="wrap_mission tp_animate_when_visible fade-bottom" data-offest="75%" data-speed="600">
                        <h2 class="m-title"><strong>Our Mission</strong> is to promote national development. We positively impact the life of people.</h2>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12  col-12">
                    <div class="wrap_mission_icon explore_project tp_animate_when_visible fade-left" data-offest="75%" data-speed="600" data-delay="500">
                        <a href="<?php echo WEB.'about/'; ?>" class="head-title m-primary-bg">About Company <i class="fas fa-long-arrow-alt-right"></i></a>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mobex-section partners-section m-secondary-bg">
        <div class="container">
            <div class="row_partners">
                <ul>
                    <?php foreach($partners as $part): ?>
                    <li>
                        <a target="_blank" href="<?php echo $part[2]; ?>">
                            <img styles="height: 55px;" src="<?php echo _WEB_.'img/partners/'.$part[0]; ?>" alt="<?php echo $part[1]; ?>" />
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>

            </div>
        </div>
    </section>

    <section class="mobex-section about_us_3 ">
        <div class="container">
            <div class="row row_about_3">
                <div class="col-lg-12 col-md-12 col-12 col-aboutus">
                    <div class="wrap_aboutus_3">
                        <div class="row row_about_pvm justify-content-center align-items-center tp_animate_when_visible fade-bottom" data-offest="75%" data-speed="300">
                            <div class="col-lg-3 col-md-3  col-12 col-aicon">
                                <span class="about_us_3_icon">
                                    <i class="fas fa-lightbulb"></i>
                                </span>
                            </div>
                            <div class="col-lg-3 col-md-4  col-12 col-atitle">
                                <h3 class="about_us_3_title">
                                    Youth Unemployment <br /> Advocacy
                                </h3>
                            </div>
                            <div class="col-lg-6 col-md-12 col-12 col-atext">
                                <p class="about_us_3_text">
                                    This civic dialogue was organized in 2017 for foreign diplomats (high commissioners/ambassadors), council of state, government ministers, academicians and business experts under the theme, “Youth unemployment: A call for Action”.
                                </p>
                            </div>
                        </div>
                        <div class="row row_about_pvm justify-content-center align-items-center tp_animate_when_visible fade-bottom" data-offest="75%" data-speed="300" data-delay="500">
                            <div class="col-lg-3 col-md-3  col-12 col-aicon">
                                <span class="about_us_3_icon">
                                    <i class="fas fa-users"></i>
                                </span>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-atitle">
                                <h3 class="about_us_3_title">
                                    ENTREPRENEURSHIP FOR PEACE <br /> (EFP) PROJECT
                                </h3>
                            </div>
                            <div class="col-lg-6 col-md-12 col-12 col-atext">
                                <p class="about_us_3_text">
                                    This was organized in 2016 to promote peace in our presidential election through entrepreneurship training and mentorship. 1000 Ghanaian youth benefitted from this programme.
                                </p>
                            </div>
                        </div>
                        <div class="row row_about_pvm justify-content-center align-items-center tp_animate_when_visible fade-bottom" data-offest="75%" data-speed="500" data-delay="500">
                            <div class="col-lg-3 col-md-3 col-12 col-aicon">
                                <span class="about_us_3_icon">
                                    <i class="fas fa-building"></i>
                                </span>
                            </div>
                            <div class="col-lg-3 col-md-3  col-12 col-atitle">
                                <h3 class="about_us_3_title">
                                    LED  <br /> Programme
                                </h3>
                            </div>
                            <div class="col-lg-6 col-md-12 col-12 col-atext">
                                <p class="about_us_3_text">
                                    The Leadership and Entrepreneurship Development Programme as commonly called LED programme also trains, mentor and provide funding opportunities to unemployed youth and start-up entrepreneurs. This programme provides a week residential training, a year- long tailored package of online learning, mentoring, networking and funding.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>