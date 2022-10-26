// 1.
// You can find the Timezones txt on this link https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a for the first parameter
const getBxTime = function () { 
document.getElementById('bxlTime').innerHTML=
new Date ().toLocaleString("fr-BE",{timeZone:'Europe/Brussels',dateStyle:'medium',timeStyle :'medium', hourCycle:'h24'})
};
getBxTime()
setInterval(getBxTime,1000);
//call the function name every second so the time will not stay stuck

const getUsTime = function () { 
document.getElementById('usTime').innerHTML=
new Date ().toLocaleString("fr-BE",{timeZone:'japan',dateStyle:'medium',timeStyle :'long', hourCycle:'h24'})
};
getUsTime()
setInterval(getUsTime,1000);

const getIceTime = function () { 
document.getElementById('iceTime').innerHTML=
new Date ().toLocaleString("fr-BE",{timeZone:'Atlantic/Reykjavik',dateStyle:'medium',timeStyle :'medium', hourCycle:'h24'})
};
getIceTime()
setInterval(getIceTime,1000);

const getRuTime = function () { 
document.getElementById('rusTime').innerHTML=
new Date ().toLocaleString("fr-BE",{timeZone:'Etc/GMT-3',dateStyle:'medium',timeStyle :'long', hourCycle:'h24'})
};
getRuTime()
setInterval(getRuTime,1000);

// 2. Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

const now = new Date() // Today's date 

const birth = new Date('1988-10-16')

const result = ((now.getTime() - birth.getTime())/ (1000 * 60 * 60 * 24))


const feelOld = function(){
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
    const num = document.getElementById("numberInput").value
    const total = now.setTime(now.getTime() + num * 60 * 60 * 1000);
    if (e.key === 'Enter'){        
      return document.getElementById('convert').innerHTML = (total);
    }
  });


