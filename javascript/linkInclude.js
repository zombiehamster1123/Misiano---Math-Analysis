var head = $('head');

var jqueryMobileThemeCSS = ('<link href="../phone/jquery.mobile.theme-1.3.1.min.css" rel="stylesheet" type="text/css"/>');
var jqueryMobileStructureCSS = ('<link href="../phone/jquery.mobile.structure-1.3.1.min.css" rel="stylesheet" type="text/css"/>');
var mathscribeCSS = ('<link rel="stylesheet" href="../mathscribe/jqmath-0.4.0.css">');
var layoutCSS = ('<link href="../css/layout.css" type="text/css" rel="stylesheet" />');

var jqueryJava = ('<script src="../phone/jquery-1.10.1.min.js" type="text/javascript"></script>');
var jqueryMobileJava = ('<script src="../phone/jquery.mobile-1.3.1.min.js" type="text/javascript"></script>');
var mathscribeJava = ('<script src="../mathscribe/jqmath-etc-0.4.0.min.js"></script>');
var applicationJava = ('<script type="application/javascript" src="../javascript/iscroll.min.js"></script>');
var zoomoozJava = ('<script src="../javascript/jquery.zoomooz.min.js" type="text/javascript"></script>');

var include = jqueryMobileThemeCSS.concat(jqueryMobileStructureCSS, mathscribeCSS, layoutCSS, jqueryJava, jqueryMobileJava, mathscribeJava, applicationJava, zoomoozJava);

head.append(include);

/*

<link href="../phone/jquery.mobile.theme-1.3.1.min.css" rel="stylesheet" type="text/css"/>
<link href="../phone/jquery.mobile.structure-1.3.1.min.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="../mathscribe/jqmath-0.4.0.css">
<link href="../css/layout.css" type="text/css" rel="stylesheet" />

<script src="../phone/jquery-1.10.1.min.js" type="text/javascript"></script>
<script src="../phone/jquery.mobile-1.3.1.min.js" type="text/javascript"></script>
<script src="../mathscribe/jqmath-etc-0.4.0.min.js"></script>
<script type="application/javascript" src="../javascript/iscroll.min.js"></script>
<script src="../javascript/jquery.min.js" type="text/javascript"></script>
<script src="../javascript/jquery.zoomooz.min.js" type="text/javascript"></script>

*/