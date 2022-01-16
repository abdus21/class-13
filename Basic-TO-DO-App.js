
/**
 * Basic TO-DO App
 */

const input = document.querySelector('#input');
const ddd = document.querySelector('#add');
const list = document.querySelector('#list');


ddd.addEventListener('click',function (){

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = input.value;
    list.appendChild(li)
    //list.innerHTML += `<li class="list-group-item">${input.value}</li>`
    input.value = '';
})