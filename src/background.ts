chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      type: "normal",
      id: "eztm",
      title: "Insert LGTM gif",
      contexts:["editable"]
    });
  });

// add listener for click on self defined menu item
chrome.contextMenus.onClicked.addListener(function(clickData,tab){
    if(clickData.menuItemId ==="eztm"&& tab!=null &&tab.id!=null){
      chrome.tabs.sendMessage(tab.id,  { type: "eztm" });
    }
  });

// ショートカットキーが押された時のリスナー
chrome.commands.onCommand.addListener((command, tab) => {
  if (tab.id !== undefined) {
    chrome.tabs.sendMessage(tab.id,  { type: "eztm" });
  }
});