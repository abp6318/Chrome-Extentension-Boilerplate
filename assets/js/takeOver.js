/**
 * Aaron Putterman
 * April 5, 2021
 */

// We can perform actions on the page from this file!

// example: We get the <h1> element and change it's innerHTML to "Localhost is taking over..."
var h1Elements = document.querySelector("h1");
var h1Initial = h1Elements.innerHTML;
h1Elements.innerHTML = "Localhost taking over...";

// example: Sends a message out into the abyss that is Chrome
chrome.runtime.sendMessage(h1Initial);