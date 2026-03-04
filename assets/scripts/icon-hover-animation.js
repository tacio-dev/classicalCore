function handleMouseEnter(){
    this.classList.add('navigator__icon--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('navigator__icon--hovered');
    document.body.id = ``;
}

function addEventListenersToIcon(){
    const iconElements = document.getElementsByClassName('navigator__icon');

    for(let index=0; index < iconElements.length; index++){
        const icon = iconElements[index];
        icon.addEventListener('mouseenter', handleMouseEnter);
        icon.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToIcon, false);