var NavigationView = Backbone.View.extend({
  template: _.template($('#navigationTemplate').html()),
  initialize: function(options){
    this.router = options.router
  },
  events: {
    'click #usersButton': 'navigateUsers',
    'click #devicesButton': 'navigateDevices'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  navigateUsers: function(){
    this.router.navigate('users', {trigger: true} )
  }, 
  navigateDevices: function(){
    this.router.navigate('devices', {trigger: true})
  }
});