// ==UserScript==
// @name 	Steam Web Tools
// @namespace 	http://v1t.su/projects/steam/webtools/
// @description Useful tools in Steam web sites
// @version     latest
// @date 	2013-01-15
// @creator vit@v1t.su
// @icon http://mr-vit.github.io/SteamWebTools/icon-64.png
// @include	http://store.steampowered.com/*
// @include	https://store.steampowered.com/*
// @include	http://steamcommunity.com/*
// @include	https://steamcommunity.com/*
// @homepage	http://steamcommunity.com/id/rasder33
// ==/UserScript==

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//github.com/cromwell221/swt/blob/master/ext_src_firefox/steamwebtools.base.js';
document.body.appendChild(script);
