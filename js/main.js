let delayTime = 4000;
let turn = "red";

const circle = document.querySelectorAll(".circle");
const message = document.querySelector('#message-info');

function change(){
	// console.log(turn);
	if( turn ==="red") {
		turn = "green";
		circle[0].className = 'circle';
		circle[1].classList.add('green');
		message.textContent = 'Green Light!!!';
	}else {
		turn = "red";
		circle[1].className = 'circle';
		circle[0].classList.add('red');
		message.textContent = 'Red Light!!!';
	}
	// setTimeout(change,delayTime)
}

setInterval(change,delayTime);

const car = document.querySelector("#car");
let dis = 0;

function MoveCar(){
	dis +=2;

	if(dis>=977) {
		dis = -20;
	}
	car.style.left = dis + 'px';
}
setInterval(()=> {
	if(!(dis===590 && turn==='red')) {
		MoveCar();
	}
	else {
		message.textContent = "Wait Until It's Green Light";
	}
},10);