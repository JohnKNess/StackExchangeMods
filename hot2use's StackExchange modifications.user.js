// ==UserScript==
// @name         hot2use's StackExchange modifications
// @namespace    https://www.github.com/JohnKNess/StackExchangeMods
// @version      0.1
// @description  Modify various .CSS settings
// @author       hot2use / JohnKNess
// == Matches Sites
// @match        *://*.stackoverflow.com/*
// @match        *://*.stackexchange.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.mathoverflow.net/*

// @grant        ...
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}


    addGlobalStyle('.question-status{margin-top:15px;margin-bottom:10px;padding:15px 8px 1px 60px;background-color:#e2e210;border:1px solid rgba(83,90,96,0.1);clear:both}');
})();
