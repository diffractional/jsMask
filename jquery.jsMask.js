(function( $ ) {

	var selector;

	$.fn.jsMask = function( mask, img ){
		selector = $(this);
		var newSVG;
		var selectorHeight = selector.height();
		var selectorWidth = selector.width();

		if( img === true ){
			newSVG = drawMask(mask,selectorWidth,selectorHeight);
		}else{
			newSVG = replaceMask(mask,selectorWidth,selectorHeight);
		}

		selector.html( newSVG );
	}

	function drawMask(_thismask, _width, _height){
		var maskid = selector.data('id');

			return '<svg width="' + _width + '" height="' + _height + '" baseProfile="full" version="1.2">' +
				'<defs>' +
					'<mask id="' + maskid + '" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" transform="scale(1)">' +
						'<image width="' + _width + 'px" height="' + _height + 'px" xlink:href="' + _thismask + '"/>' +
					'</mask>' +
				'</defs>' +
				
					'<image mask="url(#' + maskid + ')" width="100%" height="100%" y="0" x="0" xlink:href="' + getMainElement() + '" />'+
				
			'</svg>';
	}

	function replaceMask(_thismask, _width, _height){
		var maskid = selector.data('id');
		return '<svg width="' + _width + '" height="' + _height + '" baseProfile="full" version="1.2">' +
				'<defs>' +
					'<mask id="' + maskid + '" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" transform="scale(1)">' +
						'<image width="' + _width + 'px" height="' + _height + 'px" xlink:href="' + _thismask + '"/>' +
					'</mask>' +
				'</defs>' +
				'<foreignObject width="100%" height="100%" style="mask: url(#' + maskid + ');">'+
				'<div style="width: ' + _width + '; height: ' + _height + 'px; filter: progid:DXImageTransform.Microsoft.Chroma(color=\'#00FFFF\'); zoom: 1;">'+
					getMainCode() +
				'</div>'+
				'</foreignObject>'+
			'</svg>';
	}

	function getMainElement(){
		return selector.find('img').attr('src');
	}

	function getMainCode(){
		return selector.html();
	}

})( jQuery );