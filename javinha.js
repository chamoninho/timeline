function register(action) {
  var currentUser = document.getElementById("currentUser");
  var lastAccess = document.getElementById("lastAccess");
  var lastExit = document.getElementById("lastExit");

  var currentDateTime = new Date();
  var dateTimeString = formatDateTime(currentDateTime);

  if (action === "Entrou") {
    currentUser.textContent = "Usuário Atual: Entrou no Timeline";
    lastAccess.textContent = "Último Acesso: " + dateTimeString;
  } else if (action === "Saiu") {
    currentUser.textContent = "Usuário Atual: Nenhum";
    lastExit.textContent = "Última Saída: " + dateTimeString;
  }
}

function formatDateTime(dateTime) {
  var day = String(dateTime.getDate()).padStart(2, "0");
  var month = String(dateTime.getMonth() + 1).padStart(2, "0");
  var year = dateTime.getFullYear();
  var hour = String(dateTime.getHours()).padStart(2, "0");
  var minutes = String(dateTime.getMinutes()).padStart(2, "0");
  var seconds = String(dateTime.getSeconds()).padStart(2, "0");

  return day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;
}
