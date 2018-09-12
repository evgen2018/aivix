

 // carusel-materialize video/img
  $(document).ready(function(){
    $('.carousel').carousel({
    	numVisible:3,
    	dist:-150,
    	padding:-280
    });
  });

     $('.nav-next').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
   });

       $('.nav-prev').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
   });

// *******************************

// instagram API
		setTimeout(function(){
		jQuery(function($){
			var tok = '7773509982.ba4c844.d0fa4f28750c444e9811e4889074f662', 
    			userid = 7773509982, 
    			kolichestvo = 6;
    			$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: tok, count: kolichestvo}, // передаем параметры, которые мы указывали выше
	success: function(result){
 		// console.log(result);
		for( x in result.data ){
			$('.instagram_photos').append('<li class="instagram_item col-xs-4"><img src="'+result.data[x].images.low_resolution.url+'"></li>'); // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
			// result.data[x].images.thumbnail.url - URL картинки 150х150
			// result.data[x].images.standard_resolution.url - URL картинки 612х612
			// result.data[x].link - URL страницы данного поста в Инстаграм 
		}
	},
	error: function(result){
		console.log(result); // пишем в консоль об ошибках
	}
});
		},3000)

		});

		// ************************************************


// popUp
		$('.language_select').click(function(e){
			e.preventDefault();
			$(this).toggleClass('lan_act')
			$('.sel_lan_list').slideToggle(500)
		})
		function loginIn(e){
			e.preventDefault();
          $('.login_wrap').fadeIn(700);
           // $('.login').fadeIn(700);
		}

		function loginOut(e){
			e.preventDefault();
          $('.login_wrap').fadeOut(700);
           $('.login').fadeOut(700);
		}

			$('.login_link').click(loginIn);


function joinIn(e){

			if (e) e.preventDefault();
           $('.join').fadeIn(500);
          $('.join_wrap').fadeIn(500);
		}

		function loginOut(e){
			e.preventDefault();
          $('.join_wrap').fadeOut(500);
           $('.join').fadeOut(500);

		}

			$('.join_link').click(joinIn);

 
 (function(){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".login_in"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			 $('.join_wrap').fadeOut(700);
           $('.join').fadeOut(700);
		}
	});
})();



(function(){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".login"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			 $('.login_wrap').fadeOut(700);
           $('.login').fadeOut(700);
		}
	});
})();

// *****************************************************


	// $('.fifth_block .uk-slidenav-previous').click(function(){
	// 	$('.uk-active').css('zIndex', '99');
	// 	 if ($('.fifth_block .uk-active').is('li:first-of-type')){
	// 	 	$('.uk-slider-items li:last-child').css('zIndex', '101') 
	// 			} else { 
	// 				// alert('first')
	// 			$('.uk-active').prev().css('zIndex', '101');
	// 			}
	// });

	// $('.fifth_block .uk-slidenav-next').click(function(){
	// 	$('.uk-active').css('zIndex', '99');
	// 	 if ( $('.fifth_block .uk-active').is('li:last-of-type') ){
	// 			$('.uk-slider-items li:first-child').css('zIndex', '101')
	// 			// $('.uk-slider-items li').removeClass('uk-active')
	// 			// $('.uk-slider-items li:first-child').addClass('uk-active')
	// 			} else { 
	// 				$('.uk-active').next().css('zIndex', '101');
	// 			}
	// });


// *****************************************************


