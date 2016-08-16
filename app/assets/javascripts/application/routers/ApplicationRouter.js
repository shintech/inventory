var ApplicationRouter = Backbone.Router.extend({
  routes: {
    'users': 'usersNavigate',
    'devices': 'devicesNavigate'
  },
  usersNavigate: function(){

  var users = new Users;
  users.fetch();
  var usersView = new UsersView({collection: users })
  var userFormView = new UserFormView({users: users});
  userFormView.render();

  }, 
  devicesNavigate: function(){
    var devices = new Devices;
    devices.fetch();
    var devicesView = new DevicesView({collection: devices})
    
  }
})