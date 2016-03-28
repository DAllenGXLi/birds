// 加载鸟类详情页信息
var showDetail = function(birdDetailData) {
	// 添加照片
	for (var i = birdDetailData.imgURLs; i <= birdDetailData.imgURLs.length; i++) {
		$('#masterslider').append('<div class="ms-slide">\
		 <img src="'+config.loadingImgURL+'" data-src="'+birdDetailData.imgURLs[i]+'" alt="lorem ipsum dolor sit"/>\
		  <img class="ms-thumb" src="'+birdDetailData.imgURLs[i]+'" alt="thumb" />\
		   </div>');
	}
}