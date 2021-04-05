/**
 * Aaron Putterman
 * April 5, 2021
 */

chrome.runtime.onInstalled.addListener(function() {

    // note: this is where we use declarativeContent (permission)
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules(
            [
                {
                    // conditional (if true, then perform actions)
                    conditions: [
                        new chrome.declarativeContent.PageStateMatcher(
                            {
                                // determine which domains, schemes, or other urls your extenstion can be opened on
                                // pageUrl: {hostEquals: 'google.com'},
                                pageUrl: {schemes: ['http', 'https']},
                            }
                        )
                    ],
                    // action(s) performed
                    actions: [
                        new chrome.declarativeContent.ShowPageAction()
                    ]
                }
            ]
        );
    });
});