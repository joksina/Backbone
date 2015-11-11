//Define and render

var todoListView = new TodoListView({collection: todoList});
var TodoListView = Backbone.View.extend({

	initialize: function(){
		this.collection.on('add', this.addOne, this);
	},
	render: function () {
		// body...
		this.collection.forEach(this.addOne, this);
	}
	addOne: function(todoItem){
		var todoView = new TodoView({model: todoItem});
		this.$el.append(todoView.render().el);
	}
});

//ading new collection
var newTodoItem = new todoItem({
	description: "take trash",
	status: 'incomplete'
});
todoList.add(newTodoItem)

//remove with custom
todoList.remove(todoItem);
initialize: function(){
	this.on('remove', this.hidModel);
},
hidModel: function(model){
	model.trigger('hide');
}