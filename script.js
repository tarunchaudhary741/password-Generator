console.log("working");

let slider=document.getElementById('length');
let slidervalue=document.querySelector('#slidervalue');

slider.addEventListener('input',()=>{
    slidervalue.innerHTML=slider.value;
    changestrength();
});







let form=document.getElementById('myform');
console.log(form);
let password=document.querySelector('[password]');
let length=slider.value;



    let i_upper=form.elements['i_upper'];
    let i_lower=form.elements['i_lower'];
    let i_numbers=form.elements['i_numbers'];
    let i_symbols=form.elements['i_symbols'];

    i_upper.addEventListener('change',()=>{
        changestrength();
    });
    i_lower.addEventListener('change',()=>{
        changestrength();
    });
    i_numbers.addEventListener('change',()=>{
        changestrength();
    });
    i_symbols.addEventListener('change',()=>{
        changestrength();
    });
function changestrength(){

    let strengthcolor=document.querySelector(".strength-color");
    if(i_upper.checked && i_lower.checked && i_numbers.checked && i_symbols.checked && slider.value>=8){
        strengthcolor.style.backgroundColor="green";
        strengthcolor.style.boxShadow= "0 0 20px green";
        return;
    }
    
    if((i_upper.checked || i_lower.checked) && i_numbers.checked && i_symbols.checked && slider.value>=4){
        strengthcolor.style.backgroundColor="grey";
        strengthcolor.style.boxShadow= "0 0 20px grey";
        return;
    }
    if((i_upper.checked || i_lower.checked) && (i_numbers.checked || i_symbols.checked) && slider.value>=4){
        strengthcolor.style.backgroundColor="yellow";
        strengthcolor.style.boxShadow= "0 0 20px yellow";
        return;
    }
    if(slider.value<4){
        strengthcolor.style.backgroundColor="red";
        strengthcolor.style.boxShadow= "0 0 20px red";
        return;
    }
    if((i_upper.checked || i_lower.checked || i_numbers.checked || i_symbols.checked )){
        strengthcolor.style.backgroundColor="pink";
        strengthcolor.style.boxShadow= "0 0 20px pink";
        return;
    }
    if(!(i_upper.checked) && !(i_lower.checked) && !(i_numbers.checked) && !(i_symbols.checked) ){
        strengthcolor.style.backgroundColor="rgb(221, 149, 247)";
        return;
    }
    

}


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    // let length=document.getElementById('length').value;


    length=slider.value;
    
    
    // let formdata=new FormData(form);
    // console.log(formdata);
    // let length=formdata.get('length');
    // console.log(length);
    // for(let [name,value] of formdata){
    //     console.log(name,value);
    // }
    console.log(length,i_upper.checked,i_lower.checked,i_numbers.checked,i_symbols.checked);
    password.value=x();
    
});




function x(){
let str="";
while(length>0 && (i_upper.checked||i_lower.checked||i_numbers.checked||i_symbols.checked)){
    if(i_upper.checked && length>0){
        str=str+randomcharacter();
        length--;
    }

    if(i_lower.checked && length>0){
        str=str+ randomcharacter().toLowerCase();
        length--;
    }
    if(i_numbers.checked && length>0){
        str=str+randomnum(0,9);
        length--;
    }

    if(i_symbols.checked && length>0){
        str=str+randomsymbol();
        length--;
    }
}
return str;
}


function randomnum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function randomcharacter(){
    return String.fromCharCode(randomnum(65,90));
}
let symbols='!@#$%^&*()_+-={}|:"<>?,./;[]\\';
function randomsymbol(){
    return symbols[randomnum(0,symbols.length)];
}

let copy_msg = document.querySelector("[copy-msg]");
let copy_button = document.querySelector("[copy-button]");
async function copypass(){
    try{
        await navigator.clipboard.writeText(password.value);
        copy_msg.innerText = "copied"
    }
    catch(e){
        copy_msg.innerText = "failed"
        console.log(e);
    }
    copy_msg.classList.add("active");
    setTimeout(() => {
        copy_msg.classList.remove("active");
    }, 2000);
}
copy_button.addEventListener('click',()=>{
    if(password.value) copypass();
});



