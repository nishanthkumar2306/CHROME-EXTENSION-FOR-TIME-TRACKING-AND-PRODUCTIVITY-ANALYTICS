chrome.storage.local.get(null, (data) => {
const container = document.getElementById('data');
for (let site in data) {
const mins = (data[site] / 60000).toFixed(2);
container.innerHTML += `<p>${site}: ${mins} mins</p>`;
}
});