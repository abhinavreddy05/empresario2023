const elem = document.getElementsByClassName('ele')

function ele(e){
    for (let i = 0; i < 5; i++) {
        const element = elem[i];
        element.style.display = 'none'
    }
    elem[e].style.display = 'block'
}

ele(0)