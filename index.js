/* global $ */

const app = "I don't do much."

const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  console.log('left = ', left);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

// NOTE : Odd that it can't seem to read the "right" property without having it be defined in the index.html
function moveDodgerRight() {
  console.log('dodge = ', dodger);
  var rightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(rightNumbers, 10)
  console.log('right = ', right);
  
  if (right < 400) {
    dodger.style.left = `${right + 1}px`
  }
}

document.addEventListener('keydown', function(e) {
    switch(e.which) {
        case 37:
            console.log('Move Left');
            moveDodgerLeft();
            break;
        case 39:
            console.log('Move Right');
            moveDodgerRight();
            break;
        default:
            console.log('N/A Input : ', e.which)
            break;
    }
})
