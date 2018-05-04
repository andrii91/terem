$(document).ready(function () {

  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.header-carousel').owlCarousel({
    loop: true,
    margin:0,
    nav: true,
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
    if (index == 1) {
      index = event.item.count + 1;
    }
  
    $('.home-count .no-active').text('0' + event.item.count);
    $('.home-count .active').text('0' + (index - 1));
  });
  $('.arr-right').click(function () {
    home.trigger('next.owl.carousel');

  });
  $('.arr-left').click(function () {
    home.trigger('prev.owl.carousel');
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
        items: 4
      }
    }
  })
  
  $('.home_info-slider').owlCarousel({
    loop: false,
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
    $('#home_info .m-2').text(' ').append($(this).parents('.slider-item').find('.m-2').html())
    $('#home_info .price').text(' ').append($(this).parents('.slider-item').find('.price').html())
    $('#home_info .box h4').text(' ').append($(this).parents('.slider-item').find('h4').html())
    $('#home_info .box p').text($(this).parents('.slider-item').data('info'))
    $('#home_info .home_info-item .bottom').text(' ').append($(this).parents('.slider-item').find('.caption-item p').html())
    $('#home_info .home_info-slider .item')[0].find('img').attr('src',$(this).parents('.slider-item').data('img_1'));
    $('#home_info .home_info-slider .item')[1].find('img').attr('src',$(this).parents('.slider-item').data('img_2'));
    
  })
});