// Configurar a conexão com o Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCp37eYY4iaaV4u9DQDAvP0ryJ36zhj5xI",
  authDomain: "exxatatimeline.firebaseapp.com",
  databaseURL: "https://exxatatimeline-default-rtdb.firebaseio.com",
  projectId: "exxatatimeline",
  storageBucket: "exxatatimeline.appspot.com",
  messagingSenderId: "335024989606",
  appId: "1:335024989606:web:e49ce0ca1e30438c951b67",
  measurementId: "G-8J4GQ9VD38"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Referenciar o nó "timeline" no banco de dados
var timelineRef = database.ref("timeline");

// Função para registrar a entrada do usuário
function registerEntry(name) {
  timelineRef.set({
    name: name,
    timestamp: new Date().toLocaleString()
  });
}

// Função para registrar a saída do usuário
function exitTimeline() {
  timelineRef.remove();
}

// Função para verificar o status do Timeline
function checkTimelineStatus() {
  timelineRef.on("value", function(snapshot) {
    var data = snapshot.val();
    if (data) {
      displayStatus("Alguém está usando o Timeline.");
      displayLastAccess(data.name, data.timestamp);
    } else {
      displayStatus("Ninguém está usando o Timeline.");
      displayLastAccess("", "");
    }
  });
}

// Função para exibir o status
function displayStatus(status) {
  var statusDiv = document.getElementById("status");
  statusDiv.textContent = status;
}

// Função para exibir o último acesso
function displayLastAccess(name, timestamp) {
  var lastAccessDiv = document.getElementById("lastAccess");
  if (name && timestamp) {
    lastAccessDiv.textContent = "Último acesso: " + timestamp + " por " + name;
  } else {
    lastAccessDiv.textContent = "";
  }
}

// Manipulador de evento para envio do formulário
document.getElementById("entryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var nameInput = document.getElementById("name");
  var name = nameInput.value;

  registerEntry(name);
  nameInput.value = "";
});
