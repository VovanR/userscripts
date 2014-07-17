// ==UserScript==
// @name        Redmine Default Issue
// @description Sets default settings in new issues
// @namespace   https://github.com/VovanR
// @include     http://*/redmine/*/issues/new
// @version     1.0.0
// @author      VovanR (https://github.com/VovanR)
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function () {

	// Waiting for wysiwyg loaded
	setTimeout(function () {
		var tracker = $('#issue_tracker_id');
		var trackerWaiting = 25;
		if (tracker.val() !== '2') {
			tracker.val(2).trigger('change');
			trackerWait = 2000;
		}

		// Waiting for tracker updated
		setTimeout(function () {
			var assigned = $('#issue_assigned_to_id');
			assigned.val(18);

			var category = $('#issue_category_id');
			category.val(6);

			var version = $('#issue_fixed_version_id');
			version.val(3);
		}, trackerWait);
	}, 2000);

})();

