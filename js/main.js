// 属性数组 数组对象为[{attrName: '' ,attrValue: ''}, ...]
var attrData = [];


/**	
 * 点击属性时候，在标签栏添加标签，并将该属性值添加到attrData数组里
 *  点击标签时候，去除该标签并从attrData数组内移除
 */
var init = function(levelData) {
	drawAttributeList(levelData);
	$('.attribute').click(function(event) {
		// 此值用于判断是否已经存在该属性标签
		var attrLabel;
		
		//检查数组中是否已经有该属性
		setTimeout(function() {
			var hasAttrLabel = false;
			var attrName = $(event.target).parent().attr('attrName');
			var attrValue = $(event.target).parent().attr('attrValue');
			var isMultiSelect = $(event.target).parent().attr('multiSelect');

			// 这里要处理是否是多选的标签数据
			
			// 这里处理多选属性


			// 这里处理单选属性（替换attrData内的属性值）
			if (!isMultiSelect) {
				for (var i=0, length=attrData.length; i<length; i++) {
					// 如果已经存在该属性名称的标签	
					if (attrData[i].attrName == attrName) {
						// 如果标签为单选
						hasAttrLabel = true;
						// 如果该属性值不相同，则替换并且重新请求ajax，否则不做处理
						if (attrData[i].attrValue != attrValue) {
							// 清空该样式其他属性的选中框样式
							// var attrClass = $('.attribute[attrName="'+attrName+'"]').attr('class').replace('attrChoosed', '');
							// $('.attribute[attrName="'+attrName+'"]').attr('class',attrClass);
							// 替换文本值
							$('.attrLabel[attrName="'+attrName+'"]').text(attrName+':'+attrValue);
							// 修改attrData属性值
							attrData[i].attrValue = attrValue;
							// 为该属性添加选中框样式
							// $(event.target).attr('class', $(event.target).attr('class')+' attrChoosed');
						}	
					}
				}
			}
			

			// 如果标签不存在，则添加标签
			if (!hasAttrLabel) {
				addAttrLabel(attrName, attrValue);
			}
		}, 100);
		// 延时处理ajax请求
		ajaxAttrList(config.ajaxURL);
	});
}



/**
 * 添加属性标签 并且添加点击监听 并且维护attrData数组(插入新属性)
 */
var addAttrLabel = function(attrName, attrValue) {
	attrLabel = $('<span class="label label-primary attrLabel" attrName="'+attrName+'" attrValue="'+attrValue+'">'+attrName+':'+attrValue+'</span>');
	$('.labelContent').append(attrLabel);
	attrData.push({
		'attrName': attrName,
		'attrValue': attrValue
	});
	// 为新标签注册点击监听 点击删除对应标签 已经发送ajax	
	attrLabel.click(function(event) {
		removeAttrLabel(attrName, attrValue);
	})
	ajaxAttrList(config.ajaxURL);	
}



/**
 * 移除属性标签 并且维护attrData数组
 */
var removeAttrLabel = function(attrName, attrValue) {
	// 移除所有的attrName标签
	if (arguments.length == 1) {

	}
	else {
		// 移除相应键值对标签
		var $label = $('.attrLabel[attrName="'+attrName+'"][attrValue="'+attrValue+'"]');
		$label.hide(500);
		setTimeout(function() {
			$label.remove();
		}, 500)
		// 移除attrData数据
		for (var i=0, length=attrData.length; i<length; i++) {
			if (attrData[i].attrName == attrName && attrData[i].attrValue == attrValue) {
				attrData.splice(i, 1);
			}
		}
	}
	ajaxAttrList(config.ajaxURL);
}



/**
 * 修改属性标签 并且维护attrData数组
 */
var changeAttrLabel = function(attrName, attrValue) {
	removeAttrLabel(attrName, attrValue);
	addAttrLabel(attrName, attrValue);
}


/**
 * 根据ajax列表数据生成属性列表，需在init前生成列表
 */
