// ==UserScript==
// @name        Redmine Highlight Issues
// @description Highlight redmine issue status cell
// @namespace   https://github.com/VovanR
// @include     http://*/redmine/*
// @version     1.0.0
// @author      VovanR (https://github.com/VovanR)
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function () {


// Color theme (https://kuler.adobe.com/Copy-of-Flat-Design-Colors-v2-color-theme-3936285/)
var colors = {
    blue:   '#334D5C',
    green:  '#45B29D',
    yellow: '#EFC94C',
    orange: '#E27A3F',
    red:    '#DF4949',
};

$('.list.issues').find('tr.issue').each(function () {
  var bIssue  = $(this),
      bStatus = $(bIssue.find('.status')),
      status,
      color;

  if (bStatus.length === 0) {
    bStatus = $(bIssue.find('.subject').next());

    if (bStatus.length === 0) {
      return;
    }
  }

  status = bStatus.text()

  switch (status) {
    case 'New':
      color = colors.green;
      break;
    case 'In Progress':
      color = colors.blue;
      break;
    case 'Resolved':
      color = colors.orange;
      break;
    case 'Closed':
      color = colors.red;
      break;
    case 'Rejected':
      color = colors.red;
      break;
    default:
      color = colors.green;
  }

  bStatus.css({ 'background-color': color, 'color': '#fff' });
});


})();

