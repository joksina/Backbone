//generate a model class
var TodoItem = Backbone.Model.extend({});
//generate a model instance
var todoItem = new TodoItem(
{
	description: "pick up milk", status: "incomplete"
});

//url to get json data
todoItem.url = "/todo";

//to populate model from server
todoItem.fetch();

//to get an attribute
todoItem.get("description");

//to set an attribut
todoItem.set({status: "complete"});


//traad url
var TodoItem = Backbone.Model.extend({urlRoot: "/todos"});

//fetch with id 1
var todoItem = new TodoItem({id: 1})

//this returns the dscription and status
todoItem.fetch();

//to update
todoItem.set({description: "pick up cookies."});
todoItem.save();

//creat and destroying a new todo
var todoItem = new TodoItem();
todoItem.set({description: "fill prescription."});
todoItem.save();

todoItem.destroy();

//render it
todoItem.toJSON();

//default values
var TodoItem = Backbone.Model.extend({
	defaults: {
		description: 'empty todo ..',
		status: 'incomplete'
	}
});

var todoItem = new TodoItem();
todoItem.get('description');

//Models can have events
//to listen to an event on a mode;
todoItem.on('event-name', function() {
	// body...
	alert('event-name happened!');
});
//to trigger
todoItem.trigger('event-name');

//to listen for a change
todoItem.on('change', doThing);

//event trigger on change
todoItem.set({description: "fill what?"})

//set without trigger event
todoItem.set({description: 'fill what?'}, {silent: true});

//to remove event listener
todoItem.off('change', doThing);