// checkbox style in popUp
			// $('.gender_item').click(function(){
			// 	$('.gender_item').css('color', '#8d8e8e');
			// 	$(this).css('color', '#269aef');
			// })
		// function hover(e){
		// 	var oldSrc = $(this).find('img').attr('src');
		// 		if (oldSrc.indexOf('-Hover.png') > -1)  { 
		// 		 $(this).find('img').attr('src', oldSrc.replace('-Hover', '') )
		// 	} else {
		// 		 $(this).find('img').attr('src', oldSrc.split('.')[0]+'-Hover.png') ;
		// 		}
		// }

		// 	$('.advantages_item').hover(hover,hover);


		// smooth scroll 

	$(document).on('click', '.back', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $('header').offset().top
    }, 1200);
});

	$(document).ready(function(){
  $('.third_block .owl-carousel').owlCarousel({
  	nav:true,
  	margin:20,
  	items:4,
  	loop:true,
  	responsive:{
  			0:{
  				items:3
  			},
  			1400:{
  				items:4
  			},
  			1800:{
  				items:5
  			}
  	}
  });
});

	 function makeOpacitySlides(){
   	 // $('.third_block .owl-item.center').addClass('no_opacity');
  	   	$('.third_block .owl-item').removeClass('no_opacity');
  	   	$('.third_block .owl-item.active').addClass('no_opacity');
   	 $('.third_block .owl-item.active').first().removeClass('no_opacity').css('opacity', '0.5');
   	 $('.third_block .owl-item.active').last().removeClass('no_opacity').css('opacity', '0.5');
  }
  	 $('.third_block .owl-carousel').on('translated.owl.carousel', makeOpacitySlides);
  	 $('.third_block .owl-carousel').on('initialized.owl.carousel ', makeOpacitySlides);
  	 

  	 $(document).ready(function() {
		setTimeout(function(){
			$('.preloader').fadeOut(500)
		},1500)
    
});

  	 function get_name_browser(){
    var ua = navigator.userAgent;    
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    // if (ua.search(/Firefox/) > 0) return 'Firefox';
    // if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    // if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    return 'Не определен';
    
}


// ***************************************************


function createSelect(obj) {
        // $('select').selectize({plugins: ['remove_button', 'preserve_search']});
        $(obj).each(function() {

        	var selectize = $(this).selectize({
        		plugins: ['remove_button'],
        		openOnFocus: false,
        		closeAfterSelect: true
        	})[0].selectize;

            // Close dropdown on clicking on plugin X
            selectize.$control.on('click', function() {
            	if (selectize.isOpen){
            		selectize.close();
            	}else{
            		selectize.open();
            	}
            });

            //Close dropdown on adding item
            selectize.on('item_add', function() {
            	selectize.close();
            });

            //Close dropdown on removing item
            selectize.on('item_remove', function() {
            	selectize.close();
            });

        });
        $('.selectize-input > input').prop('disabled', 'disabled');
    }



    function createSelect2(obj) {
        // $('select').selectize({plugins: ['remove_button', 'preserve_search']});
        $(obj).each(function() {

        	var selectize = $(this).selectize({
        		plugins: ['remove_button'],
        		openOnFocus: false,
        		closeAfterSelect: true
        	})[0].selectize;

            // Close dropdown on clicking on plugin X
            selectize.$control.on('click', function() {
            	if (selectize.isOpen){
            		selectize.close();
            	}else{
            		selectize.open();
            	}
            });

            // Close dropdown on adding item
            selectize.on('item_add', function() {

            	selectize.close();
            	selectize.onBlur();

            });

            selectize.on('dropdown_close', function() {
            	
            	selectize.close();
            	selectize.onBlur();

            });

            //Close dropdown on removing item
            selectize.on('item_remove', function() {
            	
            	selectize.close();
            	selectize.onBlur();
            });


        });
        $('.selectize-input > input').prop('disabled', 'disabled');
    }


        // Load JSON and render stltct fild

// var messengerArr = ['None', 'Skype', 'Telegram', 'QQ'];

// $('select[name="messenger[]"]').append('<option value="" selected disabled>Select Preferred Messenger</option>')
//                 $.each( messengerArr, function( index, val) {
//                 	console.log(val)
//                     $('select[name="messenger[]"]').append("<option value='"+val+"</option>")
//                 })
createSelect2('select[name="state"]')
createSelect2('select[name="state2"]')


