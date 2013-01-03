chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "wordy_menu",
        title: chrome.i18n.getMessage("context_menu_title"),
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var text = info.selectionText;

    if (!text) {
        alert(chrome.i18n.getMessage("no_text_selected"));
    } else {
        alert(text);
    }
});