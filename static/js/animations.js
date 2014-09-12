$(document).ready(function(){


$("#getStarted").click(function(){
	var height = $(window).height();
   $('html,body').animate({scrollTop: height/2}, "slow");
});

});