// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';

const tshirts = [
	 {
	   id: 1,
	   imageUrlFront: "http://tympanus.net/Blueprints/ProductGridLayout/images/1_front.png",
	   imageUrlBack: "http://tympanus.net/Blueprints/ProductGridLayout/images/1_back.png",
	   title: "Save my Trees",
	   price: 29

	 },
	 {
	   id: 2,
	   imageUrlFront: "http://tympanus.net/Blueprints/ProductGridLayout/images/2_front.png",
	   imageUrlBack: "http://tympanus.net/Blueprints/ProductGridLayout/images/2_back.png",
	   title: "Nature Lover",
	   price: 19

	 },
	 {
	   id: 3,
	   imageUrlFront: "http://tympanus.net/Blueprints/ProductGridLayout/images/3_front.png",
	   imageUrlBack: "http://tympanus.net/Blueprints/ProductGridLayout/images/3_back.png",
	   title: "Forest Walk",
	   price: 39

	 }
]

const basicView = Backbone.View.extend({
	initialize: function(i) {
		this.i = i;
	},
	template: function() {
		return `<div class="topBox">
  					<span class="arrow"><i class="fa fa-share"></i></span>
  					<img class="image" src="${tshirts[this.i].imageUrlFront}">
  				</div>
  				<div class="iconBox">
		  			<div class="options" id="refresh"><i class="fa fa-retweet"></i></div>
		  			<div class="options" id="heart"><i class="fa fa-heart-o"></i></div>
					<div class="options" id="xl">XL</div>
					<div class="options" id="colorBox"><i class="fa fa-square"></i></div>
					<div class="options" id="shoppingCart"><i class="fa fa-shopping-cart"></i></div>
			  	</div>
				<div class="title">${tshirts[this.i].title}</div>
				<div class="price">$${tshirts[this.i].price}</div>`
	},
	render: function() {
		this.$el.append(this.template());
		$('body').append(this.el)
	}
});

var firstShirt = new basicView(0);
var secondShirt = new basicView(1);
var thirdShirt = new basicView(2);

firstShirt.render();
secondShirt.render();
thirdShirt.render();









