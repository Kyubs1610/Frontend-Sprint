// Create a <button>, when clicked becode rules are loaded with a fetch('becode.json'), 
// then dynamically generate a <ul> list containing each rule in a <li>.

const body = document.querySelector('body');
const button = document.createElement('button');
body.appendChild(button)
button.innerText=('Click me please')
const ul = document.createElement ('ul');
body.appendChild(ul);

button.addEventListener('click', () => { 
    fetch('becode.json')
        .then(response => response.json())
        // convert the file in JSON
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let li = document.createElement("li");
                li.innerHTML = data[i];
                ul.appendChild(li);
              }  
        })
    .catch(error => {
      console.log('There was an error!', error)
    })

})

