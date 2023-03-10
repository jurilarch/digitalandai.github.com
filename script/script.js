function reserve(dom) {
    var coffee = dom.parentNode.getElementsByTagName('h2')[0].innerText
    var coffeeImg = dom.parentNode.getElementsByTagName('img')[0].src

    var className = dom.parentNode.className.replace('block ', '')

    var resdom = document.getElementsByClassName('appointmentform')[0];
    resdom.getElementsByTagName('img')[0].src = coffeeImg
    resdom.getElementsByTagName('img')[0].src

    resdom.getElementsByClassName('submit')[0].setAttribute('class', 'submit')
    resdom.getElementsByClassName('submit')[0].classList.add(className)

    document.getElementById('inputCoffee').value = coffee

    showOverlay()
}

function submitDate(dom) {
    var coffee = document.getElementById('inputCoffee').value;
    var date = document.getElementById('inputDate').value;
    var name = document.getElementById('inputName').value;
    var body = encodeURIComponent('Hi!\n\nI want to drink ' + coffee + ' with you on the ' + date + '.\nXOXO, much luv ' + name + ' <3\n\n P.S. Bussi, baba');

    window.open('mailto:reserve@digitalandai.coffee?subject=I%20need%20some%20coffee&body=' + body);
}

function hideOverlay() {
    for (const overlay of document.getElementsByClassName('overlay')) {
        overlay.style.display = 'none';
    }
    for (const overlay of document.getElementsByClassName('appointmentform')) {
        overlay.style.display = 'none';
    }
}

function showOverlay() {
    for (const overlay of document.getElementsByClassName('overlay')) {
        overlay.style.display = 'block';
    }
    for (const overlay of document.getElementsByClassName('appointmentform')) {
        overlay.style.display = 'flex';
    }
}


