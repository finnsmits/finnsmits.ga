var knop = document.querySelector('#todoadd');
var invoerveld = document.querySelector('#taakv');
var lijst = document.querySelector('#taaklijst');

knop.onclick = function () {
    alert('nieuwe taak: ' + invoerveld.value)
}

var taaken = [
    { taak: 'Stofzuigen', gedaan: false },
    { taak: 'Vaat', gedaan: true }
];


taaken.forEach(taak => {
    // LI aanmaken 
    var nieuweLi = document.createElement("li"); 
    
    // Label aanmaken
    var nieuweLabel = document.createElement("label"); 

    // Checkbox aanmaken
    var nieuweCheckbox = document.createElement("input");
    nieuweCheckbox.type = 'checkbox';
    if (taak.gedaan) {
        nieuweCheckbox.checked = 'checked';
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
});