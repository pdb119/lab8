/*
    createCartView()

    Creates a view for the whole shopping cart, using TemplateListView
    as the prototype. It overrides the render() function to update the
    total price, and register click event handlers for the remove item
    buttons.
*/

function createCartView(config) {
<<<<<<< HEAD
    var view = createTemplateView();
	view.afterRender = function() {
		
	};
=======
    config.cartModel = config.model;
	config.templateView = createCartItemView(config);
	var view = createTemplateListView(config);
	view.afterRender = function(template, model) {
		this.totalPrice.html(this.model.getTotalPrice());
	};
	return view;
>>>>>>> done
} //createCartView()
