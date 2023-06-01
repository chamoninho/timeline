var lastAccessDiv = document.getElementById("lastAccess");

function register(event) {
  event.preventDefault();
  var nameInput = document.getElementById("name");
  var name = nameInput.value;
  nameInput.value = "";

  localStorage.setItem("timelineUser", name);
  localStorage.setItem("timelineStatus", "Entrou no Timeline");
  displayStatus();

  return false;
}

function exit() {
  localStorage.removeItem("timelineUser");
  localStorage.setItem("timelineStatus", "Saiu do Timeline");
  displayStatus();
}

function checkStatus() {
  var user = localStorage.getItem("timelineUser");

  if (user) {
    alert("Sim, " + user + " está usando o Timeline.");
  } else {
    alert("Ninguém está usando o Timeline.");
  }
}

function displayStatus() {
  var statusDiv = document.getElementById("status");
  var lastAccess = localStorage.getItem("timelineStatus");
  var lastAccessTime = new Date().toLocaleTimeString();

  if (lastAccess) {
    statusDiv.textContent = lastAccess;
    lastAccessDiv.textContent = "Último acesso: " + lastAccessTime;
  } else {
    statusDiv.textContent = "Ninguém está usando o Timeline.";
    lastAccessDiv.textContent = "";
  }
}

window.onload = function() {
  displayStatus();
};
