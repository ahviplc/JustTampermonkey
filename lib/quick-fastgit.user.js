// ==UserScript==
// @namespace    https://github.com/ahviplc/JustTampermonkey
// @name         quick-fastgit
// @namespace    https://fastgit.org
// @namespace    https://hub.fastgit.org
// @version      0.2
// @description  use the fastgit open this github reop quickly.
// @author       LC ahlc@sina.cn
// @match        https://github.com/*/*
// @supportURL   https://github.com/ahviplc/JustTampermonkey/issues
// @icon         https://avatars.githubusercontent.com/u/62810231?s=200&v=4
// @grant        GM_addStyle
// ==/UserScript==

// https://avatars.githubusercontent.com/u/62810231?s=200&v=4
// 出处 | https://github.com/JackieZheng/Github1s/blob/main/Github1s.user.js

GM_addStyle("anchored-position{display: none !important}}");
GM_addStyle("anchored-position[class$=popover-open] {display: block !important}}");

(function() {
    'use strict';
    var github1sBtn = document.createElement("li");
    github1sBtn.innerHTML ='quick-fastgit';
    github1sBtn.className='open-on-sourcegraph btn btn-sm tooltipped tooltipped-s';
    github1sBtn.style.color='var(--color-btn-primary-text)';
    github1sBtn.style.backgroundColor='var(--color-btn-primary-bg)';
    var li=document.getElementsByClassName('pagehead-actions flex-shrink-0 d-none d-md-inline').item(0)?.getElementsByTagName('li')[0]
    document.getElementsByClassName('pagehead-actions flex-shrink-0 d-none d-md-inline').item(0)?.insertBefore(github1sBtn,li)
    github1sBtn.onclick=function()
    {
        var href=top.location.href.replace('github.com','hub.fastgit.org')
        top.location.href=href;
    }
})();
