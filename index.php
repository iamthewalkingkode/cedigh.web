<?php include 'config.php';?>
<!doctype html>
<html lang="en-US">

<head>
    <meta charset="utf-8">
    <title> CEDI Ghana </title>
    <?php CHtml::meta([
    'url' => WEB,
    'type' => 'website',
    'locale' => 'en_US',
    'title' => 'CEDI Ghana',
    'keywords' => 'cedi ghana, cedi ngo, cedi, E-Jobs4All, Entrepreneurship Jobs For All',
    'description' => '',
    'site_name' => 'CEDI Ghana',
    'publisher' => 'Anchora Technologies LTD',
    'image' => _WEB_ . 'img/favicon.png',
]);?>
    <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
    <link rel="shortcut icon" href="<?php echo _WEB_ . 'img/favicon.png'; ?>" type="image/x-icon">
    <link rel="icon" href="<?php echo _WEB_ . 'img/favicon.png'; ?>" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,600i,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,400i,500,500i,700,700i,900" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="<?php echo _WEB_ . 'css/bootstrap.min.css'; ?>" media="all">
    <link rel="stylesheet" href="<?php echo _WEB_ . 'css/all.min.css'; ?>" media="all">
    <link rel="stylesheet" href="<?php echo _WEB_ . 'css/owl.carousel.min.css'; ?>" media="all">
    <link rel="stylesheet" href="<?php echo _WEB_ . 'css/light-box.css'; ?>" media="all">
    <link rel="stylesheet" href="<?php echo _WEB_ . 'css/tp-animation.css'; ?>" media="all">
    <link rel="stylesheet" href="<?php echo _WEB_ . 'css/style.css'; ?>" media="all">
    <link rel="stylesheet" href="<?php echo _WEB_ . 'css/responsive.css'; ?>" media="all">
    <link rel="stylesheet" href="<?php echo _WEB_ . 'css/custom.css'; ?>" media="all">

    <link rel="stylesheet" href="@sweetalert2/theme-borderless/borderless.css">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- React -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Tailwindcss -->
    <!-- <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2.2.7/dist/tailwind.min.css" /> -->
    <!-- mui -->
    <script src="https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <!--  -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-data-grid/6.1.0/react-data-grid.min.js"></script>
</head>

<body class="m-frames">

    <div id="preloader">
        <div id="preloader-inner"></div>
    </div>

    <header class="tp-main-menu header-menu-3 sticky-header m-secondary-bg">
        <div class="head_3_container">
            <div class="container">
                <div class="row row_menu_2 justify-content-center">
                    <div class="col-lg-2 col-md-12 col-12 col-logo">
                        <div class="tagpoint-wrap-logo ">
                            <a href="<?php echo WEB; ?>">
                                <img src="<?php echo _WEB_ . 'img/logo.jpg'; ?>" alt="CEDI Ghana Logo" class="dark-logo">
                                <img src="<?php echo _WEB_ . 'img/light-logo.png'; ?>" alt="CEDI Ghana Logo" class="light-logo">
                            </a>
                            <span class="phone_menu ">
                                <span class="m-f m-primary-bg"></span>
                                <span class="m-m m-primary-bg"></span>
                                <span class="m-s m-primary-bg"></span>
                            </span>
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-12 col-12">
                        <nav class="tp-menu tagpoint-menu-2">
                            <ul class="tagpoint-main-menu head-title">
                                <li class="<?php echo $page == 'home' ? 'current_page_item' : ''; ?>">
                                    <i class="fas fa-chevron-down tp_phone_dropdown"></i>
                                    <a href="<?php echo WEB; ?>">Home</a>
                                </li>
                                <li class="<?php echo $page == 'about' ? 'current_page_item' : ''; ?>">
                                    <i class="fas fa-chevron-down tp_phone_dropdown"></i>
                                    <a href="<?php echo WEB . 'about'; ?>">About Us</a>
                                </li>
                                <li class="<?php echo $page == 'services' ? 'current_page_item' : ''; ?>">
                                    <i class="fas fa-chevron-down tp_phone_dropdown"></i>
                                    <a href="<?php echo WEB . 'services'; ?>">Services</a>
                                </li>
                                <li class="<?php echo $page == 'team' ? 'current_page_item' : ''; ?>">
                                    <i class="fas fa-chevron-down tp_phone_dropdown"></i>
                                    <a href="<?php echo WEB . 'team'; ?>">Board of Directors</a>
                                </li>
                                <li class="<?php echo $page == 'projects' ? 'current_page_item' : ''; ?>">
                                    <i class="fas fa-chevron-down tp_phone_dropdown"></i>
                                    <a href="<?php echo WEB . 'projects'; ?>">Projects</a>
                                </li>
                                <li class="<?php echo $page == 'programmes' ? 'current_page_item' : ''; ?>">
                                    <i class="fas fa-chevron-down tp_phone_dropdown"></i>
                                    <a href="<?php echo WEB . 'programmes'; ?>">Programmes</a>
                                </li>
                                <li class="<?php echo $page == 'contact' ? 'current_page_item' : ''; ?>">
                                    <i class="fas fa-chevron-down tp_phone_dropdown"></i>
                                    <a href="<?php echo WEB . 'contact'; ?>">Contact Us</a>
                                </li>
                                <li class="m_wrap_phone">
                                    <a href="tel:+233 54 301 3467">+233 54 301 3467</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>

