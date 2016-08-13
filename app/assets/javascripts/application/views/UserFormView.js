var UserFormView = Backbone.View.extend({
  el: '#userForm',
  button: _.template('<button>Button</button>'),
  form: _.template($('#userFormTemplate').html()),
  events: {
    'click button': 'showForm'
  },
  render: function(){
    console.log('UserFormView rendered...')
    this.$el.html(this.button());
    return this;
  },
  showForm: function(){
    console.log('showForm button pushed...')
    this.$el.html(this.form());
    return false;
  },
})