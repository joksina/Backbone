//set of models
//adding lists 
var TodoList = Backbone.Collection.extend({
	model: TodoItem
});

//new instance of to do lists
var todoList = new TodoList();

//to get length
todoList.length;
//to add to lenght
todoList.add(todoItem1);
//to get model instance at index 0
todoList.at(0);
//get by index
todoList.get(1);
//remove
todoList.remove(todoItem1);

//bulk population
var todos = [
{description: 'get hired', status: 'incomplete'},
{description: 'get milk', status: 'incomplete'},
{description: 'learn Backbone', status: 'incomplete'}
];
todoList.reset(todos);

//FETCHING DATA FROM SERVER
var todoList = Backbone.Collection.extend({
	url: '/todos'
});

//populate Collection from SERVER
todoList.fetch();

todoList.on('event-name', function(){
	alert('event-name happenned!');
});

//run the event
todoList.trigger('event-name');

//special events on Collection
//add, remove, reset
//iteration
todoList.reset([
{description: 'get hired', status: 'incomplete'},
{description: 'get milk', status: 'incomplete'},
{description: 'learn Backbone', status: 'incomplete'}
]);
todoList.forEach(function(todoItem){
	alert(todoItem.get('description'));
});

todoList.map(function(todoItem){
	return todoItem.get('description');
});

todoList.filter(function(todoItem){
	return todoItem.get('status')=== 'incomplete';
});

//you can use other iteration from the underscore library
