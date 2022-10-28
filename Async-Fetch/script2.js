const body = document.querySelector('body');
const button = document.createElement('button');
//create button
body.appendChild(button)
button.innerText=('Click me to fetch baby')

//create input in a new div
const text = document.createElement('input')
const div = document.createElement('div')
body.appendChild (div)
div.appendChild(text)
text.type = 'text'
text.classList.add("nameInput")
const myinput = document.querySelector('.nameInput');

// End of the setup

button.addEventListener('click', () => {
    let myname = myinput.value

    fetch('https://api.agify.io/?name=' + myname)

        .then(response => {return response.json()})
        .then(data => {
            const div = document.createElement('div')
            body.appendChild (div)
 //let convert a JS value into a JSON string
            const convert = JSON.stringify(data)
            div.textContent = (convert)
            console.log(convert)
        })
        .catch(error => {
          console.log('There was an error!', error)
        })
    })