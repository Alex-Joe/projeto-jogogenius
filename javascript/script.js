let order =[];
let clickedOrder = [];
let score = 0;

/*
0 - green-slice
1 - red-slice
2 - yellow-slice
3 - blue-slice
*/
const greenSlice = document.querySelector('.green-slice');
const redSlice = document.querySelector('.red-slice');
const yellowSlice = document.querySelector('.yellow-slice');
const blueSlice = document.querySelector('blue-slice');

//create a color random order
let shuffleOrder = () => {
	let colorOrder = Math.floor(Math.random() * 4);
	order[order.length] =colorOrder;
    clickedOrder = [];
	
	for(let i in order) {
		let elementColor = createColorElement(order[i]);
		lightColor(elementColor, Number(i) + 1);
	}
}

//light the next color
let lightColor = (element, number) => {
	number = number * 500;
	setTimeout(() => {
	element.classList.add('selected');	
	},tempo - 250);
	
	setTimeout(() => {
		element.class.remove('selected');
	});
}

//check if the clicked buttons are at same order created in the game
let checkOrder = () => {
	for(let i in clickedOrder) {
	    if(clickedOrder[i] != order[i]) {
		lose();
		break;
	    }
    }
	if(clickedOrder.length == order.length) {
		 alert(`Score: $(score)\nYou are right! Next level!`);
		 nextLevel();
    }
}

//user click function
let click = (color) => {
	clickedOrder[clickedOrder.length] = color;
	createColorElement(color).classList.add('selected');
	
	setTimeout(() => {
		createColorElement(color).classList.remove('selected');
	});
	
	checkOrder();
}
	
	
	
	
		
		
		
		