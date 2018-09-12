function checkSubmit(form) {
    var $form = $(form);
    var submit_url = 'http://tracker.vitaliy.dev.aivix.com/register/aivix';
    var form = event.target;
    var data = $(form).serialize();

	// $(".user_category_affiliate").prop("checked")
 //    $(".user_category_company").prop("checked")
    
console.log(data)
    $.post(submit_url, data).done(function (data) {
        var test= data;
    })
}