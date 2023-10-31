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
        'root' => 'web/',
        'v' => '30-10-2023',
    ],
    'qa.cedighana.org' => [
        'p' => 0,
        'frwk' => '/home/cedighana/public_html/',
        'api' => 'http://qa-api.cedighana.org/',
        'root' => '',
        'v' => time(),
    ],
    'localhost' => [
        'p' => 2,
        'frwk' => $_SERVER['DOCUMENT_ROOT'] . DS . 'anchoratechs' . DS,
        'api' => 'http://localhost/cedigh/api/',
        'root' => '',
        'v' => time(),
    ],
];
$config = $config[$_SERVER['HTTP_HOST']];

# M A I N
define('ROOT', dirname(__FILE__) . DS);
define('FRWK', $config['frwk']);

# A P P
define('__DATA__', ROOT . '_data' . DS);

# G E N E R A L
define('PEPPER', 'FzF{zYkRr(AzTNBXj6)#ruex8Y}k42KU');
define('DEBUG', false);
define('ERROR', false);
define('MYSQL', false);

# _ F R A M E W O R K
require_once FRWK . '_framework' . DS . 'auto-load.php';

# U R L s
define('_WEB_', WEB . $config['root'] . '_assets/');

# P E R M A L I N K S
$s = $config['p'];
$page = Permalinks::segment($s + 1);
$thisform = Permalinks::segment($s + 2);
$page = empty($page) ? 'home' : $page;

# Site data
$__ = [];
$sData = ['partners', 'services', 'teams', 'projects', 'contact', 'programmes'];
foreach ($sData as $_) {
    require __DATA__ . $_ . '.php';
    $__[$_] = $$_;
}

$v = $config['v'];

// CHtml::json_encode($services);
