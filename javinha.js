function register(action) {
    var statusDiv = document.getElementById("status");
  
    if (action === "Entrou") {
      localStorage.setItem("timelineStatus", "Entrou no Timeline");
    } else if (action === "Saiu") {
      localStorage.setItem("timelineStatus", "Saiu do Timeline");
    }
  
    displayStatus();
  }
  
  function displayStatus() {
    var statusDiv = document.getElementById("status");
    var timelineStatus = localStorage.getItem("timelineStatus");
  
    if (timelineStatus) {
      statusDiv.textContent = timelineStatus;
    } else {
      statusDiv.textContent = "Ninguém está usando o Timeline.";
    }
  }
  
  window.onload = function() {
    displayStatus();
  };
  