// ==UserScript==
// @namespace    https://github.com/ahviplc/JustTampermonkey
// @name         quick-github1s
// @namespace    https://github.com/conwnet/github1s
// @namespace    https://hub.fastgit.org/conwnet/github1s
// @version      0.1
// @description  use the github1s open this github reop quickly.
// @author       LC ahlc@sina.cn
// @match        https://github.com/*/*
// @supportURL   https://github.com/ahviplc/JustTampermonkey/issues
// @icon         https://github1s.com/favicon.ico
// @grant        none
// ==/UserScript==

// https://avatars.githubusercontent.com/u/62810231?s=200&v=4

(function () {
    'use strict';
    var github1sBtn = document.createElement("li");
    github1sBtn.innerHTML = 'quick-github1s';
    github1sBtn.className = 'open-on-sourcegraph btn btn-sm tooltipped tooltipped-s';
    var li = document.getElementsByClassName('pagehead-actions flex-shrink-0 d-none d-md-inline').item(0).getElementsByTagName('li')[0]
    document.getElementsByClassName('pagehead-actions flex-shrink-0 d-none d-md-inline').item(0).insertBefore(github1sBtn, li)
    github1sBtn.onclick = function () {
        var href = top.location.href.replace('github.com', 'github1s.com')
        top.location.href = href;
    }
})();
