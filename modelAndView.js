//Adding a checkbox
var TodoView = Backbone.View.extend({
	template: _.template('<h3>' + '<input type=checkbox '+ '<% if (status === "complete") print("checked") %/>' + '<%= description %></h3>'),

	render: function() {
		// body...
		this.$el.html(this.template(this.model.toJSON()));
	}
})

//update model on UI event
var TodoView = Backbone.View.extend({
	events: {
		'change input': 'toggleStatus'
	},
	//rerender
	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},
	toggleStatus: function(){
		this.model.toggleStatus();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	},
	remove: function(){
		this.$el.remove();
	}
});
//go to model to define the function
var TodoItem = Backbone.Model.extend({
	toggleStatus: function(){
		if(this.get('status') === 'incomplete'){
			this.set({'status': 'complete'});
		}else{
			this.set({'status': 'incomplete'});
		}
		//to sync changes to server
		this.save();
	}
});

