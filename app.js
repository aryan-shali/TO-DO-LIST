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
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('check-ele');
    }
}, false);

function addb() {
    var inp = document.getElementById('input').value;


    var newitem = document.createElement('li');
    var newtxt = document.createTextNode(inp)
    newitem.appendChild(newtxt);
    if (inp === '') {
        alert("write something")
    } else {
        document.getElementById('uu').appendChild(newitem);

    }
    document.getElementById('input').value = "";

    newitem.id = "ll";
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "cbut";
    span.appendChild(text);
    newitem.appendChild(span);

    for (var i = 0; i < cbut.length; i++) {
        cbut[i].onclick = function() {
            var div1 = this.parentElement;
            div1.remove();

        }
    }
}