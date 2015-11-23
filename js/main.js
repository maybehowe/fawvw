(function() {
	var cur = null;

	$('#active_info').on('click', function () {
		oPage.show('1_2');
	});

	$('#active_info_close').on('click', function () {
		oPage.show('1_1');
	});

	$('#faw_thx_back').on('click', function(){
		oPage.show('1_1');
	})

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

	$('#order_drive_close').on('click', function () {
		oPage.show(cur + '_1');
	});

	$('.btn_order_drive').on('click', function () {
		cur = $(this).closest('.page').attr('id').split('_')[1];
		oPage.show('7_1');
	});

	$('.btn_thx').on('click',function () {
		oPage.show('4_1');
	});

	$('.btn_choose').on('click', function () {
		oPage.show('4_1');
	});

	$('.faw_btn_qin').on('click',function () {
		oPage.show('4_3');
		var mySwiper = new Swiper ('.qin_container', {
		    direction: 'vertical',
		    loop: true,
		    autoplay: 3000,
		    autoplayDisableOnInteraction: false,
		    nextButton: '.qin_next',
		    prevButton: '.qin_prev'
		});
	});

	$('.faw_btn_peng').on('click',function () {
		oPage.show('4_2');
		var mySwiper = new Swiper ('.peng_container', {
		    direction: 'vertical',
		    loop: true,
		    autoplay: 3000,
		    autoplayDisableOnInteraction: false,
		    nextButton: '.peng_next',
		    prevButton: '.peng_prev'
		});
	});

	$('.faw_btn_all').on('click',function () {
		oPage.show('4_4');
		var mySwiper = new Swiper ('.all_container', {
		    direction: 'vertical',
		    loop: true,
		    autoplay: 3000,
		    autoplayDisableOnInteraction: false,
		    nextButton: '.all_next',
		    prevButton: '.all_prev'
		});
	});

	$('.btn_send_qin').on('click',function () {
		oPage.show('3_1');
	});

	$('.btn_send_peng').on('click',function () {
		oPage.show('2_1');
	});

	$('.btn_send_all').on('click',function () {
		oPage.show('5_1');
	});

	$('.btn_share_friend').on('click', function () {
		oPage.show('7_3');
	});
})()
//获取canvas要设置的宽高
var width = parseInt($(window).width());
var height = width * 1034 / 512;
var coverImg = 'img/faw_cover.jpg',
	underImg = 'img/faw_bg.jpg';


//判断刮了百分多少了
function scratcherChanged() {
	var per = (this.fullAmount(32) * 100)|0;
	if (per>20) {		
		var scratch_wrap = $('#load_scratch');
		scratch_wrap.removeClass('show');
		oPage.show('1_1');
	}
}

var scratcher = new Scratcher('scratcher',underImg,coverImg,width,height);


scratcher.on('reset', function () {
	
});

scratcher.on('scratchesended', scratcherChanged);



var oPage = {
	pages: $('.page'),
	images: $('img'),
	init: function(){
		var self = this

		self.bind()
		self.load()

		  
	},
	bind: function(){

	},
	show: function(target){
		var self = this

		self.pages.hide()
		$('#page_'+target).show()
	},
	load: function(){
		var self = this,
			iImgCount = self.images.length,
			iImgTmp = 0

		self.images.each(function(){
			var oThis = $(this),
				sSrc = oThis.attr('src')

			oThis
				.attr('src', '')
				.on('load', function(){
					iImgTmp ++

					if(iImgTmp == iImgCount){
						$('#load_loading').remove()
						$('#load_scratch').addClass('show')
					}
				})
				.attr('src', sSrc)
		})
	}
}

$(function(){
	oPage.init()
});
function playPause() {
    var myVideo = document.querySelectorAll('audio')[0];
    var music_btn = document.getElementById('music_btn');
    if (myVideo.paused){
        myVideo.play();
        $('.music_btn').addClass('border_anim');
        musicStatus = true;
    }
    else{
        myVideo.pause();
        $('.music_btn').removeClass('border_anim');
        musicStatus = false;
    }
}