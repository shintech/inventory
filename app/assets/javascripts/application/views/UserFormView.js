var UserFormView = Backbone.View.extend({
  el: '#userForm',
  button: _.template("<button id='showFormButton'>New User</button>"),
  form: _.template($('#userFormTemplate').html()),
  initialize: function(options){
    this.users = options.users;
  },
  events: {
    'click #showFormButton': 'showForm',
    'click #submitUser': 'addUser',
    'click #cancelButton': 'render'
  },
  render: function(){
    console.log('UserFormView rendered...')
    this.$el.html('');
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
    var userAttrs = {
      firstname: $('#firstName').val(),
      lastname: $('#lastName').val(),
      email: $('#eMail').val(),
      username: $('#userName').val()
    }
    this.users.create(userAttrs);
    this.render();
    return false;
  },
});