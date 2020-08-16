let csillagUzenetSor = document.querySelector("small#bejelentoNyilvszama");
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

// A munkaTipus kiválasztási lehetőségeinek a beállítása.
let munkaTipusok = [
    {valtozo: "alappont", opcio: "Alappont pótlásával, áthelyezésével összefüggő"},
    {valtozo: "allam", opcio: "Államhatár változással összefüggő"},
    {valtozo: "kozig", opcio: "Közigazgatási és/vagy fekvés határ változással összefüggő"},
    {valtozo: "telekalakitas", opcio: "Telekalakítással összefüggő"},    
    {valtozo: "kisajatitas", opcio: "Kisajátítással összefüggő"},
    {valtozo: "jogokTenyek", opcio: "Jogok bejegyzésével, tények feljegyzésével összefüggő"},
    {valtozo: "epulet", opcio: "Építmények feltüntetésével, változásával, önálló ingatlanná alakításával összefüggő"},
    {valtozo: "tarsashazAlaprajz", opcio: "Társas, vagy szövetkezeti ház alaprajzával összefüggő"},
    {valtozo: "muvelesiAg", opcio: "Művelési ág, minőségi osztály változással összefüggő"},
    {valtozo: "eoi", opcio: "Egyéb önálló ingatlanok tulajdoni viszonyok megváltoztatásával összefüggő"},
    {valtozo: "kituzes", opcio: "Kitűzéssel összefüggő"},
    {valtozo: "hasznalati", opcio: "Használati megosztással összefüggő"},
    {valtozo: "tenyekJogiJelleg", opcio: "Tények és jogi jellegek feljegyzésével, törlésével összefüggő"},
    {valtozo: "vezetekElozetes", opcio: "Vezetékjog előzetes engedélyezésével összefüggő"},
    {valtozo: "igazsagugyiSzak", opcio: "Igazságügyi földmérő szakvéleménnyel összefüggő"}
];
let tipusSelect = document.querySelector("#munkaTipus");
let t = 0;
while (t < munkaTipusok.length) {
    let option = document.createElement("option");
    option.value = munkaTipusok[t].valtozo;
    option.innerHTML = munkaTipusok[t].opcio;
    if (munkaTipusok[t].valtozo == "telekalakitas") {
        option.selected = true;
    }
    tipusSelect.appendChild(option);
    t++;
};

// A munkaFormatum kiválasztási lehetőségeinek a beállítása.
let formatumok = [
    {valtozo: "DAT", opcio: "DAT"},
    {valtozo: "ITR", opcio: "ITR"}
];
let formatumSelect = document.querySelector("#munkaFormatum");
let f = 0;
while (f < formatumok.length) {
    let option = document.createElement("option");
    option.value = formatumok[f].valtozo;
    option.innerHTML = formatumok[f].opcio;
    formatumSelect.appendChild(option);
    f++;
};


// Űrlap kiolvasása.
let kooUrlap = document.querySelector("#kooUrlap");
kooUrlap.addEventListener("submit", function(ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    console.log(inputs);
    let selects = this.querySelectorAll("select");
    let kooAdat = {};

    for (let i = 0; i < inputs.length; i++) {
        kooAdat[inputs[i].name] = inputs[i].value;
    }
    for (let i = 0; i < selects.length; i++) {
        kooAdat[selects[i].name] = selects[i].value;
    }
    console.log(kooAdat);
});