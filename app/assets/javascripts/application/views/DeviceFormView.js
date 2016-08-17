var DeviceFormView = Backbone.View.extend({
  el: '#userForm',
  button: _.template("<button id='showFormButton'>New Device</button>"),
  form: _.template($('#deviceFormTemplate').html()),
  initialize: function(options){
    this.devices = options.devices;
  },
  events: {
    'click #showFormButton': 'showForm',
    'click #submitDevice': 'addDevice',
    'click #cancelButton': 'render'
  },
  render: function(){
    this.$el.html(''),
    this.$el.html(this.button());
    return this;
  },
  showForm: function(){
    this.$el.html(this.form());
    return false;
  },
  addDevice: function(){
    var deviceAttrs = {
      name: $('#deviceName').val(),
      serial_number: $('#deviceSN').val()
    }
    this.devices.create(deviceAttrs);
    this.render();
    return false;
  }
})