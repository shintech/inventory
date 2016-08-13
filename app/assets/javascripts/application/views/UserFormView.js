var UserFormView = Backbone.View.extend({
  el: '#userForm',
  button: _.template("<button id='showFormButton'>Button</button>"),
  form: _.template($('#userFormTemplate').html()),
  events: {
    'click #showFormButton': 'showForm',
    'click #submitUser': 'addUser'
  },
  render: function(){
    console.log('UserFormView rendered...')
    this.$el.html(this.button());
    return this;
  },
  showForm: function(){
    console.log('#showFormButton pushed...')
    this.$el.html(this.form());
    return false;
  },
  addUser: function(){
    console.log('#submitUser button pushed...')
    return false;
  }
})