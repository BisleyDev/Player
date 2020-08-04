'use strict';

import { videoPlayerInit } from './videoPlayer.js';
import { radioPlayerInit } from './radioPlayer.js';
import { audioPlayerInit } from './audioPlayer.js';


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const title = document.querySelector('.temp');


const deleteActiveBlock = () => {
   title.style.display = 'none';
   playerBtn.forEach(item => item.classList.remove('active'));
   playerBlock.forEach(item => item.classList.remove('active'));
};

playerBtn.forEach((btn, key) => {
   btn.addEventListener('click', () => {
      deleteActiveBlock();
      btn.classList.add('active');
      playerBlock[key].classList.add('active');
   });
});


videoPlayerInit();
audioPlayerInit();
radioPlayerInit();