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