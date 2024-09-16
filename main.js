// ==UserScript==
// @name         Azure Extensions
// @namespace    http://tampermonkey.net/
// @version      2024-09-16
// @description  try to take over the world!
// @author       Toni Hoffmann
// @match        https://portal.azure.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=azure.com
// @grant        none
// ==/UserScript==

function extendAutoExpandNavigationGroupings() {
  const observer = new MutationObserver(() => {
    // Get all groupings
    let groupings = Array.from(document.querySelectorAll('button.azc-listView-collapsible-groupheader'));

    // Filter groupings to only those that contain the relevant SVG child
    let relevantGroupings = groupings.filter((grouping) => {
      let svg = grouping.querySelector('svg');
      return svg && svg.firstChild && svg.firstChild.href.baseVal.includes('#FxSymbol0-034');
    });

    // Print the count of relevant groupings
    console.log(`Found ${relevantGroupings.length} relevant groupings`);

    // Click through each relevant grouping
    relevantGroupings.forEach((grouping) => {
      grouping.click();
    });
  });
  observer.observe(document.body, { childList: true });
}

(function () {
  'use strict';
  // Choose wich extensions you want to extend:
  extendAutoExpandNavigationGroupings();
})();
