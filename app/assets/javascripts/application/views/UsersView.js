var UsersView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.collection.each(this.addUser, this);
    return this;
  },
  addUser: function(user){
    var userView = new UserView({model: user});
    this.$el.prepend(userView.render().el);
  }
});