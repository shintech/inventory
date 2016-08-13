var UsersView = Backbone.View.extend({
  el: '#usersList',
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function(){
    this.collection.each(this.addUser, this);
    return this;
  },
  addUser: function(user){
    var userView = new UserView({model: user});
    this.$el.append(userView.render().el);
  }
});