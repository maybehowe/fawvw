(function() {
	//获取canvas要设置的宽高
	var width = parseInt($(window).width()),
		height = parseInt($(window).height());
	var coverImg = 'img/faw_cover.png',
		underImg = 'img/faw_bg.png';


	//判断刮了百分多少了
	function scratcherChanged() {
		var per = (this.fullAmount(32) * 100)|0;
		if (per>60) {		
			alert('ok');
		}
	}

	// var scratcher = new Scratcher('scratcher',underImg,coverImg,width,height);


	// scratcher.on('reset', function () {
		
	// });

	// scratcher.on('scratchesended', scratcherChanged);
})()

var oPage = {
	pages: $('.page'),
	images: $('img'),
	init: function(){
		var self = this

		self.bind()
		self.load()

		$('#load_scratch').click(function(event) {
			var oThis = $(this)	
			oThis.removeClass('show')
			self.show('4_1')
		})
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
					$('#load_loading').removeClass('show')
					$('#load_scratch').addClass('show')
				}
			})
		})
	}
}

$(function(){
	oPage.init()
	// oPage.show('4_2')
})