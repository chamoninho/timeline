var lastAccess = localStorage.getItem("lastAccess");

function register(action) {
  var nameInput = document.getElementById("nameInput");
  var statusDiv = document.getElementById("status");
  var lastAccessDiv = document.getElementById("lastAccess");

  if (action === "Entrou") {
    if (localStorage.getItem("timelineStatus")) {
      statusDiv.textContent = "Já há alguém usando o Timeline.";
    } else {
      localStorage.setItem("timelineStatus", nameInput.value);
      localStorage.setItem("lastAccess", getCurrentTime());
      statusDiv.textContent = "Alguém está usando o Timeline.";
      lastAccessDiv.textContent = "Último acesso: " + lastAccess;
    }
  } else if (action === "Saiu") {
    if (localStorage.getItem("timelineStatus")) {
      localStorage.removeItem("timelineStatus");
      statusDiv.textContent = "Ninguém está usando o Timeline.";
      lastAccessDiv.textContent = "Último acesso: " + lastAccess;
    } else {
      statusDiv.textContent = "Não há ninguém usando o Timeline.";
      lastAccessDiv.textContent = "";
    }
  }

  nameInput.value = "";
}

function checkStatus() {
  var statusDiv = document.getElementById("status");
  var lastAccessDiv = document.getElementById("lastAccess");

  if (localStorage.getItem("timelineStatus")) {
    statusDiv.textContent = "Alguém está usando o Timeline.";
    lastAccessDiv.textContent = "Último acesso: " + lastAccess;
  } else {
    statusDiv.textContent = "Ninguém está usando o Timeline.";
    lastAccessDiv.textContent = "";
  }
}

function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");
  return timeString;
}

window.onload = function() {
  checkStatus();
};
