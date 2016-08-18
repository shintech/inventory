var NavigationView = Backbone.View.extend({
  el: '#navigation',
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
  },
  navigateUsers: function(){
    // console.log("nav button clicked...")
    this.router.navigate('users', {trigger: true} )
  }, 
  navigateDevices: function(){
    // console.log('nav devices pushed...')
    this.router.navigate('devices', {trigger: true})
  }
})