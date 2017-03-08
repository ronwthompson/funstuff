var konami = ''; //empty var to measure progress of code entry
var konamiSolution = 'UUDDLRLRBA'; //konami code

window.addEventListener('keydown', function (e){ //listening for keypresses
  if (konami === konamiSolution && e.keyCode === 13) {
    document.querySelector(`img`).classList.remove('hiding'); //change img and hiding for your own website
  }
  else {
    addKonami(e.keyCode);
  };
});

function addKonami (i) { //checks if keypress is correct next value, clears progress if incorrect
  var temp = '';
  if (i == 37 || i == 38 || i == 39 || i ==  40) {
    temp = arrowToLetter(i);
  }
  else if (i == 68 || i == 76 || i == 82 || i == 85) {
    temp = "Z";
  }
  else {
    temp = String.fromCharCode(i);
  };

  if (konamiSolution[konami.length] === temp) {
    konami += temp;
  }
  else if (konamiSolution[konami.length] !== temp && temp === "U") {
    konami = 'U';
  }
  else {
    konami = '';
  };
};

function arrowToLetter (i) { //reassign arrow keypresses to letters
  switch (i) {
    case 37:
        return "L";
    case 38: 
        return "U";
    case 39:
        return "R";
    case 40:
        return "D";
    default:
        return;
  }
};
