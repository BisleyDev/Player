'use strict';
export const radioPlayerInit = () => {
    

    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItems = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    
    const audio = new Audio();
    audio.type = 'audio/aac';        
    radioStop.disabled = true;


    const changeRadio = event => {
        const target = event.target;
        audio.src = target.dataset.radioStantion;
        radioStop.disabled = false;

        const parrent = target.closest('.radio-item');
        radioItems.forEach(item => item.classList.remove('select'));        
        parrent.classList.add('select');

        changeNameImgRadio(parrent);
        checkPlayRadio();
    };

    const checkPlayRadio = () => {
        if (audio.paused) {
            radio.classList.add('play');
            radioStop.classList.remove('fa-stop');
            radioStop.classList.add('fa-play');            
            audio.play();
            console.dir(audio);
        } else {
            radio.classList.remove('play');
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-stop');
            audio.pause();
        }
    };

    const changeNameImgRadio = parrent => {
        const radioName = parrent.querySelector('.radio-name').textContent;
        const radioUrlImg= parrent.querySelector('.radio-img').src;

        radioHeaderBig.textContent = radioName;
        radioCoverImg.src = radioUrlImg;
    };

    radioNavigation.addEventListener('change', changeRadio);
    radioStop.addEventListener('click', checkPlayRadio);
};