$.getJSON( "uploadData.json", function( data ) {



	console.log('verticals= ' + data.vertical)
	$('select[name="verticals[]"]').append('<option value="" selected disabled>Verticals</option>')
	$.each( data.vertical, function( key, value ) {
		$('select[name="verticals[]"]').append("<option value='"+key+"'>"+value+"</option>")
	})
	createSelect('select[name="verticals[]"]')


	console.log('traffic_source= ' + data.traffic_source)
	$('select[name="traffic_sources[]"]').append('<option value="" selected disabled>Your Traffic Source</option>')
	$.each( data.traffic_source, function( key, value ) {
		$('select[name="traffic_sources[]"]').append("<option value='"+key+"'>"+value+"</option>")
	})
	createSelect('select[name="traffic_sources[]"]')
});




$(document).ready(function () {
	$('[data-click="data-click"]').on('click', function (e) {
       	e.preventDefault();
       	$(location).attr('href', 'https://aivix.com/?ref_aff=472&source=mbonuspage');
    });
});



$('.aside-list li a').on('click', function(e){e.preventDefault(); 
 var el=$(e.target);
	 el.next().slideToggle();
	 // alert(el) 
	});

// insert multydot in header
(function(){
	var arrText= document.querySelectorAll('.blog_img_list .text') ; 
for (var i=0; i<arrText.length; i++ ) { $(arrText[i]).html($(arrText[i]).html().slice(0,38)+' ...');  }
})()


// if not Safari dynamic svg img*********************

if (get_name_browser() != 'Safari') {
				$('.bg_1_svg').css("backgroundImage", "url('img/svg/bg-origin2.svg')");
		// background: url('/img/svg/bg-origin2.svg');
	};


//hover on arr in video-slider 
// $('.carousel .nav-next').hover(function(){
// 	$('.carousel .nav-next img').attr('src', 'img/icons/arr-right-blue.png');
// }, function(){
// 	$('.carousel .nav-next img').attr('src', 'img/icons/arr-right.png');
// })

// $('.carousel .nav-prev').hover(function(){
// 	$('.carousel .nav-prev img').attr('src', 'img/icons/arr-right-blue.png');
// }, function(){
// 	$('.carousel .nav-prev img').attr('src', 'img/icons/arr-right.png');
// })


	// function createSelect(obj) {
 //        // $('select').selectize({plugins: ['remove_button', 'preserve_search']});
 //        $(obj).each(function() {

 //            var selectize = $(this).selectize({
 //                plugins: ['remove_button'],
 //                openOnFocus: false,
 //                closeAfterSelect: true
 //            })[0].selectize;

 //            // Close dropdown on clicking on plugin X
 //            selectize.$control.on('click', function() {
 //                if (selectize.isOpen){
 //                    selectize.close();
 //                }else{
 //                    selectize.open();
 //                }
 //            });

 //            //Close dropdown on adding item
 //            selectize.on('item_add', function() {
 //                selectize.close();
 //            });

 //            //Close dropdown on removing item
 //            selectize.on('item_remove', function() {
 //                selectize.close();
 //            });
 //        });
 //        $('.selectize-input > input').prop('disabled', 'disabled');
 //    }

// $('#select-state-disabled').selectize({
// 					maxItems: 1,  
//                 plugins: ['remove_button'],
//                 openOnFocus: false,
//                 closeAfterSelect: true
// });


//open list with preferred messengers
$('select[name="state"]').change( function() {
	
	($('select[name="state"]').val() != 'none') ? ($('.messenger_aff')).slideDown(500) : ($('.messenger_aff')).slideUp(500)  
});
//******
$('select[name="state2"]').change( function() {
	
	($('select[name="state2"]').val() != 'none') ? ($('.messenger_adv')).slideDown(500) : ($('.messenger_adv')).slideUp(500)  
});
//******

