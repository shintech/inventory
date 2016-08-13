var UserFormView = Backbone.View.extend({
  el: '#userForm',
  template: _.template('<button>Button</button>'),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
})