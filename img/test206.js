let messageQueue = [];

function enqueueMessage() {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value;
  messageQueue.push(message);
  messageInput.value = "";
  updateQueueCount();
}

function updateQueueCount() {
  const queueCount = document.getElementById("queueCount");
  queueCount.innerText = messageQueue.length;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    enqueueMessage();
  }
}

setInterval(function () {
  if (messageQueue.length > 0) {
    const message = messageQueue.shift();
    const messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.innerText = message;
  }
  updateQueueCount();
}, 10000);
