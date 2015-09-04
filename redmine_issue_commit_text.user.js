// ==UserScript==
// @name        Redmine Issue Commit Text
// @description For fastest copy-paste to git commit
// @namespace   https://github.com/VovanR
// @include     http://*/redmine/issues/*
// @version     1.0.2
// @author      Vladimir Rodkin (https://github.com/VovanR)
// @run-at      document-end
// @grant       none
// ==/UserScript==

(function ($) {

  var $content = $('#content');
  var $issueTitle = $content.find('h2').first();
  var $issueName = $content.find('.subject').find('h3');

  var issueNumber = $issueTitle.text();
  issueNumber = issueNumber.substr(issueNumber.indexOf('#'));

  var commitText = 'Issue ' + issueNumber + ': ' + $issueName.text();

  var $commitInput = $('<input type=\'text\' readonly style=\'width: 100%;\' >');
  $commitInput.val(commitText);
  $content.find('.issue.details').prepend($commitInput);

})(window.jQuery);
