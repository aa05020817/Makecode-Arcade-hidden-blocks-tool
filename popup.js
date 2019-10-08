var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    document.getElementById('hidden').addEventListener('click', () => sendMessage({ action: 'HIDDEN' }));
    document.getElementById('reset').addEventListener('click', () => sendMessage({ action: 'RESET' }));
    document.getElementById('hidden_cha').addEventListener('click', () => sendMessage({ action: 'HIDDEN_CHA'}));
    document.getElementById('reset_cha').addEventListener('click', () => sendMessage({ action: 'RESET_CHA'}))
}
// chrome.tabs.query(active, getSelectedTab);
chrome.tabs.getSelected(null, getSelectedTab);
