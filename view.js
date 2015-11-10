var SimpleView = Backbone.View.extend({});
var simpleView = new SimpleView();

console.log(simpleView.el); //==> <div></div> by defaule el is div

var SimpleView = Backbone.View.extend({tagName: 'li'});
var simpleView = new SimpleView();
console.log(simpleView.el); //==> <li></li>

var TodoView = BackBone.View.extend({
	tagName: 'article',
	id: 'todo-view',
	className: 'todo'
});

var todoView = new TodoView();
console.log(todoView.el);
//==> <article id='todo-view' class='todo'> </article>

//jquery method
$('#todo-view').html();
//el DOM element
$(todoView.el).html();
//shortcut
todoView.$el.html();

var TodoView = Backbone.View.extend({
	tagName: 'article',
	id: 'todo-view',
	className: 'todo',
	render: function() {
		// body...
		var html = '<h3>' + this.model.get('description') + '</h3>';
		this.$el.html(html);
	}
});

var todoView = new TodoView({model: todoItem});
todoView.render();
console.log(todoView.el);


//Using template
var TodoView = Backbone.View.extend({
	tagName: 'article',
	id: 'todo-view',
	className: 'todo',
	template: _.template('<h3><%=description %></h3>')
	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	}
});

//Adding view events
//Views are responsible for any user interface to respond
var TodoView = Backbone.View.extend({
	events: {
		'click h3': 'alertStatus'
	},
	alertStatus: function(e){
		alert('hey you clicked the h3!');
	}
});

//selector is the scoped to the element
//to specify which h3
this.$el.delegate('h3', 'click', alertStatus);