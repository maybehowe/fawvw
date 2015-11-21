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

	var scratcher = new Scratcher('scratcher',underImg,coverImg,width,height);


	scratcher.on('reset', function () {
		
	});

	scratcher.on('scratchesended', scratcherChanged);
})()
