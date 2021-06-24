var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.className = "cbut";
    span.appendChild(text);
    list[i].appendChild(span);
}
var cbut = document.getElementsByClassName('cbut');
for (var i = 0; i < cbut.length; i++) {
    cbut[i].onclick = function() {
        var parent = this.parentElement;
        parent.remove();
    }
}