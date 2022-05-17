document.querySelector('.one').style.visibility='hidden';
document.querySelector('.two').style.visibility='hidden';
document.querySelector('.three').style.visibility='hidden';
document.querySelector('.four').style.visibility='hidden';

document.querySelector('.image1').style.opacity='0.3';
document.querySelector('.image2').style.opacity='0.3';
document.querySelector('.image3').style.opacity='0.3';
document.querySelector('.image4').style.opacity='0.3';
function show1(){
    document.querySelector('.one').style.visibility='visible';
    document.querySelector('.image1').style.opacity='1';
}
function out1(){
    document.querySelector('.one').style.visibility='hidden';
    document.querySelector('.image1').style.opacity='0.3';
}

function show2(){
    document.querySelector('.two').style.visibility='visible';
    document.querySelector('.image2').style.opacity='1';
}
function out2(){
    document.querySelector('.two').style.visibility='hidden';
    document.querySelector('.image2').style.opacity='0.3';
}

function show3(){
    document.querySelector('.three').style.visibility='visible';
    document.querySelector('.image3').style.opacity='1';
}
function out3(){
    document.querySelector('.three').style.visibility='hidden';
    document.querySelector('.image3').style.opacity='0.3';
}

function show4(){
    document.querySelector('.four').style.visibility='visible';
    document.querySelector('.image4').style.opacity='1';
}
function out4(){
    document.querySelector('.four').style.visibility='hidden';
    document.querySelector('.image4').style.opacity='0.3';
}



function validate(){
    let x = document.form1.email.value;
    let y = document.form1.pass.value;

    if(x=='chandengle@nimet.gov.ng' && y=='password'){
        return true
    }
    else if(x=="" || y==""){
        alert('PLEASE COMPLETE THE FORM!!!');
        return false
    }
    else{
        alert('INCORRECT EMAIL ADDRESS AND PASSWORD!!!');
        return false
    }
}

function validate2(){
    let a= document.form2.january.value;
    let b= document.form2.february.value;
    let c= document.form2.march.value;
    let d= document.form2.april.value;

document.write(a + " " +  b + " " + c + " " + d);
}