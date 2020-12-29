let delayTime = 4000;
let turn = "red";

const circle = document.querySelectorAll(".circle");

const messageBox = document.getElementById("lights");

//findint the x cordinates of the traffic lights
// const trafficBox = document.querySelector(".container");
// const rectTrafficBox = trafficBox.getBoundingClientRect();


// // for the coordinates of the car while not moving
// const car = document.querySelector("#car");
// const rectCar = car.getBoundingClientRect();
// console.log(rectCar);

let carDom = document.querySelector("#car");

let x = 0;

function moveCar() {
	x+=3;
	if( x>=1500) {
		x = -402;
	}
	carDom.style.left = x + "px";
}

setInterval(()=> {
	if ( !(turn==="red"  && x ===702) ) {
		moveCar();
	} else{
		messageBox.innerText = "Wait Until It's Green Light";
	}
},20);




function change(){
	// console.log(turn);
	if( turn ==="red") {
		turn = "green";
		circle[0].className = 'circle';
		circle[1].classList.add('green');
		messageBox.innerText = "Green Light";
	}else {
		turn = "red";
		circle[1].className = 'circle';
		circle[0].classList.add('red');
		messageBox.innerText = "Red Light";
	}
	// setTimeout(change,delayTime)
}

setInterval(change,delayTime);

// function findCarPosition(){
// 	// finding the x and y cordinates of the car
// const car = document.querySelector("#car");
// const rectCar = car.getBoundingClientRect();
// let xCor = Math.floor(rectCar.x);

// if( (xCor>=719 && xCor<=815) && turn ==="red") {
// 	alert("hello");
// }

// }

// setInterval(findCarPosition,5);
