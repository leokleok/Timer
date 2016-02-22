// your code here:
var counter = 0;
var intervalID = 0;

function startTimer () {
 document.getElementById("timer").innerHTML = "Time elapsed";
  intervalID = window.setInterval(timerId, 1000);

    function timerId() {
    document.getElementById("timer").innerHTML = "Time elapsed" + " " + counter;
    counter += 1;

    
 }
}

function resetTimer () {
  // window.clearInterval(intervalID);
  document.getElementById("timer").innerHTML = "Stop Watch";
  counter = 0;
  // startTimer;


}

function pauseTimer () {
window.clearInterval(intervalID);
}


function addClickListener (element, i)
{
  element.addEventListener ('click',function(event)
  {

    if (element.id == "start")
    {
      startTimer();
    }

    else if (element.id =="reset")
    {
      resetTimer();
    }

    else if (element.id == "pause")
    {
      pauseTimer();
    }
  }, false);
}


function init() {

alert("JS loaded");

elements = document.getElementsByTagName('button');
alert (elements.length + "elements found");

for (i =0; i<elements.length; i ++)
{
  addClickListener(elements[i], i);
}


}

window.addEventListener("load",init,false);
