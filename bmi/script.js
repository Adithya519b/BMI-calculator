let height=document.querySelector("#height");
let weight=document.querySelector("#weight");
let range=document.querySelector("#range");
let show=document.querySelector("#show");
let find=document.querySelector("#find");
 find.addEventListener("click",()=>{
    h=height.value;
    w=weight.value;
    bmi=(w/(h*h)).toFixed(2);
    if(bmi<=18.4){
        range.value=bmi;
        show.textContent=`${bmi}:underWeight`;
        show.style.backgroundColor="skyblue";

    }
    else if(bmi>=18.5 && bmi<=24.9){
         range.value=bmi;
        show.textContent=`${bmi}:Normel`;
        show.style.backgroundColor="lightgreen";

    }
    else if(bmi>=25 && bmi<=39.9){
         range.value=bmi;
        show.textContent=`${bmi}:Over-weight`;
        show.style.backgroundColor="orange";


    }
    else if(bmi>=40.0){
         range.value=bmi;
        show.textContent=`${bmi}:Obese`;
        show.style.backgroundColor="lightred";

    }
    else {
         range.value=bmi;
        show.textContent=`${bmi}:obNormel`;
        show.style.backgroundColor="red";

    }
 })