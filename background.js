chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.getSelected(null, function (tab) {
        var url = new URL(tab.url);
        chrome.tabs.create({"url": url.origin});
    })
});

chrome.tabs.onUpdated.addListener(function(tabId , info) {
    if (info.status == "complete") {
        chrome.tabs.executeScript(null, { file: "jquery-2.2.min.js" });
        chrome.tabs.executeScript(null, { file: "main.js" });
    }
});