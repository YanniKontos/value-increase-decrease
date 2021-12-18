// ++ increments value by 1
// -- decrements value by 1

let score = 0

function increase() {
    score  ++;
    document.getElementById('result').innerHTML = score;
}

function decrease(){
    score --;
    document.getElementById('result').innerHTML = score;
  }
