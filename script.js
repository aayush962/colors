//var colors = [
//				"rgb(255, 0, 0)", 
//				"rgb(255, 255, 0)", 
//				"rgb(255, 0, 255)", 
//				"rgb(0, 255, 0)", 
//				"rgb(0, 255, 255)", 
//				"rgb(0, 0, 255)"
//			]

var colors = generateRandomColors(6);


var boxes = document.querySelectorAll(".box");
var pickedColor = randomColor()
document.getElementById("pick").textContent = pickedColor;


for( var i = 0; i < boxes.length; i++){
	boxes[i].style.background = colors[i];

	boxes[i].addEventListener("click", function(){
		stat = document.getElementById("status");
		if(this.style.background == pickedColor){
			stat.textContent = "Correct! Try another.";
			changeColor(pickedColor);
		}
		else{
			stat.textContent = "Incorrect Guess! Please try again.";
			this.style.background = "#232323";
		}
	})

	//grab color of picked box and compare color to the selected color.
}

function changeColor(color){
		for(var j = 0; j < boxes.length; j++){
		boxes[j].style.background = color;
		}
}

function randomColor(){
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}


function generateRandomColors(num){
	arr = [];
	for( i = 0; i < num; i++){
		var elem = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
		arr.push(elem);
	}
	return arr;
}
