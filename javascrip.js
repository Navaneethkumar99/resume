let navbar = document.querySelector("#bars");
let clos = document.querySelector("#close");

const open = () => {

    document.getElementById("navbar").style.display="block";
    document.getElementById("bars").style.display="none";
    document.getElementById("close").style.display="block";

}

const close = () =>{

    document.getElementById("navbar").style.display="none";
    document.getElementById("bars").style.display="block";
    document.getElementById("close").style.display="none";
}
navbar.addEventListener("click", () => open())

clos.addEventListener("click", () => close())