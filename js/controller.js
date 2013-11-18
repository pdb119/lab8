/* controller.js
    Controller for Shopping Cart page
*/

$(function(){
	var formatLabels = {dvd: "DVD", bluray: "Blu-Ray"};
	var cartModel = createCartModel();
	var cartView = createCartView({
		model: cartModel,
		template: $(".cart-item-template"),
		container: $(".cart-items-container"),
		totalPrice: $(".total-price")
		});
/*	alert(window.localStorage);
	var loadedCart = localStorage.moviesCart;
	if(loadedCart && loadedCart.length>0){
		alert("load");
		cartModel.setItems(JSON.parse(loadedCart));
	}*/
	var moviesModel = createMoviesModel({url: "https://courses.washington.edu/info343/ajax/movies"});
	var moviesView = createMoviesView({model: moviesModel, template: $(".movie-template"), container: $(".movies-container")});
	moviesModel.refresh();
	moviesView.on("addToCart", function(d){
		var movie = moviesModel.items[d.movieID];
		if(!movie){
			throw "Invalid movie ID: " + d.movieID;
		}
		cartModel.addItem({
			id: movie,
			title: movie.title,
			format: d.format,
			formatLabel: formatLabels[d.format],
			price: movie.prices[d.format]
		});
	});
	
	$(".place-order").click(function (){
		$.ajax({
			url: 'https://courses.washington.edu/info343/ajax/movies/orders/',
			type: 'POST',
			data: cartModel.toJSON(),
			contentType: 'application/json',
			success: function(response){
				alert(response.message);
			},
			error: function(one, two, three){
				alert("There was an error. Deal with it.");
			}
		});

	});
	
/*	cartModel.on("change", function() {
		localStorage.setItem("moviesCart", cartModel.toJSON());
	});*/
	
}); //doc ready()

