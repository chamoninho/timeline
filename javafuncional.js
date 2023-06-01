function register(action) {
  var statusDiv = document.getElementById("status");

  if (action === "Entrou") {
    statusDiv.textContent = "Alguém está usando o Timeline.";
  } else if (action === "Saiu") {
    statusDiv.textContent = "Ninguém está usando o Timeline.";
  }
}
