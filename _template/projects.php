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

<?php
$iprojects = array(
    array('Youth Unemployment Advocacy', 'This civic dialogue was organized in 2017 for foreign diplomats (high commissioners/ambassadors), council of state, government ministers, academicians and business experts under the theme, “Youth unemployment: A call for Action”. This was an avenue for new idea generation to address the unemployment issue in Ghana which passed a resolution to the Government of Ghana. This project was sponsored by BUSAC Fund with support from the Government of Ghana (Office of the Senior Minister, Ministry of Employment and Labour Relation, Ministry of Trade and Industry and Ministry of Agriculture).'),
    
    array('ENTREPRENEURSHIP FOR PEACE (EFP) PROJECT', 'This was organized in 2016 to promote peace in our presidential election through entrepreneurship training
and mentorship. 1000 Ghanaian youth benefitted from this programme.')
);
?>
<section class="mobex-section core-values-page">
    <div class="container">
        <div class="row row_core_values">
            <?php foreach($iprojects as $i => $prj): ?>
            <div class="col-lg-12 col-md-6 col-sm-6 col-12 col-core tp_animate_when_visible fade-top start_animation" data-offest="70%" data-speed="600" style="margin-bottom:25px;">
                <div class="wrap_service bottom-text">
                    <div class="service-text">
                        <img src="<?php echo _WEB_.'img/project/project_'.$i.'.jpg'; ?>" alt="<?php echo $prj[0]; ?> - CEDI GHANA" />
                        <div>&nbsp;</div>
                        <h3><?php echo $prj[0]; ?></h3>
                        <p><?php echo $prj[1]; ?></p>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
