// ==UserScript==
// @name        Service Now New Tab Fixer
// @namespace   Violentmonkey Scripts
// @match       https://*.service-now.com/sc*.do
// @match       https://*.service-now.com/kb*.do
// @grant       none
// @version     1.1
// @author      Andrew Friedman
// @description Fixes service now not showing the main bar if you open a tab in a new url
// @updateURL   https://github.com/arfrie22/service-now-tampermonkey/raw/main/service_now_new_tab_fixer.user.js
// @downloadURL https://github.com/arfrie22/service-now-tampermonkey/raw/main/service_now_new_tab_fixer.user.js
// @noframes
// ==/UserScript==

// Make sure this runs in main window
if (window.top === window.self) {
  let urlParts = window.location.href.split("/").slice();
  let encodedURL = encodeURIComponent(urlParts[urlParts.length - 1]);
  urlParts[urlParts.length - 1] = `now/nav/ui/classic/params/target/${encodedURL}`;
  window.location.href = urlParts.join("/");
}