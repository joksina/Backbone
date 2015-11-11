// COLLECTION VIEW
// It's finally time to start building out our Appointment app. We're going to be using a collection and a collection view to display a list of appointments to the ornery but brilliant Dr. Goodparts.
// Let's start by creating a View Class named AppointmentListView and then create an instance of that class, passing in our collection instance appointments
var appointments = new AppointmentList();
var AppointmentListView = Backbone.View.extend({});
var appointmentListView = new AppointmentListView({collection: appointments});

// RENDER THE COLLECTION
// Good morning. Last night you were so close to implementing the render function on AppointmentListView but decided to take a nap, and here you are!
// Go ahead and implement the addOne function, rendering an AppointmentView for each model in the collection, and appending it to the collection view's top-level element.
// Note There is a bug in the forEach call. Make sure and fix it before submitting.
var AppointmentListView = Backbone.View.extend({
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model: model});
    this.$el.append(appointmentView.render().el)
  }
});

// INTO THE DOM
// Wow, you are a hard worker! Let's see it pay off by rendering our collection view and inserting it into the DOM. Using the append or html jQuery methods, insert the top-level element into the #app div.
var appointmentsView = new AppointmentListView({collection: appointmentList});
appointmentsView.render(); 
$('#app').html(appointmentsView.el);

// APPENDING NEW MODELS
// Uh oh. Dr. Goodparts is at it again, adding new models to the collection, and he's upset because when he adds a model, the DOM isn't updated.
// In the AppointmentListView's initialize function, listen for the collections add event and call the addOne function to append the new model to the view.
// Make sure you include the context argument to ensure addOne is called with the correct context.
var AppointmentListView = Backbone.View.extend({
  initialize: function(){
	this.collection.on('add', this.addOne, this);
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model: model});
    appointmentView.render();
    this.$el.append(appointmentView.el);
  }
});

//RESET ALL THE THINGS
// It's Monday morning and time to reset all the appointments for the week. You hear a screech from down the hall and seconds later Dr. Goodparts barges red-faced into your office because the DOM didn't update when he reset the collection.
// Update the AppointmentListView to listen for the collection's reset event to call the render function.
// Make sure you include the context argument to ensure render is called with the correct context.
var AppointmentListView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.render, this);
  },
  render: function(){
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model: model});
    appointmentView.render();
    this.$el.append(appointmentView.el);
  }
});

// REMOVING A MODEL
// Turns out one of the appointments in our collection was rescheduled for next week, but when Dr. Goodparts removed the appointment model from the collection, it wasn't removed from the DOM. You can imagine Dr. Goodparts reaction.
// Fix this bug by using a custom event hide on Appointment models.
// Update your AppointmentList collection to trigger the hide event on a model when it is removed.
// Update your AppointmentView to call the remove function whenever its model fires the hide event.
var AppointmentList = Backbone.Collection.extend({
  model: Appointment,
  initialize: function(){
    this.on('remove', this.hideModel);
  },
  hideModel: function(model){
    model.trigger('hide');
  }
});
//appointments view
var AppointmentView = Backbone.View.extend({
  initialize: function(){
	this.model.on('hide', this.remove, this);
  },
  remove: function(){
    this.$el.remove();
  }
});
