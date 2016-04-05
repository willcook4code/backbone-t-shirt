// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';

const tshirts = [
  {
    id: 1,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Save my Trees",
    price: 29
  },
  {
    id: 2,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Nature Lover",
    price: 19
  },
  {
    id: 3,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
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
		  		<ul>
		  			<div class="options" id="refresh"><i class="fa fa-retweet"></i></div>

		  			<li class="options" id="heart"><i class="fa fa-heart-o"></i></li>
					<li class="options" id="xl">XL</li>
					<li class="options" id="colorBox"><i class="fa fa-square"></i></li>
					<li class="options" id="shoppingCart"><i class="fa fa-shopping-cart"></i></li>
		  		</ul>
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









