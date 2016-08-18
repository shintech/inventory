var UsersView = Backbone.View.extend({
  el: '#usersList',
  initialize: function(){
    // console.log("UsersView created...")
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    // console.log('UsersView rendered...')
    this.$el.html('')
    this.collection.each(this.addUser, this);
    return this;
  },
  addUser: function(user){
    var userView = new UserView({model: user});
    this.$el.prepend(userView.render().el);
  }
});