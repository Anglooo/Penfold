$(document).ready(function() {

	var images = ["6.jpg", "7.jpg", "8.jpg", "9.jpg","10.jpg"];

	var length = images.length;

	var image = images[Math.floor(Math.random()*images.length)];

	text = $('#replaceImg').html();

	output = "img/WoodsShoot/" + image

	text = text.replace("img/WoodsShoot/",output);
	$('#replaceImg').html(text);

});