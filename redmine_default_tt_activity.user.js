// ==UserScript==
// @name        Redmine Default Time Tracker Activity
// @description Sets default time tracker activity
// @namespace   https://github.com/VovanR
// @include     http://*/redmine/*
// @version     1.0.2
// @author      VovanR (https://github.com/VovanR)
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function () {

	$('body').on('click', '.tt_stop', function () {
		setTimeout(function () {
			$('#tt_activity').val(9).trigger('change');
		}, 25);
	});

})();
