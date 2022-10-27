// 1.
// You can find the Timezones txt on this link https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a for the first parameter
// const getBxTime = function () { 
// document.getElementById('bxlTime').innerHTML=
// new Date ().toLocaleString("fr-BE",{timeZone:'Europe/Brussels',dateStyle:'medium',timeStyle :'medium', hourCycle:'h24'})
// };
// getBxTime()
// setInterval(getBxTime,1000);
//call the function name every second so the time will not stay stuck

const getUsTime =  () => { 
document.getElementById('usTime').innerHTML=
new Date ().toLocaleString("fr-BE",{timeZone:'japan',dateStyle:'medium',timeStyle :'long', hourCycle:'h24'})
};
getUsTime()
setInterval(getUsTime,1000);

const getIceTime = () => { 
document.getElementById('iceTime').innerHTML=
new Date ().toLocaleString("fr-BE",{timeZone:'Atlantic/Reykjavik',dateStyle:'medium',timeStyle :'medium', hourCycle:'h24'})
};
getIceTime()
setInterval(getIceTime,1000);

const getRuTime = () => { 
document.getElementById('rusTime').innerHTML=
new Date ().toLocaleString("fr-BE",{timeZone:'Etc/GMT-3',dateStyle:'medium',timeStyle :'long', hourCycle:'h24'})
};
getRuTime()
setInterval(getRuTime,1000);

// Exercise 4
// Using HTML, CSS (and javascript, of course) reproduce the following picture. 
// This should be centered both horizontaly and vertically in your page.
// The date should be of today, in your timezone. Refresh the display every seconds (hint), 
// so the time stays exact even when the page stays open for a long time
// When clicking on the hours, toggle the display in 12-hours format or back to 24-hours format.
const weekday = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let clock = document.querySelector(".clock")

const getBxTime = () => { 
  document.querySelector('.clock').innerHTML=
  new Date ().toLocaleString("fr-BE",{timeZone:'Europe/Brussels',timeStyle :'medium', hourCycle:'h24'}) 
  document.querySelector('.jour').innerHTML=  new Date().getDate();
  document.querySelector('.date').innerHTML= month [new Date().getMonth()];
  document.querySelector('.day').innerHTML=  weekday [new Date().getDay()];
  document.querySelector('.year').innerHTML=  new Date().getFullYear(); 
  };

  clock.addEventListener('click', () => {
  document.querySelector('.clock').innerHTML= 
  new Date ().toLocaleString("en-US",{timeStyle :'medium', hourCycle:'h12'}) 
 });
getBxTime()
setInterval(getBxTime,1000);
// AM-PM stay only 1 sec because of the setInterval, will check a solution later 
// timeOption = 'PM'

// 2. Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

const now = new Date() // Today's date 

const birth = new Date('1988-10-16')

const result = ((now.getTime() - birth.getTime())/ (1000 * 60 * 60 * 24))


const feelOld = () => {
    document.getElementById('birthday').innerHTML=
    (Math.trunc(result)  + ' days have passed since my birthday')
//Math.trunc will remove the decimale
};
feelOld()

// Write a function to find how many days have passed since any point in time (after 1970).

function daysDifference() {  
    //define two variables and fetch the input from HTML form  
    var dateI1 = document.getElementById("dateInput1").value;  
    var dateI2 = document.getElementById("dateInput2").value;  

   //define two date object variables to store the date values  
    var date1 = new Date(dateI1);  
    var date2 = new Date(dateI2);  

   //calculate time difference  
    var time_difference = date2.getTime() - date1.getTime();  

    //calculate days difference by dividing total milliseconds in a day  
    var result = time_difference / (1000 * 60 * 60 * 24);  

    return document.getElementById("result").innerHTML =    
    result + " days between both dates. ";  
 } 

//  3/ Using timestamps, find the exact time and date we will be in 80000 hours.
//  Write a function to display the time and date for any amount of hours given in the future. 
//  Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.



document.getElementById("numberInput").addEventListener('keyup', function (e) {
    
  
    if (e.key === 'Enter'){        
      const num = document.getElementById("numberInput").value
      console.log(num)
  
      const total = now.setTime(now.getTime() + num * 60 * 60 * 1000);
      const dateFormat = new Date(total)
// constante dateFormat va changer le total en format de date
      return document.getElementById('convert').innerHTML = (dateFormat);
    }
  });


