var DevicesView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.html('');
    this.collection.each(this.addDevice, this);
    return this;
  },
  addDevice: function(device){
    var deviceView = new DeviceView({model: device});
    this.$el.prepend(deviceView.render().el);
  }
});