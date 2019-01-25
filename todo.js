var knop = document.querySelector('#todoadd');
var invoerveld = document.querySelector('#taakv');

knop.onclick = function() {
    alert('nieuwe taak: '+invoerveld.value)
}