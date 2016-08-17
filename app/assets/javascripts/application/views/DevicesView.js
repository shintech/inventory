var DevicesView = Backbone.View.extend({
  el: '#usersList',
  initialize: function(){
    console.log("Devices View created...");
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    console.log('DevicesView rendered...');
    this.$el.html('');
    this.collection.each(this.addDevice, this);
    return this;
  },
  addDevice: function(device){
    var deviceView = new DeviceView({model: device});
    this.$el.prepend(deviceView.render().el);
  }
});