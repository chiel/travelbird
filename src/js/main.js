'use strict';

var $ = require('./elements'),
	zen = require('elements/zen'),
	moofx = require('moofx'),
	hotels = require('./hotels');

var hotelContainer = $('#list-hotels'),
	hotelList = zen('ul').insert(hotelContainer),
	i, hotel, li, image, html;
for (i = 0; i < hotels.length; i++){
	hotel = hotels[i];
	if (!hotel.image.length) continue;
	li = zen('li');
	image = hotel.image[0].replace('height=300', 'height=281');
	moofx(li).style({'background-image': 'url(' + image + ')'});
	html = '<a href="#">' +
			'<span class="info">' + hotel.hotel.name + ', ' + hotel.city.name + '</span>' +
		'</a>';
	li.html(html);
	li.insert(hotelList);
	console.log(hotels[i]);
}



