/**
 * Counter with Loader
 */

function habigibi(startvalue,currentvalue){
    return (currentvalue * 100) / startvalue
}

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const counter_result = document.querySelector('#counter-result');
const input_count = document.querySelector('#input_count');
const loader = document.querySelector('.loader')


let clear;
start.addEventListener('click', () =>{

    let counter =  input_count.value;
    //counter_result.innerHTML = input_count.value;
    clear = setInterval(() =>{
        counter_result.innerHTML = counter; 
        let width = habigibi(input_count.value,counter);
        loader.style.width = `${width}%`;
        if(width  >= 60 && width <= 100){
            loader.style.backgroundColor = 'rgb(40, 185, 4)'
        }else if(width  >= 30 && width < 60){
            loader.style.backgroundColor = 'rgb(112, 202, 89)'
        } else if(width < 30){
            loader.style.backgroundColor = 'rgb(218, 72, 72)'
        }
        
        if(counter == 0){
            clearInterval(clear)
        }
        counter--;
    },1000)
})

stop.addEventListener('click', function(){
    clearInterval(clear)
})

reset.addEventListener('click', function(){
    clearInterval(clear)
    counter_result.innerHTML = counter = 0;
})


