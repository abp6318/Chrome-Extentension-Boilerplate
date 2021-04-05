/**
 * Aaron Putterman
 * April 5, 2021
 */

// example: When the button is clicked, it will execute the takeOver.js script.
var takeOver = document.getElementById("take-over");
takeOver.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            // which tab the file is being executed on
            tabs[0].id,
            // file to be executed
            {file: './assets/js/takeOver.js'}
        );
    });
}


// example (see initial in takeOver.js): Waits in the abyss for a message
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    // gets the paragraph tag I stuck in the popup.html
    var p = document.querySelector("p");

    // empties it of children
    while (p.firstChild) {
        p.removeChild(p.firstChild);
    }

    // puts the h1 from the current tab in the p
    p.innerHTML = response
});