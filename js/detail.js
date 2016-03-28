// 加载鸟类详情页信息
var showDetail = function(birdDetailData) {
	if (!birdDetailData || birdDetailData == '') {
		return false;
	}
	birdDetailData = JSON.parse(birdDetailData);
	if (typeof birdDetailData == 'string') {
		return false;
	}
	// 添加照片
	for (var i = 0; i < birdDetailData.imgURLs.length; i++) {
		$('#masterslider').append('<div class="ms-slide">\
		 <img src="'+config.loadingImgURL+'" data-src="'+birdDetailData.imgURLs[i]+'" alt="lorem ipsum dolor sit"/>\
		  <img class="ms-thumb" src="'+birdDetailData.imgURLs[i]+'" alt="thumb" />\
		   </div>');
	}
	// 显示目科属等信息chineseName
	$('#chineseName').html(birdDetailData.chineseName);
	$('#order').html(birdDetailData.order);
	$('#family').html(birdDetailData.family);
	$('#genus').html(birdDetailData.genus);
	$('#latinName').html(birdDetailData.latinName);
	$('#alias').html(birdDetailData.alias);
	$('#description').html(birdDetailData.description);
}