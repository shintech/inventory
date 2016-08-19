var ApplicationRouter = Backbone.Router.extend({
  routes: {
    'users': 'usersNavigate',
    'devices': 'devicesNavigate'
  },
  usersNavigate: function(){
    var users = new Users;
    var usersView = new UsersView({collection: users });
    users.fetch();
    $('#usersList').html(usersView.el);
    var userFormView = new UserFormView({users: users});
    $('#userForm').html(userFormView.render().el);
  }, 
  devicesNavigate: function(){
    var devices = new Devices;
    var devicesView = new DevicesView({collection: devices });
    devices.fetch();
    $('#usersList').html(devicesView.el)
    var deviceFormView = new DeviceFormView({devices: devices});
    $('#userForm').html(deviceFormView.render().el);
  }
});