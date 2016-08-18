var UserView = Backbone.View.extend({
  tagName: 'ul',
  template: _.template($('#userViewTemplate').html()),
  render: function(){
    // console.log(' UserView rendered...')
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});