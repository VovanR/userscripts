// ==UserScript==
// @name        Redmine Highlight Issues
// @description Highlight redmine issue status cell
// @namespace   https://github.com/VovanR
// @include     http://*/redmine/*
// @version     1.1.0
// @author      Vladimir Rodkin (https://github.com/VovanR)
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function ($) {

  // Color theme (https://kuler.adobe.com/Copy-of-Flat-Design-Colors-v2-color-theme-3936285/)
  var colors = {
      blue:   '#334d5c',
      green:  '#45b29d',
      yellow: '#efc94c',
      orange: '#e27a3f',
      red:    '#df4949',
  };

  $('.list.issues').find('tr.issue').each(function () {
    var $issue  = $(this);
    var $status = $($issue.find('.status'));
    var status;
    var color;

    if ($status.length === 0) {
      $status = $($issue.find('.subject').next());

      if ($status.length === 0) {
        return;
      }
    }

    status = $status.text();

    switch (status) {
      case 'New':
        color = colors.green;
        break;

      case 'In Progress':
        color = colors.blue;
        break;

      case 'Fixed':
      case 'Resolved':
        color = colors.orange;
        break;

      case 'Review':
        color = colors.yellow;
        break;

      case 'Rejected':
      case 'Closed':
        color = colors.red;
        break;

      default:
        color = colors.green;
    }

    $status.css({
      'background-color': color,
      'color': '#fff',
    });
  });

})(window.jQuery);
