var knop = document.querySelector('#todoadd');
var invoerveld = document.querySelector('#taakv');
var lijst = document.querySelector('#taaklijst');

var taken;

var takenUitLocalStorage = localStorage.getItem('takenLijst');
if(takenUitLocalStorage){
    taken = JSON.parse(takenUitLocalStorage);
    taakInladen()
}
else{
    taken = [];
}

knop.onclick = function () {
    taakToevoegen(invoerveld.value, false);
}

function taakToevoegen(taakNaam, isGedaan) {
    taken.push({ taak: taakNaam, gedaan: isGedaan });
    takenLaden();
}

function takenLaden() {
    // UL in html leeg maken
    lijst.innerHTML = '';

    // Voor elke taak: taakInladen()
    taken.forEach(taakInladen);

    // Opslaan in localStorage
    localStorage.setItem('takenLijst', JSON.stringify(taken));
}

function taakInladen(taak, index) {
    // LI aanmaken 
    var nieuweLi = document.createElement("li");
    if(taak.gedaan) { 
        nieuweLi.classList.add('checked')
    }
    
    // Label aanmaken
    var nieuweLabel = document.createElement("label"); 

    // Checkbox aanmaken
    var nieuweCheckbox = document.createElement("input");
    nieuweCheckbox.type = 'checkbox';
    if (taak.gedaan) {
        nieuweCheckbox.checked = 'checked';
    }
    nieuweCheckbox.onchange = function() {
        taken[index].gedaan = true;
        takenLaden();
    }

    // Taak tekst aanmaken
    nieuweTekst = document.createTextNode(taak.taak);

    // Checkbox en tekst toevoegen aan de label
    nieuweLabel.appendChild(nieuweCheckbox);
    nieuweLabel.appendChild(nieuweTekst);

    // Label toevoegen aan de LI
    nieuweLi.appendChild(nieuweLabel);
    
    // LI toevoegen aan de UL
    lijst.appendChild(nieuweLi)
}