const elem = document.getElementsByClassName('ele')

function ele(e, c){
    for (let i = 0; i < elem.length; i++) {
        const element = elem[i];
        element.style.display = 'none'
    }
    elem[e].style.display = 'block'
}

ele(0, elem.length)