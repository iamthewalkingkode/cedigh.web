<?php

/**************************************
 ************* 2017 CEDI GH ************
 ******** @date : THU 03 JAN 2019 ******
 *** @author : ANCHORA TECHNOLOGIES ****
 **************************************/

# G L O B A L
global $msg, $status, $page, $action, $type, $thisform, $thisname, $thiskode, $kode, $data, $submit;

define('DS', DIRECTORY_SEPARATOR);

$config = [
    'cedighana.org' => [
        'p' => 0,
        'frwk' => '/home/cedighana/public_html/',
        'api' => 'https://ledapi.cedighana.org/',
    ],
    'qa.cedighana.org' => [
        'p' => 0,
        'frwk' => '/home/cedighana/public_html/',
        'api' => 'https://qa-api.cedighana.org/',
    ],
    'localhost' => [
        'p' => 2,
        'frwk' => $_SERVER['DOCUMENT_ROOT'] . DS . 'anchoratechs' . DS,
        'api' => 'http://localhost/cedigh/api/',

    ],
];
$config = $config[$_SERVER['HTTP_HOST']];

# M A I N
define('ROOT', dirname(__FILE__) . DS);
define('FRWK', $config['frwk']);

# A P P
define('__PUBLIC__', ROOT . '_public' . DS);
define('__TEMPL__', ROOT . '_lib' . DS . 'tpl' . DS);
define('__CONTROL__', ROOT . '_lib' . DS . 'ctrl' . DS);
define('__AJAX__', ROOT . '_lib' . DS . 'ajax' . DS);

# G E N E R A L
define('PEPPER', 'FzF{zYkRr(AzTNBXj6)#ruex8Y}k42KU');
define('DEBUG', false);
define('ERROR', false);
define('MYSQL', false);

# _ F R A M E W O R K
require_once FRWK . '_framework' . DS . 'auto-load.php';

# U R L s
define('_WEB_', WEB . '_assets/');

# P E R M A L I N K S
$s = $config['p'];
$page = Permalinks::segment($s + 1);
$thisform = Permalinks::segment($s + 2);
$page = empty($page) ? 'home' : $page;

# Site Data
$partners = [
    ['melr.png', 'Ministry of Employment and Labour Relations', 'http://melr.gov.gh'],
    ['moti.png', 'Minisry of Trade and Industry', 'http://moti.gov.gh/'],
    ['mobd.png', 'Ministry of Business Development', 'http://mobd.gov.gh'],
    ['mofa.png', 'Ministry of Food &amp; Agriculture', 'http://mofa.gov.gh'],
    ['neip.jpg', 'National Entrepreneurship and Innovation Programmes', 'http://neip.gov.gh'],
    ['unagh.jpg', 'United Nation Association', 'http://unagh.org'],
    ['anchora.png', 'Anchora Technologies', 'https://anchoratechs.com'],
    ['busac.png', 'BUSAC Fund', 'http://busac.org'],
];

$services = [
    ['building', 'National Development Strategies Formulation', 'Since Economic Growth is almost invariable the outcome of national development strategies, we assist government in it development with good policies and strategies through the press. National development areas we promote include increasing skills and capacity, reduction / elimination in poverty, unemployment eradication. We solve problems confronting the country/ national problems. '],
    ['road', 'Community Development Projects', 'which includes provision of community welfare programmes like vocational rehabilitation, provision of recreational facilities and entrepreneurial training. We promote economic growth/ production & employment and social work for communities. We advocate with and on behalf of the community for reform underlying social, political and economic conditions that undermine community welfare like discrimination, lack of access to health care, child abuse and others. We seek to unite unorganized people in the community into effective groups and coalitions in pursuit of a social agenda.'],
    ['users', 'Social Research', 'We investigate and analyze social needs and problems and provide directions to policies and actions that help to make remedial goals identifiable and achievable. We research into areas that hinder national development and evaluate the effectiveness of agency programme operations aimed at mitigating such problems. Research findings are analyzed and recommendations made regarding remedial policies and programmes.
Our services are not limited to only national but will provide direct services to businesses that include professional services like research, business consulting, financial consultancy, management consulting, educational consulting, marketing and many more.
Services planned for ordinary members include a free medical screening, a permanent education facility, entrepreneurial training and skill, vocational training and many others. Since a country enjoying full growth is an outcome of different social classes cooperating and working together, we will collaborate with the various ministries for our projects. For instance, we will collaborate with the Ministry of Food and Agriculture (MoFA) for agricultural projects.'],
];
