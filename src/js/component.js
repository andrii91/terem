$(document).ready(function () {

  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.header-carousel').owlCarousel({
    loop: true,
    margin:0,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      }
    }
  })
  var home =   $('.home-slider');

home.owlCarousel({
    loop: true,
    margin:0,
    nav: true,
    responsive: {
      0: {
        items: 1
      }
    }
  })
/*  home.on('change.owl.carousel', function (event) {
    var index = event.item.index;
    var count = index;
  });*/

  home.on('changed.owl.carousel', function (event) {
    var index = event.item.index;
    /*if (index == 1) {
      index = event.item.count + 1;
    }*/
  
    $('.home-count .no-active').text('0' + event.item.count);
    $('.home-count .active').text('0' + (index +1));
  });
  $('.next-home').click(function () {
    home.trigger('next.owl.carousel');

  });
  $('.prev-home').click(function () {
    home.trigger('prev.owl.carousel');
  });
  
  var reviews =   $('.reviews-carousel');

reviews.owlCarousel({
    loop: true,
    margin:30,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
/*  reviews.on('change.owl.carousel', function (event) {
    var index = event.item.index;
    var count = index;
  });*/

  reviews.on('changed.owl.carousel', function (event) {
    var index = event.item.index;
    if (index == 4) {
      index = event.item.count + 4;
    }
    
    
    if((index-4) < 10){
       var pefix = '0';
       }else{
       var pefix = '';
         
       }
  
    $('.reviews-count .no-active').text(event.item.count);
    $('.reviews-count .active').text(pefix + (index-4));
  });
  $('.next-reviews').click(function () {
    reviews.trigger('next.owl.carousel');

  });
  $('.prev-reviews').click(function () {
    reviews.trigger('prev.owl.carousel');
  });
  
  reviews.on('change.owl.carousel', function (event) {
    $('.reviews-carousel .active .video').find('iframe').remove();
    $('.reviews-carousel .active .video').find('img').show();
    $('.reviews-carousel .active .video').find('.btn').show();
  });
  
  $('.reviews-carousel .video').each(function(){
//     $(this).find('img').attr('src', 'https://i.ytimg.com/vi/' + $(this).data('id') + '/maxresdefault.jpg');
    $(this).find('img').attr('src', 'https://i.ytimg.com/vi_webp/' + $(this).data('id') + '/hqdefault.webp');
  });
  
  $('.video .btn').click(function () {
    var iframe_url = "https://www.youtube.com/embed/" + $(this).parent().data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
    $(this).hide();
    $(this).parent().find('img').hide();
     $(this).parent().append('<iframe src="' + iframe_url + '"  width="'+$(this).parent().find('img').width()+'" height="'+$(this).parent().find('img').height()+'" frameborder="0"></iframe>')
  });
  
  $('.item_bottom-slider').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 2,
        nav: true
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
  
  $('.home_info-slider').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    items: 1
  })
  $('.consultation-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  })
  
  $('.owl-next, .arr-right').append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 12"><g data-name="Слой 2"><path d="M.73 7.13h18.68l-2.73 3a.86.86 0 0 0 0 1.12l.43.47a.66.66 0 0 0 1 0l4.69-5.21a.86.86 0 0 0 0-1.12L18.11.23a.66.66 0 0 0-1 0l-.43.47a.83.83 0 0 0-.21.56.81.81 0 0 0 .21.55l2.77 3.06H.72a.78.78 0 0 0-.72.81v.67a.76.76 0 0 0 .73.78z" data-name="Слой 1"/></g></svg>');
  $('.owl-prev, .arr-left').append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 12"><g data-name="Слой 2"><path d="M22.27 4.87H3.59l2.73-3a.84.84 0 0 0 .21-.56.84.84 0 0 0-.2-.61L5.9.23a.66.66 0 0 0-1 0L.21 5.44a.86.86 0 0 0 0 1.12l4.69 5.21a.66.66 0 0 0 1 0l.43-.47a.83.83 0 0 0 .21-.56.8.8 0 0 0-.21-.55L3.56 7.13h18.72a.78.78 0 0 0 .72-.81v-.67a.76.76 0 0 0-.73-.78z"  data-name="Слой 1"/></g></svg>');
  $('.owl-next span').remove();
  $('.owl-prev span').remove();
  
  $('.excursion-tab .link li').click(function(){
    $('.excursion-tab .link li').removeClass('active');
    $('.excursion-tab .content .item').removeClass('active');
    $(this).addClass('active');
    $('#'+$(this).data('tab')).addClass('active');
  });
  
  $('[data-src="#home_info"]').click(function(){
    $('#preview').attr('src', $(this).parents('.slider-item').find('img').attr('src'));
    $('#home_info .m-2').text(' ').append($(this).parents('.slider-item').find('.m-2').html());
    $('#home_info .price').text(' ').append($(this).parents('.slider-item').find('.price').html());
    $('#home_info .area').text(' ').append($(this).parents('.slider-item').data('area'));
    $('#home_info .box h4').text(' ').append($(this).parents('.slider-item').find('h4').html());
    $('#home_info .box p').text($(this).parents('.slider-item').data('info'));
    $('#home_info .home_info-item .bottom').text(' ').append($(this).parents('.slider-item').find('.caption-item p').html());
      $($('#home_info .home_info-slider .item')[0]).find('img').attr('src', $(this).parents('.slider-item').data('img_1'));
      $($('#home_info .home_info-slider .item')[1]).find('img').attr('src', $(this).parents('.slider-item').data('img_2'));

    
  });
  
  $('.mob-btn').click(function(){
    $('.menu').slideToggle(200);
    $('.menu').toggleClass('bg');
  });
  
  
  $("#price_input").ionRangeSlider({
     type: "double",
    grid: false,
    min: 54000,
    max: 10100000,
    from: 1200000,
    to: 8500000,
    postfix: "руб"
    });
  
  $("#metr_input").ionRangeSlider({
     type: "double",
    grid: false,
    min: 3,
    max: 411,
    from: 50,
    to: 289,
    postfix: "м<sup>2</sup>"
    });
});


jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

(function ($) {

  // Количество секунд в каждом временном отрезке
  var days = 24 * 60 * 60,
    hours = 60 * 60,
    minutes = 60;

  // Создаем плагин
  $.fn.countdown = function (prop) {

    var options = $.extend({
      callback: function () {},
      timestamp: 0
    }, prop);

    var left, d, h, m, s, positions;

    // инициализируем плагин
    init(this, options);

    positions = this.find('.position');

    (function tick() {

      // Осталось времени
      left = Math.floor((options.timestamp - (new Date())) / 1000);

      if (left < 0) {
        left = 0;
      }

      // Осталось дней
      d = Math.floor(left / days);
      updateDuo(0, 1, d);
      left -= d * days;

      // Осталось часов
      h = Math.floor(left / hours);
      updateDuo(2, 3, h);
      left -= h * hours;

      // Осталось минут
      m = Math.floor(left / minutes);
      updateDuo(4, 5, m);
      left -= m * minutes;

      // Осталось секунд
      s = left;
      updateDuo(6, 7, s);

      // Вызываем возвратную функцию пользователя
      options.callback(d, h, m, s);

      // Планируем следующий вызов данной функции через 1 секунду
      setTimeout(tick, 1000);
    })();

    // Данная функция обновляет две цифоровые позиции за один раз
    function updateDuo(minor, major, value) {
      switchDigit(positions.eq(minor), Math.floor(value / 10) % 10);
      switchDigit(positions.eq(major), value % 10);
    }

    return this;
  };


  function init(elem, options) {
    elem.addClass('countdownHolder');

    // Создаем разметку внутри контейнера
    $.each(['Days', 'Hours', 'Minutes', 'Seconds'], function (i) {
      $('<span class="count' + this + '">').html(
        '<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>'
      ).appendTo(elem);

      if (this != "Seconds") {
        elem.append('<span class="countDiv countDiv' + i + '"></span>');
      }
    });

  }

  // Создаем анимированный переход между двумя цифрами
  function switchDigit(position, number) {

    var digit = position.find('.digit')

    if (digit.is(':animated')) {
      return false;
    }

    if (position.data('digit') == number) {
      // Мы уже вывели данную цифру
      return false;
    }

    position.data('digit', number);

    var replacement = $('<span>', {
      'class': 'digit',
      css: {
        top: '-2.1em',
        opacity: 0
      },
      html: number
    });

    // Класс .static добавляется, когда завершается анимация.
    // Выполнение идет более плавно.

    digit
      .before(replacement)
      .removeClass('static')
      .animate({
        top: '2.5em',
        opacity: 0
      }, 'fast', function () {
        digit.remove();
      })

    replacement
      .delay(100)
      .animate({
        top: 0,
        opacity: 1
      }, 'fast', function () {
        replacement.addClass('static');
      });
  }
})(jQuery);

