$(document).ready(function(){
 
 $('.readmore').click(showMore);
 $('.readless').click(showLess);
 $('.learnmore').click(learnMore);
 $('.learnless').click(learnLess);
 
 
 function showMore(){
 $('#readMoreText').slideDown();
 $('.readless').show();
 $('.readmore').hide();
 }
 
 function showLess(){
 $('#readMoreText').slideUp();
 $('.readmore').show();
 $('.readless').hide();	
 }
 
 function learnMore(){
 $('#learnMoreText').slideDown();
 $('.learnless').show();
 $('.learnmore').hide();
 }
 
 function learnLess(){
 $('#learnMoreText').slideUp();
 $('.learnmore').show();
 $('.learnless').hide();
 }