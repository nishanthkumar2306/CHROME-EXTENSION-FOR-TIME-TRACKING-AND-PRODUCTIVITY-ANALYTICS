let activeTab = null;
let startTime = null;


chrome.tabs.onActivated.addListener(async (activeInfo) => {
const tab = await chrome.tabs.get(activeInfo.tabId);
trackTime(tab.url);
});


function trackTime(url) {
const now = Date.now();
if (activeTab && startTime) {
const timeSpent = now - startTime;
saveTime(activeTab, timeSpent);
}
activeTab = url;
startTime = now;
}


function saveTime(url, time) {
chrome.storage.local.get([url], (result) => {
const total = (result[url] || 0) + time;
chrome.storage.local.set({ [url]: total });
});
}