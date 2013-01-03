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
        var num_chars = text.length;
        var num_non_space_chars = text.replace(/ /g, "").length;
        var num_words = text.split(" ").length;

        var message = chrome.i18n.getMessage("text_statistics", [num_chars, num_non_space_chars, num_words]);

        console.log(message);
        alert(message);
    }
});