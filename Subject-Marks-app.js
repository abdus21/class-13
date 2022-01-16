
/**
 * Subject Marks app
 */

const tbody = document.querySelector('#tbody');
const submit = document.querySelector('#submit');
const bn = document.querySelector('#bn');
const en = document.querySelector('#en');
const math = document.querySelector('#math');
const Religion = document.querySelector('#Religion');
const Science = document.querySelector('#Science');
const error_massege = document.querySelector('#error_massege');
const cgpa = document.querySelector('#cgpa')


submit.addEventListener('click', (e) =>{

    e.preventDefault();

    let index = 1;
    let bnvalue = bn.value;
    let envalue = en.value;
    let mathvalue = math.value;
    let Religionvalue = Religion.value;
    let Sciencevalue = Science.value;

    if(bnvalue == ''){
        bn.style.border = '1.5px solid red';
    }else{
        bn.style.border = '1.5px solid green';
    }
    if(envalue == ''){
        en.style.border = '1.5px solid red';
    }else{
        en.style.border = '1.5px solid green';
    }
    if(mathvalue == ''){
        math.style.border = '1.5px solid red';
    }else{
        math.style.border = '1.5px solid green';
    }
    if(Religionvalue == ''){
        Religion.style.border = '1.5px solid red';
    }else{
        Religion.style.border = '1.5px solid green';
    }
    if(Sciencevalue == ''){
        Science.style.border = '1.5px solid red';
    }else{
        Science.style.border = '1.5px solid green';
    }

    if(bnvalue == '' || envalue == '' || mathvalue == '' || Religionvalue == '' || Sciencevalue == ''){
        error_massege.innerHTML = `<h3 style="color:red">All fields are required</h3>`
    }else{
        error_massege.innerHTML =`<h3 style="color:green">Data stable</h3>`;
        tbody.innerHTML = `  <tr>
        <td>${index++}</td>
        <td></td>
        <td>${bnvalue}</td>
        <td class="bg-${gpaGradCal(bnvalue).gpaGraColoro}">${gpaGradCal(bnvalue).gpao}</td>
        <td class="bg-${gpaGradCal(bnvalue).gpaGraColoro}">${gpaGradCal(bnvalue).gradeo}</td>
        </tr>

        <tr>
        <td>${index++}</td>
        <td></td>
        <td>${envalue}</td>
        <td class="bg-${gpaGradCal(envalue).gpaGraColoro}">${gpaGradCal(envalue).gpao}</td>
        <td class="bg-${gpaGradCal(envalue).gpaGraColoro}">${gpaGradCal(envalue).gradeo}</td>
        </tr>

        <tr>
        <td>${index++}</td>
        <td></td>
        <td>${mathvalue}</td>
        <td class="bg-${gpaGradCal(mathvalue).gpaGraColoro}">${gpaGradCal(mathvalue).gpao}</td>
        <td class="bg-${gpaGradCal(mathvalue).gpaGraColoro}">${gpaGradCal(mathvalue).gradeo}</td>
        </tr>

        <tr>
        <td>${index++}</td>
        <td></td>
        <td>${Religionvalue}</td>
        <td class="bg-${gpaGradCal(Religionvalue).gpaGraColoro}">${gpaGradCal(Religionvalue).gpao}</td>
        <td class="bg-${gpaGradCal(Religionvalue).gpaGraColoro}">${gpaGradCal(Religionvalue).gradeo}</td>
        </tr>

        <tr>
        <td>${index++}</td>
        <td></td>
        <td>${Sciencevalue}</td>
        <td class="bg-${gpaGradCal(Sciencevalue).gpaGraColoro}">${gpaGradCal(Sciencevalue).gpao}</td>
        <td class="bg-${gpaGradCal(Sciencevalue).gpaGraColoro}">${gpaGradCal(Sciencevalue).gradeo}</td>

        </tr>
        `

        if(cgpacal(bnvalue,envalue,mathvalue,Religionvalue,Sciencevalue).fainalCgpa == 'Faidel'){
            cgpa.innerHTML = `<h4 class=" alert alert-danger">your Cgpa = ${cgpacal(bnvalue,envalue,mathvalue,Religionvalue,Sciencevalue).fainalCgpa}
        &  Fainal  Grade = ${cgpacal(bnvalue,envalue,mathvalue,Religionvalue,Sciencevalue).fainalGrade}</h4>`
        }else{
            cgpa.innerHTML = `<h4 class=" alert alert-success">your Cgpa = ${cgpacal(bnvalue,envalue,mathvalue,Religionvalue,Sciencevalue).fainalCgpa}
        &  Fainal  Grade = ${cgpacal(bnvalue,envalue,mathvalue,Religionvalue,Sciencevalue).fainalGrade}</h4>`
        }
    }
    
})