<?php
$template = ROOT . '_template/' . $page . '.php';
if (file_exists($template) == true) {
    include $template;
} else {
    include '_template/404.php';
}
?>

    <!-- footer -->
    <footer class="mobex-section footer-section m-secondary-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div class="wrap_footer_col">
                        <img src="<?php echo _WEB_ . 'img/'; ?>light-logo.png" alt="CEDI Ghana" />
                        <p class="head-title">
                        Community and Entrepreneurial Development Initiative commonly called CEDI Ghana is a registered company limited by guarantee incorporated under Ghana’s Company Act, 1963 (Act 179)...
                        </p>
                        <ul class="footer_sicons">
                            <li><a target="_blank" href="https://www.facebook.com/cedigha/" title="facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a target="_blank" href="https://www.twitter.com/cedi_ghana/" title="twitter"><i class="fab fa-twitter"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/cedighana/" title="linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div class="wrap_footer_col footer-nav">
                        <h3 class="footer-title">Company</h3>
                        <ul class="footer-list head-title">
                            <li><a href="<?php echo WEB . 'about'; ?>"><i class="fas fa-arrow-right"></i><span>About Us</span></a></li>
                            <li><a href="<?php echo WEB . 'team'; ?>"><i class="fas fa-arrow-right"></i><span>Board of Directors</span></a></li>
                            <li><a href="<?php echo WEB . 'projects'; ?>"><i class="fas fa-arrow-right"></i><span>Our Projects</span></a></li>
                            <li><a href="<?php echo WEB . 'programmes'; ?>"><i class="fas fa-arrow-right"></i><span>Our Programmes</span></a></li>
                            <li><a href="<?php echo WEB . 'services'; ?>"><i class="fas fa-arrow-right"></i><span>Our Services</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 col-sm-6 col-12">
                    <div class="wrap_footer_col our_address">
                        <h3 class="footer-title">Our Address</h3>
                        <p class="head-title contact-address">P. O. Box KS 6486, Kumasi</p>
                        <p class="contact_number head-title">
                            <i class="fas fa-phone"></i> <a href="tel: +233 54 301 3467" class="contac_number m-primary-color">  +233 54 301 3467 </a>
                        </p>
                        <p class="contact_email head-title">Email Us via :
                            <i class="m-primary-color">info@cedighana.org</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container ">
            <div class="row copywright_row text-center">
                <div class="col-12">
                    <p class="copywright">All Rights Reserved. Designed &amp; Maintained By <a target="_blank" href="https://anchoratechs.com">Anchora Technologies Ltd</a> - © 2015-<?php echo date('Y'); ?> CEDI Ghana
                    </p>
                </div>
            </div>
        </div>
    </footer>
    <script>
        const API = '<?php echo $config['api']; ?>';
    </script>
    <script src="<?php echo _WEB_ . 'js/jquery.min.js'; ?>"></script>
    <script src="<?php echo _WEB_ . 'js/owl.carousel.min.js'; ?>"></script>
    <script src="<?php echo _WEB_ . 'js/masonary.min.js'; ?>"></script>
    <script src="<?php echo _WEB_ . 'js/multipleFilterMasonry.js'; ?>"></script>
    <script src="<?php echo _WEB_ . 'js/noframework.waypoints.min.js'; ?>"></script>
    <script src="<?php echo _WEB_ . 'js/light-box.js'; ?>"></script>
    <script src="<?php echo _WEB_ . 'js/jquery.countTo.js'; ?>"></script>
    <script src="<?php echo _WEB_ . 'js/wow.min.js'; ?>"></script>
    <script src="<?php echo _WEB_ . 'js/index.js'; ?>"></script>
    <!-- scripts -->
    <script src="<?php echo _WEB_ . 'js/axius.js?v=' . time(); ?>" type="text/javascript"></script>
    <script src="<?php echo _WEB_ . 'js/e-jobs-4-all/form.json.js?v=' . time(); ?>" type="text/babel"></script>
    <script src="<?php echo _WEB_ . 'js/e-jobs-4-all/theme.js?v=' . time(); ?>" type="text/babel"></script>
    <script src="<?php echo _WEB_ . 'js/e-jobs-4-all/app.js?v=' . time(); ?>" type="text/babel"></script>
</body>


</html>
