let result=document.getElementById("inputtext");

let calculate=(number)=>{
    result.value+=number; 
}

let Result=() =>{
    try{
result.value=eval(result.value)
    }
    catch(err){
        alert("enter a valid input");
    }
}

function cal(){
    result.value= "0"
}

function del(){
        result.value=result.value.slice(0,-1);
}


var swiper = new swiper(".swiper", {
    grabCurse: true, 
    speed: 500,
    effect: "slide",
    loop: true,
    Sousewheel: {
        invert: false,
        sensitivity: 1,
    },
});


document.querySelector("body > div.cs_moving_wrap.background-filled.text-uppercase.text-white.d-flex.align-items-center")

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  
 setInterval(() => {
    d = new Date();//object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2;//converting current time
    min_rotation = 6 * min;
    sec_rotation  = 6 * sec;

    hour.style.transform = rotation($,{hr_rotation}.deg) ;
    minute.style.transform = rotation($,{min_rotation}.deg) ;
    second.style.transform = rotation($,{min_rotation}.deg) ;
 }, 1000);