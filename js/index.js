
	window.onscroll = function () {
		var y_offset = window.pageYOffset;
		resize_logo(calc_real_height(), y_offset);

		toggle_back_to_top(y_offset);
	}

	window.onload = function () {
		var y_offset = window.pageYOffset;
		var real_height = calc_real_height();

		resize_logo(real_height, y_offset);
		set_padding_height(real_height);

		toggle_back_to_top(y_offset);
	}

	window.onresize = function () {
		var y_offset = window.pageYOffset;
		var real_height = calc_real_height();

		resize_logo(real_height, y_offset);
		set_padding_height(real_height);
	}

	function calc_real_height () {
		var logo = document.getElementById('logo');
		var contenitore = document.getElementById("logo-container");
		var real_height = ((contenitore.clientWidth / logo.naturalWidth) * logo.naturalHeight) - 20;
		return (real_height < 600) ? real_height : 600;
	}

	function resize_logo(real_height, y_offset) {
		var dinamic_height = real_height - y_offset;
		if (dinamic_height < 75) dinamic_height = 75;

		document.getElementById("logo").style.maxHeight = dinamic_height +"px";
	}

	function set_padding_height(real_height) {
		/*document.getElementById("navbar-top").style.marginTop = real_height + "px";*/
		document.getElementById("logo-background").style.height = real_height + "px";
	}
