/*
    createCartModel()

    Creates a model for the shopping cart. This uses the ListModel
    as the prototype, but adds a few specific methods.

    The config parameter can contain the following properties:
    - items (array of objects) initial items for the cart (optional)
*/

function createCartModel(config) {
<<<<<<< HEAD
	var listModel = createListModel();
	listModel.getTotalPrice = function(){
		var totalPrice = 0;
		for(var i=0; i<this.items.length; i++){
			totalPrice = this.items[i].price;
		}
		return totatPrice.toFixed(2);
	}
	
	listModel.toJSON = function(){
		return JSON.stringify(this.items);
	}
=======
	var listModel = createListModel(config);
	listModel.getTotalPrice = function() {		
		var total = 0;
		for(var i=0; i<this.items.length; i++){
			total += this.items[i].price;
		}		
		return total.toFixed(2);
	};
	listModel.toJSON = function() {
		return JSON.stringify(this.items);
	};
	return listModel;
>>>>>>> done
} //createCartModel()