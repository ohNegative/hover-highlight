// JavaScript Document
var $mtv = jQuery.noConflict();
$mtv(document).ready(mtv_hover_box);


function mtv_hover_box() {
    $mtv('#features-container > .features > ul > li').hover(function(){
        var $style = $mtv (this).attr("data-style");
        $mtv ("#feature-hover-box").attr("style", $style);
    }, function(){
        $mtv ("#feature-hover-box").attr("style", "");
    });

};



