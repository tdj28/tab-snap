const myCsv = '';
let contents;
let openthistab = false;
const openthese = [];

chrome.runtime.onInstalled.addListener(() => {
  // Initialization code here
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle messages from content scripts or popup
});

// Export any functions that need to be accessed by other parts of the extension
self.dothis = {
  try: function(evt) {
    return evt.target.files[0];
  }
};

