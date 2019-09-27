var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    document.getElementById('hidden').addEventListener('click', () => sendMessage({ action: 'HIDDEN' }));
    document.getElementById('reset').addEventListener('click', () => sendMessage({ action: 'RESET' }))
}
// chrome.tabs.query(active, getSelectedTab);
chrome.tabs.getSelected(null, getSelectedTab);
