chrome.browserAction.onClicked.addListener(() => {
  chrome.windows.getLastFocused({}, (window) => {
    chrome.tabs.create({ url: './index.html', windowId: window.id });
  });
});
