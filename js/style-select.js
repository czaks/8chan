/*
 * style-select.js
 * https://github.com/savetheinternet/Tinyboard/blob/master/js/style-select.js
 *
 * Changes the stylesheet chooser links to a <select>
 *
 * Released under the MIT license
 * Copyright (c) 2013 Michael Save <savetheinternet@tinyboard.org>
 *
 * Usage:
 *   $config['additional_javascript'][] = 'js/jquery.min.js';
 *   $config['additional_javascript'][] = 'js/style-select.js';
 *
 */

onready(function(){
	var stylesDiv = $('div.styles');
	var stylesSelect = $('<select></select>');
	
	var i = 1;
	stylesDiv.children().each(function() {
		var opt = $('<option></option>')
			.text(this.innerText.replace(/(^\[|\]$)/g, ''))
			.val(i);
		if ($(this).hasClass('selected'))
			opt.attr('selected', true);
		stylesSelect.append(opt);
		$(this).attr('id', 'style-select-' + i);
		i++;
	});
	
	stylesSelect.change(function() {
		$('#style-select-' + $(this).val()).click();
	});
	
	stylesDiv.hide();
	
	stylesDiv.after(
		$('<div style="float:right;margin-bottom:10px"></div>')
			.text(_('Style: '))
			.append(stylesSelect)
	);
});

