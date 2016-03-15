// 属性数组 数组对象为[{attrName: '' ,attrValue: ''}, ...]
var attrData = [];

/**
 * 		
 * 点击属性时候，在标签栏添加标签，并将该属性值添加到attrData数组里
 *  点击标签时候，去除该标签并从attrData数组内移除
 */
var init = function() {
	$('.attribute').click(function(event) {
		// 此值用于判断是否已经存在该属性标签
		var hasAttrLabel = false;
		var attrLabel;
		
		//检查数组中是否已经有该属性
		setTimeout(function() {
			var attrName = $(event.target).attr('attrName');
			var attrValue = $(event.target).attr('attrValue');
			for (var i=0, length=attrData.length; i<length; i++) {
				// 如果已经存在该属性名称的标签	
				if (attrData[i].attrName == attrName) {
					hasAttrLabel = true;
					// 如果该属性值不相同，则替换并且重新请求ajax，否则不做处理
					if (attrData[i].attrValue != attrValue) {
						// 清空该样式其他属性的选中框样式
						var attrClass = $('.attribute[attrName="'+attrName+'"]').attr('class').replace('attrChoosed', '');
						$('.attribute[attrName="'+attrName+'"]').attr('class',attrClass);
						// 为该属性添加选中框样式
						$(event.target).attr('class', $(event.target).attr('class')+' attrChoosed');
						// 替换文本值
						$('.attrLabel[attrName="'+attrName+'"]').text(attrName+':'+attrValue);
						// 修改attrData属性值
						attrData[i].attrValue = attrValue;
					}	
				}
			}
			// 如果标签不存在，则添加标签
			if (!hasAttrLabel) {
				attrLabel = $('<span class="label label-primary attrLabel" attrName="'+$(event.target).attr('attrName')+'" attrValue="'+$(event.target).attr('attrValue')+'">'+$(event.target).attr('attrName')+':'+$(event.target).attr('attrValue')+'</span>');
				$('.labelContent').append(attrLabel);
				attrData.push({
					'attrName': $(event.target).attr('attrName'),
					'attrValue': $(event.target).attr('attrValue')
				});
				// 为新标签注册点击监听
				attrLabel.click(function(event) {
					// 弹出attrData里响应数据
					for (var i=0, length=attrData.length; i<length; i++) {
						if (attrData[i].attrName == attrLabel.attr('attrName')) {
							attrData.splice(i, 1);
							attrLabel.remove();
						}
					}
					// 延时处理ajax请求
				})
			}
			console.log(attrData.length)
		}, 100);
		
		// 延时处理ajax请求
	});
}



/**
 * 根据attrData请求ajax数据，并加载到内容框
 */
var ajaxAttrList = function(ajaxURL) {
	$.post(ajaxURL, JSON.stringfy(attrData), function(data, status){
  		// 处理ajax数据
  	});
}

/**
 * 根据ajax列表数据生成属性列表
 */
var drawAttributeList = function(levalData) {
	var $attrNav = '';
	if (!levalData || levalData == '') {
		return false;
	}
	levalData = JSON.parse(levalData);
	if (typeof levalData == 'string') {
		return false;
	}
	// 提取levalData内部信息
	for (var i = 0; i < levalData.length; i++) {
		// 一级列表头
		$attrNav = $('<li role="presentation"  class="active attrNavigationList">\
						<a role="button" data-toggle="collapse" href="#'+levalData[i].attrName+'" aria-expanded="false" aria-controls="collapseExample">'+levalData[i].attrName+'</a>\
					</li>\
					<div class="collapse" id="'+levalData[i].attrName+'">\
						<div class="well" id="'+levalData[i].attrName+'Content"></div>\
					</div>');
		$('ul.attrNavigation').append($attrNav);
		// 递归绘制下级列表
		drwaChildAttributeList(levalData[i]);
	}
}

var drwaChildAttributeList = function(leval) {
	// 列表
	console.log(leval.attrName)
	if (leval.attrType == HAS_CHILD_LEVAL) {
		var $attrNav = '';
		for (var j = 0; j < leval.childLeval.length; j++) {
			$attrNav = '<div class="panel panel-default">\
								<div class="panel-heading" role="tab" id="headingOne">\
									<h4 class="panel-title">\
										<a role="button" data-toggle="collapse" data-parent="#accordion" href="#'+leval.childLeval[j].attrName+'" aria-expanded="false" aria-controls="collapseOne">'+leval.childLeval[j].attrName+'</a>\
									</h4>\
								</div>\
								<div id="'+leval.childLeval[j].attrName+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">\
									<div class="panel-body" id="'+leval.childLeval[j].attrName+'Content"></div>\
								</div>\
							</div>';
			$('#'+leval.attrName+'Content').append($attrNav);
			arguments.callee(leval.childLeval[j]);
		}
	}
	// options
	else if (leval.attrType == NO_CHILD_LEVAL) {
		// options属性选项
		var $attributes = '';
		for (var i = 0; i < leval.options.length; i++) {
			$attributes += '<div class="col-md-3">\
								<div class="attribute" attrName="'+leval.attrName+'" attrValue="'+leval.options[i].attrValue+'">\
									<img class="attributeImg" src="'+leval.options[i].imgURL+'" />\
								</div>\
							</div>';
		}
		$('#'+leval.attrName+'Content').append($attributes);
	}
}

init();
drawAttributeList(levalData);