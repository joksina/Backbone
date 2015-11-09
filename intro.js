//models and views in backbone
//create a model class
var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem(
{description: "Pick up milk", status: "incomplete", id: 1}
);

//get and set data
todoItem.get("description");
//to set attributes
todoItem.set({status: "complete"});
//to sync to server
todoItem.save();

//create a view class
var TodoView = Backbone.View.extend({
	render: function(){
		var html = '<h3>' + this.model.get('description') + '</h3>';
		$(this.el).html(html);
		//$('#app').html(html)
	}
});

//create view instance
var todoView = new TodoView({model: todoItem});
todoView.render();
console.log(todoView.el);