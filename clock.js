var wakeuptime = 8;
var noon = 12;
var lunchtime = 12;
var battletime = 14;
var naptime = 15;
var adorabletime = 10;
var partytime;
var evening = 19;

// Getting it to show the current time on the page
var showCurrentTime = function () {
	// display the string on the webpage
	var clock = document.getElementById("clock");

	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";

	// Set hours
	if (hours >= noon) {
		meridian = "PM";
	}

	if (hours > noon) {
		hours = hours - 12;
	}

	// Set Minutes
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	// Set Seconds
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	// put together the string that displays the time
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

	clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
	var time = new Date().getHours();
	var messageText;
	var image = "pika-wave.jpg";

	var timeEventJS = document.getElementById("timeEvent");
	var pikaImageJS = document.getElementById("pikaImage");

	if (time == partytime) {
		image = "pika-party.jpg";
		messageText = "PIKA PARTY!!!!!";
	} else if (time == wakeuptime) {
		image = "pika-happy.jpg";
		messageText = "GOOD MORNING!!!";
	} else if (time == lunchtime) {
		image = "pika-eat.jpg";
		messageText = "PIKA SOOO HUNGRY!!!!!";
	} else if (time == battletime) {
		image = "pika-battle.jpg";
		messageText = "PIKA SOOOOOO READY!!!!";
	} else if (time == naptime) {
		image = "pika-sleep.jpg";
		messageText = "PIKA SOOOOOO SLEEEEEEEPY";
	} else if (time == adorabletime) {
		image = "pika-adorable.jpg";
		messageText = "PIKA LOVES YOU SOOOO MUCH!";
	} else if (time < noon) {
		image = "pika-stretch.jpg";
		messageText = "GOOD MORNING!!!";
	} else if (time >= evening) {
		image = "pika-evening.jpg";
		messageText = "GOOD EVENING!!!";
	} else {
		image = "pika-wave.jpg";
		messageText = "GOOD AFTERNOON!!!";
	}

	console.log(messageText);
	timeEventJS.innerText = messageText;
	pikaImageJS.src = image;

	showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function () {
	if (partytime < 0) {
		partytime = new Date().getHours();
		partyTimeButton.innerText = "STOP PARTYING!";
		partyTimeButton.style.backgroundColor = "#0A8DAB";
	} else {
		partytime = -1;
		partyTimeButton.innerText = "TIME TO PARTY!!!!!";
		partyTimeButton.style.backgroundColor = "#FFF";
	}
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
	wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
	lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates battle-Time selector
var battleTimeSelector = document.getElementById("battleTimeSelector");

var battleEvent = function () {
	battletime = battleTimeSelector.value;
};

battleTimeSelector.addEventListener("change", battleEvent);

// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
	naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

// Activates Adorable-Time selector
var adorableTimeSelector = document.getElementById("adorableTimeSelector");

var adorableEvent = function () {
	adorabletime = adorableTimeSelector.value;
};

adorableTimeSelector.addEventListener("change", adorableEvent);

//save user settings
