// content.js
console.log('Time Tracker Content Script Loaded');


// Detect user activity (mouse/keyboard)
let lastActiveTime = Date.now();


document.addEventListener('mousemove', () => {
lastActiveTime = Date.now();
});


document.addEventListener('keydown', () => {
lastActiveTime = Date.now();
});


// Send active status to background
setInterval(() => {
chrome.runtime.sendMessage({
type: 'USER_ACTIVE',
time: lastActiveTime
});
}, 5000);