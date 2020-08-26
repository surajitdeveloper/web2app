if(window.history.length > 1) { document.getElementById("loadingDiv").hidden = true; }
function onDeviceReady() {
  if(window.history.length > 1) { navigator.app.exitApp(); }
    if (navigator.connection.type == Connection.NONE) {
      navigator.notification.alert('An internet connection is required to continue');
    } else {
      window.location.href = "http://167.71.236.252/demo/demo1/";
    }
  }
  document.addEventListener("deviceready", onDeviceReady, false);
