jQuery(document).ready(function ($) {

  $('.contact-form').submit(function (event) {
      event.preventDefault();
      var formData = $(this).serialize();
      var form = this;
      // console.log(formData);
      $.ajax({
          type: 'POST',
          url: '/mail.php',
          data: formData,
          success: function(data){
              successSend(form);
              // console.log(data);
              successSend(form, '#contactAlert');
          },
      })
  });
});


function successSend(form, alertId){
  $(alertId).addClass("show");

  setTimeout(function(){
    $(alertId).removeClass("show");
  }, 4000);

  $(form).find('.form-control').val('');
}
