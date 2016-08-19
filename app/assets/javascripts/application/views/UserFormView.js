var UserFormView = Backbone.View.extend({
  tagName: 'form',
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
    this.$el.html(this.button());
    return this;
  },
  showForm: function(){
    this.$el.html(this.form());
    return false;
  },
  addUser: function(){
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