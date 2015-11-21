$(function(){
	// oPage.init();
	oPage.show('7_2');

	$('.faw_btn_swipe').on('click',function () {
		if($(this).hasClass('unable')){
			return
		}else{
			var type = $(this).attr('type'),
				cur = $('.faw_thx_text').attr('cur');
			$('.faw_btn_swipe').removeClass('unable');
			if(cur == '2'){
				$(this).addClass('unable');
			}
			if((cur == '3' && type == 'next') || (cur == '1' && type == 'pro')){
				return
			}else{
				if(type == 'pro'){
					cur = Number(cur) - 1;
				}else{
					cur = Number(cur) + 1;
				}
			}
			var page = $(this).closest('.page').attr('id').split('_');
			var img = ['faw', page[1], page[2], cur].join('_');
			$('.faw_thx_text').attr('cur', cur);
			$(this).closest('.core').find('.faw_thx_img').attr('src','img/' + img + '.jpg');

		}
	});

	$('#active_info').on('click', function () {
		oPage.show('1_2');
	});

	$('#active_info_close').on('click', function () {
		oPage.show('1_1');
	});

	$('#favor_info_golf').on('click', function () {
		oPage.show('2_2');
	});

	$('#favor_info_golf_close').on('click', function () {
		oPage.show('2_1');
	});

	$('#favor_info_suteng').on('click', function () {
		oPage.show('3_2');
	});

	$('#favor_info_suteng_close').on('click', function () {
		oPage.show('3_1');
	});

	$('.btn_confirm').on('click', function () {
		oPage.show('7_2');
	});

	$('#share_close').on('click', function () {
		oPage.show('7_1')
	});

	$('.btn_share').on('click', function () {
		oPage.show('7_3');
	});





})