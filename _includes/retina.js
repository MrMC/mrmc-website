/*
	Author: Troy Mcilvena (http://troymcilvena.com)
	Twitter: @mcilvena
	Date: 02 July 2012
	Version: 1.2
	
	Revision History:
		1.0 (23/08/2010)	- Initial release.
		1.1 (02/07/2012)    - Modified by Daniel Radtke to keep same rendered size.
		1.2 (10/02/2013)    - Modified by Daniel Radtke to make sure that the load event fires when image cached.
*/
var isRetina=function(){ return (window.devicePixelRatio && window.devicePixelRatio > 1); };
$.fn.retina = (function(retina_part) {
	
	// Set default retina file part to '@2x'
	// Eg. some_image.jpg will become some_image@2x.jpg
	var settings = { retina_part: ".2x"};
	if(retina_part){
		jQuery.extend(settings, retina_part);
	}
	
	if(settings.debug)
		window.devicePixelRatio=2;
		
	if(window.devicePixelRatio > 1) {
		this.each(function(index, element) {
			var $element=$(element);

            if($element.attr('src').split('.').pop().toLowerCase() == 'svg')
                return;

			$element.one('load', function() {
				if($element.attr("src")!=undefined && !$element.attr('src').match(/^(https?:)?\/\/img\.youtube\.com/)){
					$(document.createElement("img")).one('load', function(){
						var $this=$(this);
						var oldWidth=$element.width();
						var oldHeight=$element.height();
						$element.attr("src", $this.attr("src"));						
					})
					.attr("src",$element.attr("src").replace(/(.+?)(\.([^\.\?]+)(\?.*)?)$/i, "$1"+ settings['retina_part'] +"$2$4") )
					.each(function(){
						if(this.complete) $(this).load();
					});
				}
			}).each(function(){
				if(this.complete) $(this).load();
			});
		});
	}
	
	return this;
	
});