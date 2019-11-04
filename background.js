// HEX Chrome extension for easily opening related webpages
// Author : Yitendra Kumar
'use strict';

//For the extension to work on every page
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
          new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { hostContains: '' },
          })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});


//Creating context Menu option
var cm = {
    "id":"OpenInDDG",
    "title":"Open DuckDuckGo (Cmd+H)",
    "contexts":["selection"]
};

chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create(cm);
})


//Function for Open the PAGE
function openPage(text){
    window.open('https://duckduckgo.com/?q='+text, '_blank');
}

//The Right Click Context menu
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "OpenInDDG" && clickData.selectionText){
        let text = clickData.selectionText;
        openPage(text);
    }
});



//ShortCut to open the TAB
chrome.commands.onCommand.addListener(function(command) {
    //if(command=="openDDGTab"){  //The Shortcut Command we added in manifest.json
        chrome.tabs.executeScript( {
            code: "window.getSelection().toString();"
          }, function(selection) {
              openPage(selection[0]);
          });
    //}
    
  });