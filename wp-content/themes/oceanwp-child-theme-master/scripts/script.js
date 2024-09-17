/* Code pour fermer la popup */

jQuery(function($) {	
	$('.popup-close').click(function(){
		$('.popup-overlay').hide(); // cibler la div '.popup-overlay' et non le parent
	});
});
