var UserFormView = Backbone.View.extend({
  el: '#userForm',
  button: _.template("<button id='showFormButton'>Button</button>"),
  form: _.template($('#userFormTemplate').html()),
  events: {
    'click #showFormButton': 'showForm'
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
})