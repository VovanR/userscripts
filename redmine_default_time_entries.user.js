// ==UserScript==
// @name        Redmine Default Time Entries
// @description Sets default settings in new time entries
// @namespace   https://github.com/VovanR
// @include     http://*/redmine/*/time_entries/new*
// @include     http://*/redmine/issues/*
// @version     1.0.2
// @author      Vladimir Rodkin (https://github.com/VovanR)
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function ($) {

  setTimeout(function () {
    $('#time_entry_activity_id').val('9');
  }, 500);

})(window.jQuery);
