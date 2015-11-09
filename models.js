// While messing around in the console, you've discovered a strange bug. Every new Appointment you create has the same exact date, instead of the date and time of when the Appointment instance was created.
// This is because new Date() is evaluated once, when the Appointment model is first created, and not re-evaluated every time a new instance is created.
//To fix this you'll want to assign a function to defaults instead of just a plain object. Wrap the object below in a function which returns the object. This will cause the defaults to get evaluated every time a new instance is created.

var Appointment = Backbone.Model.extend({
  defaults: function() {
  return{
    title: 'Checkup',
    date: new Date()
  };
}
});


//Dr. Goodparts finally ponied up for a server and has seeded it with his first few appointments. Luckily for us, he bought the REST package with the JSON add-on.
//Point the root URL of your Appointment model to the /appointments endpoint.
//Then, create a new Appointment with an id of 1, and fetch its data from the server.
var Appointment = Backbone.Model.extend({urlRoot: "/appointments"});
var appointment = new Appointment({id: 1});
appointment.fetch();

//SYNCING CHANGES
//Setting the urlRoot of the Appointment model lets us do more than just fetch from the server, it also lets us sync changes made to model instances.
//Dr. Goodparts isn't feeling good today so we're going to have to cancel his appointments. Set the appointment's cancelled attribute to true and save the appointment to the server.
var appointment = new Appointment({id: 1});
appointment.set({cancelled: true});
appointment.save();

//LISTENING FOR CHANGES
//Dr. Goodparts is upset that he wasn't notified when we changed his last appointment to cancelled.
//Add a listener to the appointment model instance to pop-up an alert box (using alert) whenever any of the model attributes change.
var appointment = new Appointment({id: 1});

appointment.on('change', function(){
  alert("something has changed");
});

//Less LISTENING
//Dr. Goodparts browser crashed because of too many alerts.
//Instead of listening for all attribute changes, just listen and alert when changes are made to the cancelled attribute.
appointment.on('change:cancelled', function(){
  alert("Hey Dr. Goodparts, your appointment has changed!");
});

//GETTING BACK OUR ATTRIBUTES
//We've already seen how we can use get to access attributes on a model instance, but what if we wanted them all at once?
//Use the console.log function to log the JSON of the appointment instance using toJSON. If you don't remember how toJSON works, consult the Backbone Model docs.
var appointment = new Appointment({id: 1});
console.log(appointment.toJSON());