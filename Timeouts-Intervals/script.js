// 1/ Write a function that mimics the behaviour of a typewriter.

// Using setInterval display the word prout one character at a time (one letter per second). 
//Once the word is written on the screen clear the interval.

let str = 'Een dikke prout'.split('');
buttonProut = document.createElement("button");
buttonProut.textContent = "Surprise Motherfucker";
buttonProut.style.color = "yellow"
buttonProut.style.backgroundColor = "rgb(34,193,195)";    
buttonProut.style.fontWeight = "900";


buttonProut.addEventListener("click", () => {
    const prout = setInterval(() => {
        document.write(str[0]);
        str = str.slice(1);
        
        if (!str.length) {
          clearInterval(prout);
        }
      }, 500);;
  });


document.body.appendChild(buttonProut);

// 2/ Exercise 2
// Write a function that displays every second that has passed on the page since it was opened. 
// The display should be refreshed every second. 
// If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.
const newDiv = document.createElement("div")
document.body.appendChild(newDiv)


let interval;
let times = 0;



function tiktak() {
  document.body.innerHTML = " "   
  //the above line will remove what is on the screen to avoid a repetition like 0second,1second,2second,...
  document.write("Hey! you spent " + times + " seconds!");
  times++;
  if(times == 60){
    document.body.innerHTML = " "
    document.write("A minute has passed")
  }
  if(times == 120){
    document.body.innerHTML = " "
    document.write("2 minutes have passed")
  }
// continue for other minutes

}

buttonTimeSpent = document.createElement("button");
buttonTimeSpent.textContent = "Start The timer";


  buttonTimeSpent.addEventListener("click", () => {
  
  interval = setInterval(tiktak, 100);
});


document.body.appendChild(buttonTimeSpent);


