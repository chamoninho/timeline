function submitForm(event) {
  event.preventDefault();
  var nameInput = document.getElementById("name");
  var name = nameInput.value;

  registerEntry(name);
  nameInput.value = "";
}

function registerEntry(name) {
  fetch("/entry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name })
  })
  .then(response => {
    if (response.ok) {
      displayStatus("Alguem esta usando o Timeline.");
    } else {
      displayStatus("Erro ao registrar entrada.");
    }
  })
  .catch(error => {
    displayStatus("Erro ao registrar entrada.");
  });
}

function exitTimeline() {
  fetch("/exit", {
    method: "POST"
  })
  .then(response => {
    if (response.ok) {
      displayStatus("Ninguem esta usando o Timeline.");
    } else {
      displayStatus("Erro ao registrar saida.");
    }
  })
  .catch(error => {
    displayStatus("Erro ao registrar saida.");
  });
}

function checkTimelineStatus() {
  fetch("/status")
    .then(response => response.json())
    .then(data => {
      if (data.status) {
        displayStatus("Alguem esta usando o Timeline.");
        displayLastAccess(data.name, data.timestamp);
      } else {
        displayStatus("Ninguem esta usando o Timeline.");
        displayLastAccess("", "");
      }
    })
    .catch(error => {
      displayStatus("Erro ao verificar o status do Timeline.");
      displayLastAccess("", "");
    });
}

function displayStatus(status) {
  var statusDiv = document.getElementById("status");
  statusDiv.textContent = status;
}

function displayLastAccess(name, timestamp) {
  var lastAccessDiv = document.getElementById("lastAccess");
  if (name && timestamp) {
    lastAccessDiv.textContent = "Ultimo acesso: " + timestamp + " por " + name;
  } else {
    lastAccessDiv.textContent = "";
  }
}
