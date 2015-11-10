// COLLECTION CLASS
// Dr. Goodparts is losing a ton of business because his app can only handle one appointment at a time! Who thought that was a good idea?
// Let's start improving the situation. Define a new collection class called AppointmentList, and make sure it handles the Appointment model.
var AppointmentList = Backbone.Collection.extend({
  model: Appointment
});

// RESET
// The office assistant has been busy taking appointments and has provided a nice JSON object ready to be loaded in.
// Get it all in the appointments collection instance using reset.
var appointments = new AppointmentList();
var json = [
  {title: 'Back pain'},
  {title: 'Dry mouth'},
  {title: 'Headache'}
];
appointments.reset(json);

// FETCHING DATA
// We totally forgot about the server! Instead of using reset, let's just fetch the data from the server. Set the url of AppointmentList collection to /appointments and then use fetch on the collection instance.
var AppointmentList = Backbone.Collection.extend({
  url: '/appointments',
  model: Appointment
});
var appointments = new AppointmentList();

appointments.fetch();

// RESET EVENT
// This Dr. Goodparts does not trust us when we tell him we are successfully loading data from the server into our collection.
// To prove him wrong, display an alert with the number of items in the collection by listening for the reset event.
var appointments = new AppointmentList();

appointments.on('reset', function(){
  alert(appointments.length);
});
appointments.trigger('reset');
appointments.fetch();
appointments.reset();

//FETCH SILENTLY
// Wouldn't ya know, our users don't like getting alerts every time we fetch new data for our collection.
// Update the fetch call below to not fire the reset event.
appointments.fetch({silent: true});

// LISTEN FOR AN ADD
// Dr. Goodparts has been adding models to the collection willy-nilly and you'd like to know when he does.
// Use an event listener to log to the console the model's title anytime a model is added to the appointments collection.
var appointments = new AppointmentList();

appointments.on('add', function(added){
  console.log(added.get('title'));
});

// ITERATION
// There are a lot of appointments in our collection and Dr. Goodparts wants a list of all appointment titles so he can arrange his equipment for the day.
// Use the map iteration function to return an array of appointment titles and assign to the titles variable.
var titles = appointments.map(function(appointment){
  return appointment.get('title');
});