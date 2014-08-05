// ==UserScript==
// @name        Redmine Issue status to `In Progress`, when starting time tracker activity
// @description If issue status is `New`, set it to `In Progress`
// @namespace   https://github.com/VovanR
// @include     http://*/redmine/*
// @version     1.0.0
// @author      VovanR (https://github.com/VovanR)
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function (global) {

	$('body').on('click', '.tt_start', function () {
		if ($('#issue_status_id').val() === '1') {
			setTimeout(function () {
				global.make_status(2);
			}, 500);
		}
	});

})(window);
