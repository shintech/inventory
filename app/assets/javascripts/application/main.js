_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

// var users = new Users;
// users.fetch();
// var usersView = new UsersView({collection: users })

// $(function(){
//   var users = new Users;
//   users.fetch();
//   var usersView = new UsersView({collection: users })
//   var userFormView = new UserFormView({users: users});
//   userFormView.render();
// })
$(function(){
var applicationRouter = new ApplicationRouter({
  users: this.users,
  devices: this.devices
});
Backbone.history.start()
var navigationView = new NavigationView({router: applicationRouter});
navigationView.render()
});