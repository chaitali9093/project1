let navbar=document.getElementById("navbar");

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    // console.log(document.documentElement.scrollTop);

    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbar.style.padding = "10px 100px";
        navbar.style.backgroundColor="black"
    }
    else{
        navbar.style.padding = "30px 100px";
        navbar.style.backgroundColor="aquamarine"
    }
}