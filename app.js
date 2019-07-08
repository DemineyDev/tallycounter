let count = 0;

let plusButton = document.getElementById("plus-button")
plusButton.addEventListener("click", function(){
    count ++
    document.getElementById("count-display").innerHTML = count
})

let minusButton = document.getElementById("minus-button")
minusButton.addEventListener("click", function(){
    count --
    document.getElementById("count-display").innerHTML = count  
})

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time-display').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

let startButton = document.getElementById("start")

startButton.addEventListener("click", function(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('start-time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
})

let stopButton = document.getElementById("stop")
stopButton.addEventListener("click", function(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('end-time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
})