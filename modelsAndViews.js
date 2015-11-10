// CANCELLING AN APPOINTMENT
// Dr. Goodparts is pretty flaky and has been cancelling a lot of appointments lately. He's asked for an easy, one-click way to cancel an appointment in the app you are building.
// Add a link to the AppointmentView template that, when clicked, will set its model's cancelled attribute to true.
var AppointmentView = Backbone.View.extend({
  template: _.template('<span><%= title %></span><a href="#"> cancel </a>'),
  events: {
    "click a": "cancel"
  },
  cancel: function(){
	this.model.set({cancelled: true});
},
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});

// REFACTOR TO THE MODEL
// Whenever you see too much code dealing with the Model in one of your views, it's probably time for a refactor.
// Create a cancel function in the Appointment model that sets the model's cancelled attribute to true, and call that function from the view. (Hint: Make sure to put the code in the correct tabs)
var AppointmentView = Backbone.View.extend({
  template: _.template('<span><%= title %></span> <a href="#">x</a>'),
  events:  { "click a": "cancel" },
  cancel: function(){
    this.model.cancel();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});
var Appointment = Backbone.Model.extend({
	cancel: function(){
    this.set({cancelled: true});
  }
});

//SYNC CHANGES
// Now we've got the perfect place to synchronize our cancellation to the server. Update Appointment's cancel function to save the model after setting its cancelled attribute.
var Appointment = Backbone.Model.extend({
  cancel: function(){
    this.set({cancelled: true});
     this.save();
  }
 
});

//RE-RENDER ON CHANGE
// Dr. Goodparts pulled a late nighter and decided to make some changes to the app while you slept. He added the cancelled class to the <span> tag when the appointment is cancelled, and then, knowing just enough to be dangerous, called this.render in cancel to re-render the view.
// Without gloating too much, update this code to use Model events to always re-render the view whenever the model changes.
// Make sure when render is called that the context (this) is the view instance using the third argument to on (if you don't remember what this is referring to check out the API docs over in the references)
var AppointmentView = Backbone.View.extend({
  template: _.template('<span class="<% if(cancelled) print("cancelled") %>">' +
                        '<%= title %></span>' +
                        '<a href="#">x</a>'),
  initialize: function(){
    this.model.on('change', this.render, this);
  },

  events:  { "click a": "cancel" },
  cancel: function(){
    this.model.cancel();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});

//REMOVING THE VIEW
// Sometimes Dr. Goodparts pretends he's a hacker and starts destroying appointments right there in the console.
// Make sure that when an appointment is destroyed, its corresponding view is removed from the DOM.
var AppointmentView = Backbone.View.extend({
  template: _.template('<span class="<% if(cancelled) print("cancelled") %>">' +
                        '<%= title %></span>' +
                        '<a href="#">x</a>'),
  
  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },

  events:  { "click a": "cancel" },
  cancel: function(){
    this.model.cancel();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },
  remove: function(){
    this.$el.remove();
  }
});