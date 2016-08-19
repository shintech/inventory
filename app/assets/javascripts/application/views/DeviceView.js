var DeviceView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#deviceViewTemplate').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});