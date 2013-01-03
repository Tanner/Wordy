chrome.runtime.onInstalled.addListener(function() {
    console.log("nav. complete");
    chrome.contextMenus.create({
        id: "wordy_menu",
        title: chrome.i18n.getMessage("context_menu_title"),
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    console.log("click");
});