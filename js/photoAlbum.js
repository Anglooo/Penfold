$( document ).ready(function() {

	var carouselRunning;

	$('.carousel').each(function(){
		carouselRunning = "false";

        $(this).carousel("pause");
    });
 

	$("#playPauseButton").click(function(){

		$(document).ready(function() {

			status = $('#playPauseButton').html();

			if (status.indexOf("Pause") > -1) {

				status = status.replace("pause","play");
				status = status.replace("Pause","Play");
				$('#playPauseButton').html(status);

				$('#photoCarousel').each(function(){
			    	$(this).carousel('pause');

				});
			} 
			else{

				status = status.replace("play","pause");
				status = status.replace("Play","Pause");
				$('#playPauseButton').html(status);
		    	$('.carousel').each(function(){
			    	$(this).carousel({
				            interval: 2500
				    });
		     	});
		     	$('.carousel').carousel('cycle');
					};

		})

	});

	$('.photoThumbnail').click(function(){


		var status = $('#playPauseButton').html();

		status = status.replace("pause","play");
		status = status.replace("Pause","Play");

		$('#playPauseButton').html(status);

		var fullID = this.id;
		var id = fullID.substr(5);
		id = id -1;

		$('.carousel').carousel(id);

		$('#photoCarousel').each(function(){
			$(this).carousel('pause');
		});

		$('#photoModal').modal('toggle')

	});

	$('#playPhotoAlbum').click(function(){

    	$('.carousel').each(function(){
	    	$(this).carousel({
		            interval: 2500
		    });
     	});
     	$('.carousel').carousel('cycle');

	});



});