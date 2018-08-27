// Countdown Timer

function startTimer(duration, display) {
	var timer = duration, 
		minutes, seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		display.textContent = minutes + ":" + seconds;
		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}

window.onload = function () {
	var fiveMinutes = 60 * 19,
		display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
};

$(document).ready(function(){

    // Removes Bootsrap CDN from the page and replaces with #

    $('link[href*="/bootstrap/3.3.7/"]').attr("href", "#");
 
    // Lets us access the order button
    
    $('[id="order"]').click(function(){
        $("ch-button[type=''] button[type='submit']").click(); // Order button
    });

    // Lets us access the cancel order button

    $('[id="cancel"]').click(function(){
        $("ch-button[type='decline'] button[type='submit']").click();  // cancel button
    });
  
});

// Injects the Font Awesome into the page

document.querySelector('head').insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", crossorigin="anonymous"/>');

// Injects the Google Fonts

document.querySelector('head').insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" type="text/css"/>');
// Injects the Flexbox Grid CDN into the page

document.querySelector('head').insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" type="text/css"/>');

// Injects our code into the first container on the page

document.querySelector(".container").insertAdjacentHTML('afterbegin', 
'// Place HTML code here'
);



