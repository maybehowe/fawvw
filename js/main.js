(function() {
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
})()
//获取canvas要设置的宽高
var width = parseInt($(window).width());
var height = width * 1034 / 512;
var coverImg = 'img/faw_cover.png',
	underImg = 'img/faw_1_1.jpg';


//判断刮了百分多少了
function scratcherChanged() {
	var per = (this.fullAmount(32) * 100)|0;
	if (per>60) {		
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

		// $('#load_scratch').click(function(event) {
		// 	var oThis = $(this)	
		// 	oThis.removeClass('show')
		// 	self.show('4_1')
		// })
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
			var oThis = $(this)
			oThis.on('load', function(){
				iImgTmp ++

				if(iImgTmp == iImgCount){
					alert();
					$('#load_loading').removeClass('show')
					$('#load_scratch').addClass('show')
				}
			})
		})
	}
}

$(function(){
	oPage.init()
})