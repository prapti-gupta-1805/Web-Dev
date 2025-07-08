let btn = document.querySelector('button')
let ul = document.querySelector('ul')
let inp = document.querySelector('input')

btn.addEventListener('click', addToList);

function addToList() {
    let li = document.createElement('li')
    li.innerText = inp.value
    ul.append(li)

};