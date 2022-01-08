

const clock = document.getElementById('clock');

clock.setAttribute('class', 'text-center')


    
        setInterval(function (){

            let date = new Date();
            let hours = date.getHours();
            let minit = date.getMinutes();
            let second = date.getSeconds(); 
            let h = '';
            if(hours == 0){
                h = 12;
            }else if(hours > 0 && hours <= 12){
                h = hours 
            }else{
                h = hours-12
            }

            clock.innerHTML = `${ampa(h)}:${ampa(minit)}:${ampa(second)}:${hours >= 12 ? 'PM' : 'AM'}`;
        },1000);




















const form = document.getElementById('form');

const marriage_check = document.getElementById('marriage_check')
const marriage_result = document.getElementById('marriage_result');


const namee = form.querySelector('input[placeholder="Name"]');

const nameResult = namee.nextElementSibling;

const Year = form.querySelector('input[placeholder="Year"]');



marriage_check.addEventListener('click', () =>{


    let gender = form.querySelector('input[type="radio"]:checked');

    if(namee.value == '' || Year.value == '' || gender.value == ''){
        marriage_result.innerHTML = '<p class="alert-danger p-2">All fields are required</p>'
    }else{
        marriage_result.innerHTML = agecal2(namee.value,Year.value,gender.value)
    }

    setTimeout(function (){
        marriage_result.innerHTML = '';
    },3000);

    console.log(gender.value)
    namee.value = '';
    Year.value = '';
    gender.value = '';
})

namee.addEventListener('keyup', () =>{
    nameResult.innerHTML = '';
    if(namee.value == ''){
        namee.nextElementSibling.innerHTML = '<p>plz set year</p>';
        namee.nextElementSibling.setAttribute('class', 'text-black')
    }else if(/^[a-zA-Z ]*$/.test(namee.value) == false){
        namee.nextElementSibling.innerHTML = '<p>number not allow</p>';

        namee.nextElementSibling.setAttribute('class', 'text-danger')
    }
    else{
        namee.nextElementSibling.innerHTML = '';
    };
})


Year.addEventListener('keyup', () =>{

    if(Year.value == ''){
        Year.nextElementSibling.innerHTML = '<p>plz set yaer</p>'
 }else if(/^[0-9]*$/.test(Year.value) == false){
    Year.nextElementSibling.innerHTML = '<p style="color:red">character not allow</p>'
 } else{
    Year.nextElementSibling.innerHTML='';
    
 };
})




/**
 * 
 */



