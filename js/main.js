---
layout: null
---

{% include magnific-popup.v1.0.1-min.js %}
$(function(){
  $(".screenshots a").magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    },
    image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.html();
			}
		},
    mainClass: 'mfp-fade',
    removalDelay: 300
  });
  
  var navOpen = false,
      $navUL = $("nav ul");
  
  $("nav ul li:first-child").click(function(){
    if(navOpen == false){
      $navUL.addClass("open");
    } else {
      $navUL.removeClass("open");
    }
    
    navOpen = !navOpen;
  });
});
{% if site.analytics-id != null %}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', '{{ site.analytics-id }}', 'auto');
ga('send', 'pageview');
{% endif %}