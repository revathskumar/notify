var Notify = function(){
  var deskNotif, permission = Notification.permission;

  var send = function(msg) {
    if(!permission) {
      return;
    }
    if(typeof msg.icon === 'undefined') {
      msg.icon = "/images/parrot-logo.png";
    }
    deskNotif = new Notification(msg.title, msg);
    deskNotif.onclick = onClick;
  };

  var onClick = function () {
    window.focus();
  };

  var request = function() {
    console.log('DeskNotifier request');
    if(permission !== 'denied') {
      Notification.requestPermission(function(perm){
        permission = (perm == 'granted');
      });
    }
  };

};

