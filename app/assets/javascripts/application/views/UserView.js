var UserView = Backbone.View.extend({
  tagName: 'ul',
  template: _.template($('#userViewTemplate').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});