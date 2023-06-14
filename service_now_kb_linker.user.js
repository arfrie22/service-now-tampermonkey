// ==UserScript==
// @name        Service Now KB Linker
// @namespace   Violentmonkey Scripts
// @match       https://*.service-now.com/kb_view.do
// @grant       none
// @version     1.0
// @author      Andrew Friedman
// @description Adds a link to the KB page via the KB number
// @updateURL   https://github.com/arfrie22/service-now-tampermonkey/raw/main/service_now_kb_linker.user.js
// @downloadURL https://github.com/arfrie22/service-now-tampermonkey/raw/main/service_now_kb_linker.user.js
// @noframes
// ==/UserScript==

const params = (new URL(document.location)).searchParams;
const kbText = document.getElementById("articleNumberReadonly");
const kbNumber = kbText.innerText;

kbText.innerText = "";

const link = kbText.appendChild(document.createElement("a"));
link.href = `${(new URL(document.location)).origin}/kb_view.do?sys_kb_id=${params.get("sys_kb_id")}`;

link.innerText = kbNumber;
