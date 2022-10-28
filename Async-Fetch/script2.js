const body = document.querySelector('body');
const button = document.createElement('button');
//create button
body.appendChild(button)
button.innerText=('Click me to fetch baby')

//create input in a new div
const text = document.createElement('input')
const div = document.createElement('div')
body.appendChild(div)
div.appendChild(text)
text.type = 'text'
text.classList.add("nameInput")
const myinput = document.querySelector('.nameInput');

//Create select
let myParent = document.body;

//Create array of options to be added
let array = ["BE","FR","US","JP","ES"];

//Create and append select list
let selectList = document.createElement("select");
selectList.id = "mySelect";

myParent.appendChild(selectList);

//Create and append the options
for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}


// End of the setup

const country = document.getElementById("mySelect")
button.addEventListener('click', () => {
    let myname = myinput.value
    let country_id = country.value;

    fetch('https://api.agify.io/?name=' + myname + '&country_id='+ country_id)

        .then(response => {return response.json()})
        .then(data => {
            const div = document.createElement('div')
            body.appendChild (div)
    //let convert a JS value into a JSON string
            const convert = JSON.stringify(data)
            div.textContent = (convert)
            console.log(convert)
        })
        .then (() => {
            if (country.value === "BE") {
              country_id = "BE";
            } else if (country.value === "FR") {
              country_id = "FR";
            } else if (country.value === "US") {
              country_id = "US";
            } else if (country.value === "JP") {
              country_id = "JP";
            } else if (country.value === "ES") {
              country_id = "ES";
            }
          })
        .catch(error => {
          console.log('There was an error!', error)
        })
    })



    