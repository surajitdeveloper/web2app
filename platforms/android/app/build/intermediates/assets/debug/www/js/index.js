if(window.history.length > 1) { document.getElementById("loadingDiv").hidden = true; }
function onDeviceReady() {
  if(window.history.length > 1) { navigator.app.exitApp(); }
    if (navigator.connection.type == Connection.NONE) {
      navigator.notification.alert('An internet connection is required to continue');
    } else {
      window.location="http://116.203.180.56/redirect.php?url=http://booksfair.in";
    }
  }
  document.addEventListener("deviceready", onDeviceReady, false);
