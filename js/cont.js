let csillagUzenetSor = document.querySelector("small#vallakozasNevUzenet");
csillagUzenetSor.style.color = "red";

let csillag = document.querySelectorAll("span.csillagIndex");
for (let i = 0; i < csillag.length; i++) {
    csillag[i].style.color = "red"
}

// Űrlap kezeléséhez szükséges információs üzenet clikkelésre törlés.
let kezelesInfoButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let  kezelesInfoFunction = function(ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < kezelesInfoButtons.length; i++) {
    kezelesInfoButtons[i].addEventListener("click", kezelesInfoFunction);
}

// Űrlap kiolvasása.
let regisztracioUrlap = document.querySelector("form#regisztracioUrlap");
regisztracioUrlap.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let inputs = this.querySelectorAll("input");
    let regisztracioAdat = {};
    for (let i = 0; i < inputs.length; i++) {
        regisztracioAdat[inputs[i].name] = inputs[i].value;
    }
    
    console.log(regisztracioAdat);
});