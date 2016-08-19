_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

$(function(){
  var applicationRouter = new ApplicationRouter({
    users: this.users,
    devices: this.devices
  });
  Backbone.history.start()
  var navigationView = new NavigationView({router: applicationRouter});
  navigationView.render()
  $('#navigation').html(navigationView.render().el);
});