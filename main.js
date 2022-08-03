let photo = document.querySelector(".container .content img");
let container = document.querySelector(".container");
container.style.backgroundColor = localStorage.getItem("color");
photo.src = localStorage.getItem("src");
// way one 
// function changePhoto(src) {
//     photo.src = src;
// }


document.addEventListener("click", function(e){
    if(e.target.className == "option"){
        // set the src of the phone and store it in the local storage 
        photo.src = e.target.src;
        localStorage.setItem("src",e.target.src);
        // set the color of container and store it in the local storge
        localStorage.setItem("color", e.target.getAttribute("color"));
        container.style.backgroundColor = localStorage.getItem("color");
    }
}
)