// change register category (affiliate/advertiser) 
var role='aff';
$('input[name="role"]').change(function(){
	$('.form_affiliate, .form_advertiser').fadeOut(0);

	if ( $(".register_category_affiliate").prop("checked") ){
		role='aff';
		console.log(role)
$('.checkbox_input[name="role"]').val('affiliate')

		if ( $(".user_category_company").prop("checked") || $("user_category_affiliate").prop("checked") ) {
			$('.login_in').css('minHeight', '678px'); }
			$(".form_affiliate").fadeIn(300);

		} else {
			role='adv';
			console.log(role)
			$('.checkbox_input[name="role"]').val('advertiser')
			$('.login_in').css('minHeight', '535px');

			$(".form_advertiser").fadeIn(300);
		} 
	});





//check and send form 





// $('.error_password').parent().find('input').css('border', '1px solid #f00')
function removeInputReqComp(){
	$('.block_input_company input').removeAttr('required');
}

function addInputReqComp(){
	$('.block_input_company input').attr('required', 'required')
}
// removeInputReqComp();

removeInputReqComp()

function submitHandler(e){
	e.preventDefault();
	//clear all error
	var form= $(this);

form.find('.error_password_conformation').fadeOut(300).parent().find('input').css('border', '1px solid #ccc');
$('.error_make_choice').hide()

	



// var data = $(form).serialize();

	 $('.error_name, .error_company, .error_password, .error_email').css('display','none');
     $(form).find('input').css('border','1px solid #ccc');



	if ( (form.find('.password').val() != form.find('.repeat_password').val()) || 
	(form.hasClass('form_affiliate') && !($(".user_category_company").prop("checked")) && !($(".user_category_affiliate").prop("checked")) )  ){

		if ((form.find('.password').val() != form.find('.repeat_password').val()))	{
			form.find('.error_password_conformation').fadeIn(300).parent().find('input').css('border', '1px solid #f00');
		}
		
		if(form.hasClass('form_affiliate') && !($(".user_category_company").prop("checked")) && !($(".user_category_affiliate").prop("checked")) ){
			$('.error_make_choice').show()
		}
		
	} else {


//**************************************** check/change data and send post 
			
			var data = {};
			
			$(form).find('input, textarea, select').each(function() {
				if(this.name=='additional_notes'){
					data['about'] = $(this).val();
				} else if (this.name=='checkbox' || ( this.name=='other[]' && !( $(this).prop("checked")) ) || this.name=='checkbox22' || this.name=='user_category'){
						return
				} else if(this.name=='other[]'){
					if (! data['other[]']) { data['other[]']=[] };
					data['other[]'].push( $(this).val() );

				} else if (this.name=='state2'){
					data['state']=$(this).val();
				} else {
			  data[this.name] = $(this).val();
				}
			});

			console.log(data)
			console.log($('select[name="traffic_sources[]"]'))

//****************************************		
	var submit_url = 'http://tracker.vitaliy.dev.aivix.com/register/aivix';    
	
    $.post(submit_url, data).done(function (data) {
        if(data==='SUCCESS'){
        	form.parent().html('<h4 style="padding:60px">Your sign up information send for moderation, please check your Email.</h4>')
        }
        else{	 for (var index in data) {
                        // alert(index + ' error ' + data[index][0]);
                        $(form).find('label.error_' + index).text(data[index][0]);
                        $(form).find('label.error_' + index).css('display','block');
                        $(form).find('input[name=' + index + ']').css('border','2px solid red');
                    }
        	
        }
    })
}}


function putParameterFromUrl(urlParam){
    var value = $.urlParam(urlParam);
   if (value) {
     $('.'+urlParam).val(value);
    }
}




//  var submit_url = 'http://tracker.vitaliy.dev.aivix.com/register/aivix';
//     var form = event.target;
//     var data = $(form).serialize();

// 	// $(".user_category_affiliate").prop("checked")
//  //    $(".user_category_company").prop("checked")
    