$(function () {
  var myDate = new Date();

  function returnEndDate(d,h,m){
   myDate.setDate(myDate.getDate()+d);
   myDate.setHours(myDate.getHours()+h);
   myDate.setMinutes(myDate.getMinutes()+m);
   return myDate;
  }
  if($.cookie("timer")){
   var dateEnd = $.cookie("timer");
  }else{
   var dateEnd = returnEndDate(3,0,0);
   $.cookie("timer", dateEnd, {expires: 3});
  }


  var note = $('#note'),
   ts = new Date(dateEnd),
    // ts =dateEnd,
//    ts = new Date(2018, 02, 11),
    newYear = true;

  if ((new Date()) > ts) {
    // Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
    // Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
    ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
    newYear = false;
  }

  $('#countdown').countdown({
    timestamp: ts,
    callback: function (days, hours, minutes, seconds) {

    }
  });
  $('.countDays').append('<span class="subtitle">дн</span>');
  $('.countHours').append('<span class="subtitle">час</span>');
  $('.countMinutes').append('<span class="subtitle">мин</span>');
  $('.countSeconds').append('<span class="subtitle">сек</span>');

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    }
    $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
    $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
    $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
    $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
    $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
    $('input[name="click_id"]').val(getUrlVars()["aff_sub"]);
    $('input[name="affiliate_id"]').val(getUrlVars()["aff_id"]);
//     $('input[name="page_url"]').val(window.location.hostname);
    $('input[name="ref"]').val(document.referrer);

    $.get("https://ipinfo.io", function(response) {
        $('input[name="ip_address"]').val(response.ip);
        $('input[name="city"]').val(response.city);
        $('input[name="country"]').val(response.country);
        $('input[name="region"]').val(response.region);
    }, "jsonp");

  $('form').on('submit', function (e) {

      e.preventDefault();

      var $form = $(this);
      var msg = $form.find('input, textarea, select');
      $form.find('.submit').addClass('inactive');
      $form.find('.submit').prop('disabled', true);

      $.ajax({
        type: 'POST',
        url: 'https://app.getresponse.com/add_subscriber.html',
        dataType: 'json',
        data: msg,
        success: function (response) {}
      });

      $.ajax({
        type: 'POST',
        url: 'db/registration.php',
        data: msg,
        success: function (response) {}
      });

    setTimeout(function() {
        window.location.href = 'success.html';
      }, 1000);
    });


//  $("input[name='custom_telephone']").mask("+38 999 999 99 99");

  function readCookie(name) {
        var n = name + "=";
        var cookie = document.cookie.split(';');
        for (var i = 0; i < cookie.length; i++) {
            var c = cookie[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(n) == 0) {
                return c.substring(n.length, c.length);
            }
        }
        return null;
    }
    setTimeout(function() {
        $('.gclid_field').val(readCookie('gclid'));
        if ($('.gclid_field').val() == '') {
	        $('.gclid_field').val(readCookie('_gid'));
        }
    }, 2000);
});