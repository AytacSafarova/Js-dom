let input = document.querySelector('input')
let addBtn = document.querySelector('button')
let ul = document.querySelector('ul')

addBtn.addEventListener('click', addList)

function addList(e) {
    e.preventDefault()
    ul.innerHTML += `<li class='red'>${input.value}</li>`
    input.value = ''
    // let li =document.createElement('li')
    // li.innerText=input.value
    // let p =document.createElement('p')
    // p.innerText= 'text'

    // ul.append(li,p)
    // li.classList.add('red')
}