  $(document).ready(function() {
      $(".loader").fadeOut(500, function() {
          $(".spiner").fadeOut(500)
          $("body").css("overflow", "auto")
      });

  })



  $('.social-info input').click(function(e) {
      $(this).siblings().css("color", "#008FFF");
  });

  $('.backup-item').click(function(e) {
      $(this).css("color", "#008FFF");
      $(this).css("border-color", "#008FFF");
  });







  if (localStorage.getItem('dark') != null) {
      Dark()
      $('.Night').addClass('d-none')


  } else {
      Light()
      $('.Light').addClass('d-none')

  }

  $('#dark').click(function(e) {
      if (localStorage.getItem('dark') != null) {
          localStorage.removeItem('dark')
          Light()
          $('.Light').addClass('d-none')
          $('.Night').removeClass('d-none')

      } else {

          localStorage.setItem('dark', 'dark')
          Dark()
          $('.Night').addClass('d-none')
          $('.Light').removeClass('d-none')


      }

  })

  function Dark() {
      $('.item').addClass('item-dark');
      $('.file-item').addClass('item-dark');
      $(".item .user-photo").addClass('user-photoDark')
      $('.item-text').addClass('item-textDark');
      $('.title').addClass('titleDark')
      $('input').addClass('input-dark')
      $('textarea').addClass('area-dark')
      $('aside').addClass('item-dark')
      $('aside li').addClass('item-dark')
      $('.main').addClass('mainDark')
      $("body").addClass('body-dark')
      $('.row').addClass("rowDark")
      $('.Night').addClass('d-none')
      $('.Day-card p').addClass('carddark')
      $('.active').addClass('activeDark')
  }

  function Light() {
      $('.item').removeClass('item-dark');
      $('.file-item').removeClass('item-dark');
      $("body").removeClass('body-dark')

      $(".item .user-photo").removeClass('user-photoDark')
      $('.item-text').removeClass('item-textDark');
      $('.title').removeClass('titleDark')
      $('input').removeClass('input-dark')
      $('textarea').removeClass('area-dark')
      $('aside').removeClass('item-dark')
      $('aside li').removeClass('item-dark')
      $('.main').removeClass('mainDark')
      $('.row').removeClass("rowDark")
      $('.Light').removeClass('d-none')
      $('.Day-card p').removeClass('carddark')
      $('.active').removeClass('activeDark')
  }