var drawAttributeList = function(levelData) {
	var $attrNav = '';
	if (!levelData || levelData == '') {
		return false;
	}
	levelData = JSON.parse(levelData);
	if (typeof levelData == 'string') {
		return false;
	}
	// 提取levelData内部信息
	for (var i = 0; i < levelData.length; i++) {
		// 一级列表头
		$attrNav = $('<li role="presentation"  class="active attrNavigationList">\
						<a role="button" data-toggle="collapse" href="#'+levelData[i].attrName+'" aria-expanded="false" aria-controls="collapseExample">'+levelData[i].attrName+'</a>\
					</li>\
					<div class="collapse" id="'+levelData[i].attrName+'">\
						<div class="well" id="'+levelData[i].attrName+'Content"></div>\
					</div>');
		$('ul.attrNavigation').append($attrNav);
		// 递归绘制下级列表
		drwaChildAttributeList(levelData[i]);
	}
}



var drwaChildAttributeList = function(level) {
	// 列表
	if (level.attrType == HAS_CHILD_LEVEL) {
		var $attrNav = '';
		for (var j = 0; j < level.childlevel.length; j++) {
			$attrNav = '<div class="panel panel-default">\
								<div class="panel-heading" role="tab" id="headingOne">\
									<h4 class="panel-title">\
										<a role="button" data-toggle="collapse" data-parent="#accordion" href="#'+level.childlevel[j].attrName+'" aria-expanded="false" aria-controls="collapseOne">'+level.childlevel[j].attrName+'</a>\
									</h4>\
								</div>\
								<div id="'+level.childlevel[j].attrName+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">\
									<div class="panel-body" id="'+level.childlevel[j].attrName+'Content"></div>\
								</div>\
							</div>';
			$('#'+level.attrName+'Content').append($attrNav);
			arguments.callee(level.childlevel[j]);
		}
	}
	// options
	else if (level.attrType == NO_CHILD_LEVEL) {
		// options属性选项--一次性加载所有图片，后期可考虑ajax加载
		var $attributes = '';
		for (var i = 0; i < level.options.length; i++) {
			$attributes += '<span class="attribute" isMultiSelect="'+level.multiSelect+'" attrName="'+level.attrName+'" attrValue="'+level.options[i].attrValue+'">\
									<img class="attributeImg" src="'+level.options[i].imgURL+'" />\
								</span>';
		}
		$('#'+level.attrName+'Content').append($attributes);
	}
}



var drawBirdsList = function(birdsData) {
	// 清空原有内容
	$('#birdsContent').empty();
	if (!birdsData || birdsData == '') {
		return false;
	}
	var birds = JSON.parse(birdsData);
	if (typeof birds == 'string') {
		return false;
	}
	for (var i = 0; i < birds.length; i++) {
		var $bird = '';
		$bird = '<div class="col-md-4 birdBox" id="'+birds[i].chineseName+'">\
	                    <div class="thumbnail">\
	                        <img src="'+birds[i].imgURL+'" alt="bird">\
	                        <div class="caption">\
	                            <b>'+birds[i].chineseName+'</b>\
	                            <span>['+birds[i].latinName+']</span>\
	                            <p>'+birds[i].order+'目,'+birds[i].family+'科,'+birds[i].genus+'属</p>\
	                            <p>\
	                            	'+birds[i].description+'<a href="'+config.birdMoreHref+'?birdName='+birds[i].id+'"> >>更多</a>\
	                            </p>\
	                        </div>\
	                    </div>\
	                </div>';
        $('#birdsContent').append($bird);
        $('#'+birds[i].chineseName).hide();
        $bird = $('#'+birds[i].chineseName);
        $bird.fadeIn(500);
	}
}



/**
 * 根据attrData请求ajax数据，并加载到内容框
 */
var ajaxAttrList = function(ajaxURL) {
	$.post(ajaxURL, JSON.stringfy(attrData), function(birdsData){
  		// 处理ajax数据
  		drawBirdsList(birdsData);
  	});
}
// drawBirdsList(birdsData);
