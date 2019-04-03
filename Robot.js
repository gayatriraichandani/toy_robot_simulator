/**
 * Javascript for Toy Robot Simulator
 */
//create Global variables 
let xPos , yPos, direction;

//function to be called on load
window.onload = function() {
	initialPosition();
}

/**
 * get the input values
 * set the robot's start position and direction in the global variables
 */
function initialPosition(){

    let x = document.getElementById("xPosition");
    let y = document.getElementById("yPosition");
    let f = document.getElementById("facing");
   
    xPos = (x.value)*100;
    yPos = (y.value)*100;
    direction = (f.options[f.selectedIndex].text);
}

//Action taken on click on Report Button
function report(){
	alert("Robot is reported at :" + "\n" + " x --> " + xPos/100 + " \n y --> " + yPos/100 + " \n Direction --> " + direction);
}

//Action taken on click of Left Button
function takeLeft(){
	if(validateIfRobotOnTable()){
		switch(direction){
		case 'North':
			direction = 'West';
			document.getElementById("facing").value = 'west';
			break;
		case 'South':
			direction = 'East';
			document.getElementById("facing").value = 'east';
			break;
		case 'West':
			direction = 'South';
			document.getElementById("facing").value = 'south';
			break;
		case 'East':
			direction = 'North';
			document.getElementById("facing").value = 'north';
			break;
		default:
			break;	
		}
	}
}

//Action taken on click of Right button
function takeRight(){
	if(validateIfRobotOnTable()){

		switch(direction){
		case 'North':
			direction = 'East';
			document.getElementById("facing").value = 'east';
			break;
		case 'South':
			direction = 'West';
			document.getElementById("facing").value = 'west';
			break;
		case 'West':
			direction = 'North';
			document.getElementById("facing").value = 'north';
			break;
		case 'East':
			direction = 'South';
			document.getElementById("facing").value = 'south';
			break;
		default:
			break;	
		}
	}
}

//Action taken on click of move button
function move(){
	if(validateIfRobotOnTable()){
		
		switch(direction){
		case 'North':
			if(yPos < 400){
				yPos += 100;
				document.getElementById("yPosition").value = yPos/100;
			}
			break;
		case 'South':
			if(yPos > 0){
				yPos -= 100;
				document.getElementById("yPosition").value = yPos/100;
			}
			break;
		case 'East':
			if(xPos < 400){
				xPos += 100;
				document.getElementById("xPosition").value = xPos/100;
			}
			break;
		case 'West':
			if(xPos > 0){
				xPos -= 100;
				document.getElementById("xPosition").value = xPos/100;
			}
			break;
		default:
			console.log("Please place Robot on the table");
			break;
		}
	}
}

//validate if Robot is not on the table
function validateIfRobotOnTable(){
	initialPosition();
	if(xPos<0 || xPos>400 || yPos < 0 || yPos > 400){
		alert("Please place Robot on the table.");
		console.log("Please place Robot on the table.");
		return false;
	}
	return true;
}
