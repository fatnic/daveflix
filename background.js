let daveflixMenu = {
  id: "daveflix_start",
  title: "Watch on DaveFlix",
  contexts: ["link"],
};

chrome.contextMenus.create(daveflixMenu);
chrome.contextMenus.onClicked.addListener(async function (e) {
  if (e.menuItemId == "daveflix_start") {
    try {
      await fetch("http://localhost:3388/watch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ magnet: e.linkUrl }),
      });
    } catch (err) {
      console.log(err);
    }
  }
});
