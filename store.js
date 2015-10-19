(function(){

	//module
	var app = angular.module('store', []);



	//controller
	app.controller('StoreController', function(){
		//this.product = gem;
		this.products = gems;

	});

	//product
	var gem = {
		name: 'Diamond',
		price: 2.95,
		description: 'Most expensive gem',
		canPurchase: false,
		soldOut: true
	}

	//product

	var gems = [
	{
		name: 'Diamond',
		price: 2.95,
		description: 'Most expensive gem',
		canPurchase: true,
		soldOut: false		
	},
	{
		name: 'Ruby',
		price: 5.88,
		description: 'Red and sexy',
		canPurchase: true,
		soldOut: true		
	},
	{
		name: 'Sapphire',
		price: 3.22,
		description: 'Blue is the warmest color',
		canPurchase: true,
		soldOut: false		
	},
	{
		name: 'Emerald',
		price: 5.77,
		description: 'Green is the new black',
		canPurchase: false,
		soldOut: true		
	},

	];

})();