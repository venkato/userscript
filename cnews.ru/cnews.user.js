// ==UserScript==
// @name       nik
// @namespace  http://nik/
// @version    0.1
// @match       *://*.cnews.ru/*
// @include     http://*.cnews.ru/*
// @copyright  2011+, You
// ==/UserScript==

console.log('begin');


var ggm=new Object();
ggm.j=jQuery;
ggm.done=false;

ggm.fff=function(){
	ggm.hideactual();	
	setTimeout(ggm.hideactual, 1000);
	setTimeout(ggm.hideactual, 2000);
	setTimeout(ggm.hideactual, 3000);
}

ggm.hideactual=function(){
	ggm.j(".cut_popup_overlay").hide();
	ggm.j("#popup1").hide();
	console.log('done');
	ggm.done=true;
}


window.nickgm=ggm;
jQuery(document).ready( ggm.fff);


 
  
