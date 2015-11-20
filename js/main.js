var oPage = {
	pages: $('.page'),
	init: function(){
		var self = this

		self.bind()
	},
	bind: function(){

	},
	show: function(target){
		var self = this

		self.pages.hide()
		$('#page_'+target).show()
	}
}

$(function(){
	oPage.init()
	oPage.show('4_2')
})