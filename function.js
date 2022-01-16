

function ampa(gonta){

  if(gonta < 10){
    return '0' + gonta;
  }else{
    return gonta
  }
};

function mdy(index){

  const day = ['Sun','Mon','Tues','wed','Thur','Fri','Satu'];
  return day[index];

}

function parsan(index,idex){
  return (idex * 100) / index;
};


        function gpaGradCal(marks){
          let gpa;
          let grade;
          let gpaGraColor;
 
          if(marks >= 0 && marks < 33){
            gpa = 0;
            grade = 'F';
            gpaGraColor = 'danger'
        
          }else if(marks >= 33 && marks < 40){
            gpa = 1;
            grade = 'D';
            gpaGraColor = 'warning'
        
          }else if(marks >= 40 && marks < 50){
            gpa = 2;
            grade = 'C';
            gpaGraColor = 'secondary'
        
          }else if(marks >= 50 && marks < 60){
            gpa = 3;
            grade = 'B';
            gpaGraColor = 'info'
        
          }else if(marks >= 60 && marks < 70){
            gpa = 3.5;
            grade = 'A-';
            gpaGraColor = 'primary'
        
          }else if(marks >= 70 && marks < 80){
            gpa = 4;
            grade = 'A';
            gpaGraColor = 'info'
            
          }else if(marks >= 80 && marks <= 100){
            gpa = 5;
            grade = 'A+';
            gpaGraColor = 'success'
          }
        return {
          gpao : gpa,
          gradeo : grade,
          gpaGraColoro : gpaGraColor
        }
        
        };
        function cgpacal(bn,en,math,rel,scie){
          let cgpa;
        let fainalGrade;

        let totalCgpa = gpaGradCal(bn).gpao + gpaGradCal(en).gpao + gpaGradCal(math).gpao + gpaGradCal(rel).gpao + gpaGradCal(scie).gpao;
          
        cgpa = totalCgpa / 5;

        if( bn <33 || en <33 || math <33 || rel <33 || scie <33){
            fainalGrade = 'F';
        }else if( cgpa >= 0 && cgpa < 1 ){
            fainalGrade = 'F'
        }else if( cgpa >= 1 && cgpa < 2 ){
            fainalGrade = 'D'
        }else if( cgpa >= 2 && cgpa < 3 ){
            fainalGrade = 'C'
        }else if( cgpa >= 3 && cgpa < 3.5 ){
            fainalGrade = 'B'
        }else if( cgpa >= 3.5 && cgpa < 4 ){
            fainalGrade = 'A-'
        }else if( cgpa >= 4 && cgpa < 5 ){
            fainalGrade = 'A'
        }else if( cgpa == 5){
            fainalGrade = 'A+'
        }

        return {
            fainalCgpa : fainalGrade == 'F' ? 'Faidel' : cgpa,
            fainalGrade : fainalGrade,
        }
        }