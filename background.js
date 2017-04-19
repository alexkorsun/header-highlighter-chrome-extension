chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, { file: "jquery-2.2.min.js" });
    chrome.tabs.executeScript(null, { file: "main.js" });
});