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
    if (i < 10) {i = "0" + i};  
    return i;
  }

let startButton = document.getElementById("start")
let currentStartTime = 0
let currentEndTime = 0

startButton.addEventListener("click", function(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    currentStartTime = Date.now()
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

let clearButton = document.getElementById("clear")
clearButton.addEventListener("click", function(){
    document.getElementById("start-time").innerHTML = "00:00:00"
    document.getElementById("end-time").innerHTML = "00:00:00"
    document.getElementById("count-display").innerHTML = 0
    count = 0
})

stopButton.addEventListener("click", function() {
    currentEndTime = Date.now()
    var totalTime = (currentEndTime - currentStartTime) / 1000 / 60
    var average = Math.round(count / totalTime)
    var averagePerHour = average * 60
    // alert(totalTime)
    // alert(count)
    alert("You reviewed " + count + " profiles at " + average + " profiles per minute or " + averagePerHour + " profiles per hour")
})