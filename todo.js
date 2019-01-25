var knop = document.querySelector('#todoadd');
var invoerveld = document.querySelector('#taakv');

knop.onclick = function() {
    alert('nieuwe taak: '+invoerveld.value)
}

var taaken = [1,2,3];
console.log(taaken)