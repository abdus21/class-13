
const clock = document.getElementById('clock');

clock.setAttribute('class', 'text-center');

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
            
            clock.innerHTML = ` <p class="second">${ampa(second)}</p><p style="color:red">${ampa(h)}:${ampa(minit)}</p><p style="display: inline-block;" class="possitionig">${date.getMonth() + 1}/</p><p style="display: inline-block;" class="possitionig">${date.getDate()}/</p><p style="display: inline-block;" class="possitionig">${date.getFullYear()}</p><p style="display: inline-block; font-size: 18px;margin-right:80px;margin-bottum:10px;position: relative;">${mdy(date.getDay())}</p> <h6 class="clockh6">${hours >= 12 ? 'PM' : 'AM'}</h6>`;
        },1000);