$(document).ready(function(){$(window).scroll(function(){return $("nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(".header-carousel").owlCarousel({loop:!0,margin:0,nav:!0,autoplay:!0,responsive:{0:{items:1},600:{items:2}}});var e=$(".home-slider");e.owlCarousel({loop:!0,margin:0,nav:!0,responsive:{0:{items:1}}}),e.on("changed.owl.carousel",function(e){var t=e.item.index;$(".home-count .no-active").text("0"+e.item.count),$(".home-count .active").text("0"+(t+1))}),$(".next-home").click(function(){e.trigger("next.owl.carousel")}),$(".prev-home").click(function(){e.trigger("prev.owl.carousel")});var t=$(".reviews-carousel");t.owlCarousel({loop:!0,margin:30,nav:!1,responsive:{0:{items:1},768:{items:2},1e3:{items:3}}}),t.on("changed.owl.carousel",function(e){var t=e.item.index;if(4==t&&(t=e.item.count+4),t-4<10)var i="0";else var i="";$(".reviews-count .no-active").text(e.item.count),$(".reviews-count .active").text(i+(t-4))}),$(".next-reviews").click(function(){t.trigger("next.owl.carousel")}),$(".prev-reviews").click(function(){t.trigger("prev.owl.carousel")}),t.on("change.owl.carousel",function(e){$(".reviews-carousel .active .video").find("iframe").remove(),$(".reviews-carousel .active .video").find("img").show(),$(".reviews-carousel .active .video").find(".btn").show()}),$(".reviews-carousel .video").each(function(){$(this).find("img").attr("src","https://i.ytimg.com/vi_webp/"+$(this).data("id")+"/hqdefault.webp")}),$(".video .btn").click(function(){var e="https://www.youtube.com/embed/"+$(this).parent().data("id")+"?autoplay=1&autohide=1&rel=0&amp;showinfo=0";$(this).hide(),$(this).parent().find("img").hide(),$(this).parent().append('<iframe src="'+e+'"  width="'+$(this).parent().find("img").width()+'" height="'+$(this).parent().find("img").height()+'" frameborder="0"></iframe>')}),$(".item_bottom-slider").owlCarousel({loop:!1,margin:10,nav:!1,responsive:{0:{items:2,nav:!0},600:{items:3},1e3:{items:4}}}),$(".home_info-slider").owlCarousel({loop:!1,margin:0,nav:!1,items:1}),$(".consultation-carousel").owlCarousel({loop:!0,margin:0,nav:!1,responsive:{0:{items:1}}}),$(".owl-next, .arr-right").append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 12"><g data-name="Слой 2"><path d="M.73 7.13h18.68l-2.73 3a.86.86 0 0 0 0 1.12l.43.47a.66.66 0 0 0 1 0l4.69-5.21a.86.86 0 0 0 0-1.12L18.11.23a.66.66 0 0 0-1 0l-.43.47a.83.83 0 0 0-.21.56.81.81 0 0 0 .21.55l2.77 3.06H.72a.78.78 0 0 0-.72.81v.67a.76.76 0 0 0 .73.78z" data-name="Слой 1"/></g></svg>'),$(".owl-prev, .arr-left").append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 12"><g data-name="Слой 2"><path d="M22.27 4.87H3.59l2.73-3a.84.84 0 0 0 .21-.56.84.84 0 0 0-.2-.61L5.9.23a.66.66 0 0 0-1 0L.21 5.44a.86.86 0 0 0 0 1.12l4.69 5.21a.66.66 0 0 0 1 0l.43-.47a.83.83 0 0 0 .21-.56.8.8 0 0 0-.21-.55L3.56 7.13h18.72a.78.78 0 0 0 .72-.81v-.67a.76.76 0 0 0-.73-.78z"  data-name="Слой 1"/></g></svg>'),$(".owl-next span").remove(),$(".owl-prev span").remove(),$(".excursion-tab .link li").click(function(){$(".excursion-tab .link li").removeClass("active"),$(".excursion-tab .content .item").removeClass("active"),$(this).addClass("active"),$("#"+$(this).data("tab")).addClass("active")}),$('[data-src="#home_info"]').click(function(){$("#preview").attr("src",$(this).parents(".slider-item").find("img").attr("src")),$("#home_info .m-2").text(" ").append($(this).parents(".slider-item").find(".m-2").html()),$("#home_info .price").text(" ").append($(this).parents(".slider-item").find(".price").html()),$("#home_info .area").text(" ").append($(this).parents(".slider-item").data("area")),$("#home_info .box h4").text(" ").append($(this).parents(".slider-item").find("h4").html()),$("#home_info .box p").text($(this).parents(".slider-item").data("info")),$("#home_info .home_info-item .bottom").text(" ").append($(this).parents(".slider-item").find(".caption-item p").html()),$($("#home_info .home_info-slider .item")[0]).find("img").attr("src",$(this).parents(".slider-item").data("img_1")),$($("#home_info .home_info-slider .item")[1]).find("img").attr("src",$(this).parents(".slider-item").data("img_2"))}),$(".mob-btn").click(function(){$(".menu").slideToggle(200),$(".menu").toggleClass("bg")}),$("#price_input").ionRangeSlider({type:"double",grid:!1,min:54e3,max:101e5,from:12e5,to:85e5,postfix:" руб"}),$("#metr_input").ionRangeSlider({type:"double",grid:!1,min:3,max:411,from:50,to:289,postfix:"м<sup>2</sup>"}),$(".build-list li").click(function(){$(".build-list li").removeClass("active"),$(".build-content .item").removeClass("active"),$(this).addClass("active"),$("#"+$(this).data("tab")).addClass("active")})}),jQuery.cookie=function(e,t,i){if("undefined"==typeof t){var n=null;if(document.cookie&&""!=document.cookie)for(var a=document.cookie.split(";"),o=0;o<a.length;o++){var s=jQuery.trim(a[o]);if(s.substring(0,e.length+1)==e+"="){n=decodeURIComponent(s.substring(e.length+1));break}}return n}i=i||{},null===t&&(t="",i.expires=-1);var r="";if(i.expires&&("number"==typeof i.expires||i.expires.toUTCString)){var c;"number"==typeof i.expires?(c=new Date,c.setTime(c.getTime()+24*i.expires*60*60*1e3)):c=i.expires,r="; expires="+c.toUTCString()}var l=i.path?"; path="+i.path:"",u=i.domain?"; domain="+i.domain:"",m=i.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(t),r,l,u,m].join("")},function(e){function t(t,i){t.addClass("countdownHolder"),e.each(["Days","Hours","Minutes","Seconds"],function(i){e('<span class="count'+this+'">').html('<span class="position">\t\t\t\t\t<span class="digit static">0</span>\t\t\t\t</span>\t\t\t\t<span class="position">\t\t\t\t\t<span class="digit static">0</span>\t\t\t\t</span>').appendTo(t),"Seconds"!=this&&t.append('<span class="countDiv countDiv'+i+'"></span>')})}function i(t,i){var n=t.find(".digit");if(n.is(":animated"))return!1;if(t.data("digit")==i)return!1;t.data("digit",i);var a=e("<span>",{"class":"digit",css:{top:"-2.1em",opacity:0},html:i});n.before(a).removeClass("static").animate({top:"2.5em",opacity:0},"fast",function(){n.remove()}),a.delay(100).animate({top:0,opacity:1},"fast",function(){a.addClass("static")})}var n=86400,a=3600,o=60;e.fn.countdown=function(s){function r(e,t,n){i(d.eq(e),Math.floor(n/10)%10),i(d.eq(t),n%10)}var c,l,u,m,p,d,f=e.extend({callback:function(){},timestamp:0},s);return t(this,f),d=this.find(".position"),function v(){c=Math.floor((f.timestamp-new Date)/1e3),c<0&&(c=0),l=Math.floor(c/n),r(0,1,l),c-=l*n,u=Math.floor(c/a),r(2,3,u),c-=u*a,m=Math.floor(c/o),r(4,5,m),c-=m*o,p=c,r(6,7,p),f.callback(l,u,m,p),setTimeout(v,1e3)}(),this}}(jQuery),$(function(){function e(e,t,i){return n.setDate(n.getDate()+e),n.setHours(n.getHours()+t),n.setMinutes(n.getMinutes()+i),n}function t(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,i,n){e[i]=n});return e}function i(e){for(var t=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var a=i[n];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return null}var n=new Date;if($.cookie("timer"))var a=$.cookie("timer");else{var a=e(3,0,0);$.cookie("timer",a,{expires:3})}var o=($("#note"),new Date(a)),s=!0;new Date>o&&(o=(new Date).getTime()+864e6,s=!1),$("#countdown").countdown({timestamp:o,callback:function(e,t,i,n){}}),$(".countDays").append('<span class="subtitle">дн</span>'),$(".countHours").append('<span class="subtitle">час</span>'),$(".countMinutes").append('<span class="subtitle">мин</span>'),$(".countSeconds").append('<span class="subtitle">сек</span>'),$('input[name="utm_source"]').val(t().utm_source),$('input[name="utm_campaign"]').val(t().utm_campaign),$('input[name="utm_medium"]').val(t().utm_medium),$('input[name="utm_term"]').val(t().utm_term),$('input[name="utm_content"]').val(t().utm_content),$('input[name="click_id"]').val(t().aff_sub),$('input[name="affiliate_id"]').val(t().aff_id),$('input[name="ref"]').val(document.referrer),$.get("https://ipinfo.io",function(e){$('input[name="ip_address"]').val(e.ip),$('input[name="city"]').val(e.city),$('input[name="country"]').val(e.country),$('input[name="region"]').val(e.region)},"jsonp"),$("form").on("submit",function(e){e.preventDefault();var t=$(this),i=t.find("input, textarea, select");t.find(".submit").addClass("inactive"),t.find(".submit").prop("disabled",!0),$.ajax({type:"POST",url:"https://app.getresponse.com/add_subscriber.html",dataType:"json",data:i,success:function(e){}}),$.ajax({type:"POST",url:"db/registration.php",data:i,success:function(e){}}),setTimeout(function(){window.location.href="success.html"},1e3)}),setTimeout(function(){$(".gclid_field").val(i("gclid")),""==$(".gclid_field").val()&&$(".gclid_field").val(i("_gid"))},2e3)});