// console.log(data)
//     $.post(submit_url, data).done(function (data) {
//         var test= data;
//     })


// ***************************************************

// change user category (copmany/Individual) handler


function changeUserCat(){
	$('.login_in').css('minHeight', '678px');
	var select='.selectize-control.form-select.multi.plugin-remove_button';
// ($('.selectize-control.form-select.multi.plugin-remove_button, .additional_notes').slideUp(500))

//close all after change 
$('.block_input_company, .block_company_left, .promo_checkbox_div, .promo_code_div, .individual_affiliate ').slideUp(0);

removeInputReqComp();


( ( $('.promo_code_checkboxs').prop('checked') && !($(".user_category_company").prop("checked")) && $('.promo_code_div ').css('display') =='none') &&
	$('.promo_code_div').slideDown() );

// $('.selectize-control.form-select.multi.plugin-remove_button').css('border', '5px solid #f00');


//apear elems, it depends if user company or not
if ( $(".user_category_company").prop("checked") ){ 

	$('.individual_affiliate input').hide();
	$('.block_company input').show();

	$('.block_company .company_name').attr('name','company');

	$('.block_company .additional_notes').attr('name', 'additional_notes');
	$('.individual_affiliate .additional_notes').attr('name','');

	$('.individual_affiliate .form-traffic_sources').attr('name','');
    $('.individual_affiliate .form-verticals').attr('name','');

    $('.block_company .form-traffic_sources').attr('name','traffic_sources[]');
    $('.block_company .form-verticals').attr('name','verticals[]');

	addInputReqComp(); 
	$('.block_input_company, .block_company_left,' +select+', .additional_notes').slideDown(300);

} else { 

	$('.block_company input').hide();
	$('.individual_affiliate input').show();

    $('.block_company .additional_notes').attr('name','');

    $('.block_company .company_name').removeAttr('name');


    $('.block_company .form-traffic_sources').attr('name','');
    $('.block_company .form-verticals').attr('name','');

    $('.individual_affiliate .form-traffic_sources').attr('name','traffic_sources[]');
    $('.individual_affiliate .form-verticals').attr('name','verticals[]');

	$('.individual_affiliate .additional_notes').attr('name', 'additional_notes');
	$(' .promo_checkbox_div,'+select+', .individual_affiliate ').slideDown(300)
	 } 
}

// changeUserCat()


$('input[name="user_category"]').change(function(){
changeUserCat()
});




	

$('.promo_code_checkboxs').change(function(){ 
            // ( $('.promo_code_checkboxs').prop("checked")) ? null : $(this).parent().find('label.error_promo_code').hide();
             // ($('.promo_code_checkboxs').prop("checked")) ? null : $('.promo_code_checkboxs:checked').parent().find('label.error_promo_code').hide();
             ( $(this).parent().next().hasClass('promo_code_div') && 
             	$(this).parent().next().css('display')=='block' ) ? ($(this).parent().next().slideUp(500)) : 
             ($(this).parent().next().slideDown(500))
         });





$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results==null){
		return null;
	}
	else{
		return results[1] || 0;
	}
}


// ref_system***************************************


var ref_aff = $.urlParam('ref_aff');

if(ref_aff) {
	joinIn()
	$('.ref_aff').val(ref_aff);
    // $(".affiliate_id").val(affiliate_id);
    var date = new Date(new Date().getTime() + (3600 * 24 * 1000));
    document.cookie = "ref_aff="+ref_aff+"; path=/; expires=" + date.toUTCString();
}



function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


if(getCookie('ref_aff')){
	$('.ref_aff').val(getCookie('ref_aff'))
}



// $('select[name="state[]"] .selectize-input').on('click',(e)=>{e.preventdefault();console.log('click');$('select[name="state[]"] .selectize-input input').click();
// });




 putParameterFromUrl('source')
 // putParameterFromUrl('ref')
 putParameterFromUrl('coach_id')


$('.registration_form').submit(submitHandler);