var computerLetter = 'a';
var myLetter = '';

var win = document.getElementById('Wins');
var lose = document.getElementById('losses');
var timesWin = 0;
var timesLose = 0;

document.onkeyup = function(event){
	myLetter = event.key;


if (computerLetter === myLetter){
		timesWin++;
		win.innerHTML = timesWin;
	displayLetters();
  console.log('match');
  console.log('you win');
}
  else{
  	timesLose++;
  	lose.innerHTML = timesLose;
  	displayLetters();
  	console.log('dont match');
  	console.log('you lose');
}

function displayLetters(){
	console.log('computers letter is: '+ computerLetter);
	console.log('my letter is: '+ myLetter);
}
}

//variable declaring
//if statements
//functions
//key events
//document.getElementById
// console.log()






