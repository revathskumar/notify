(function(root, factory){
  if(typeof exports === 'object') {
    console.log('this is node');
    module.exports = factory();
  }
  else {
    console.log('in else since its browser');
    root.Notify = factory();
  }

}(this, function(){
  var Notify = function(opts) {
    this.options = opts;
    this.permission = Notification.permission;
    this.title = opts.title;
    
    if(this.permission !== 'granted') {
      Notification.requestPermission();
    }
  };
  
  Notify.prototype.show = function(options) {
    console.log(options);
    var n = new Notification(this.options.title, this.options);
    Notification.onclick = this.options.onClick;
    Notification.onerror = this.options.onError;
    n.onshow = this.options.onShow;
  };

  return Notify;

}));

// var Notify = function(){
//   var deskNotif, permission = Notification.permission;

//   var send = function(msg) {
//     if(!permission) {
//       return;
//     }
//     if(typeof msg.icon === 'undefined') {
//       msg.icon = "/images/parrot-logo.png";
//     }
//     deskNotif = new Notification(msg.title, msg);
//     deskNotif.onclick = onClick;
//   };

//   var onClick = function () {
//     window.focus();
//   };

//   var request = function() {
//     console.log('DeskNotifier request');
//     if(permission !== 'denied') {
//       Notification.requestPermission(function(perm){
//         permission = (perm == 'granted');
//       });
//     }
//   };

// };

