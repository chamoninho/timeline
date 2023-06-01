function register(action) {
  var nameInput = document.getElementById("name");
  var statusDiv = document.getElementById("status");
  var lastAccessDiv = document.getElementById("lastAccess");
  var name = nameInput.value;
  var now = new Date();
  var time = now.toLocaleTimeString();
  var date = now.toLocaleDateString();

  if (action === "Entrou") {
    statusDiv.textContent = name + " está usando o Timeline.";
    lastAccessDiv.textContent = "Último acesso: " + time + " - " + date;
  } else if (action === "Saiu") {
    statusDiv.textContent = "Ninguém está usando o Timeline.";
    lastAccessDiv.textContent = "Última saída: " + time + " - " + date;
  }

  nameInput.value = "";
}
