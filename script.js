function changetext() {
    const btn=document.getElementById("btn");
    if (btn.dataset.click=="0"){
        btn.innerText="New Texto";
        btn.dataset.click="1";
    }else{
        btn.innerText="Texto inicial";
        btn.dataset.click="0";
    }
}
function showemail(){
    let subscribe=document.getElementById("subscribe");
    let email=document.getElementById("email");
    let label=document.getElementsByTagName("label")[1];
    if (subscribe.checked){
        email.style.visibility="visible";
        label.style.visibility="visible";
    }else{
        email.style.visibility="hidden";
        label.style.visibility="hidden";
    }
}
function checkselection(){
    let favberry=document.getElementsByTagName("favcherry");
    let correct=false;
    let selection;
    for(i=0;i<favberry.length;i++){
        if (favberry[i].checked){
            correct=true;
            selection=favberry[i];
        }
    }
    let warning=document.getElementById("warning");
    if(!correct){
        
        warning.innerHTML="Please,select a berry";
    }else{
        warning.innerHTML="Thanks for your selection";
        let fieldset2=document.querySelector('fieldset:nth-of-type(2)');
        if(selection.value=="strawberry"){
            fieldset2.style.backgroundColor="pink";
        }else if(selection.value=="blueberry"){
            fieldset2.style.backgroundColor="cyan";
        }else if(selection.value=="blackberry"){
            fieldset2.style.backgroundColor="grey";
        }


    }
    
}
function checkNumber(){
    let number=document.querySelector('#number');
    if(isNaN(number.value)){
        alert("The input is not a number");
    }else{
        alert("The input is a number");
    }
}