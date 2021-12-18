// ++ increments value by 1
// -- decrements value by 1
// ? is similar to if else statements when paired with :

let score = 0

function increase() {
    score  ++;
    document.getElementById('result').innerHTML = score;
}

function decrease(){
    score --;
    document.getElementById('result').innerHTML = score;
  }