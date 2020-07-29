'use strict';

export const videoPlayerInit = () => {

	const videoPlayer = document.querySelector('.video-player');
	const videoButtonPlay = document.querySelector('.video-button__play');
	const videoButtonStop= document.querySelector('.video-button__stop');
	const videoTimePassed = document.querySelector('.video-time__passed');
	const videoProgress = document.querySelector('.video-progress');
	const videoTimeTotal = document.querySelector('.video-time__total');

	function toggleIcon() {
		if (videoPlayer.paused) {
			videoButtonPlay.classList.remove('fa-pause');
			videoButtonPlay.classList.add('fa-play');
		} else {
			videoButtonPlay.classList.add('fa-pause');
			videoButtonPlay.classList.remove('fa-play');
		}
	}
	
	function tooglePlay() {
		if (videoPlayer.paused) {
			videoPlayer.play();
		} else {
			videoPlayer.pause();
		}
		toggleIcon();
	}

	const stopPlay = () => {
		videoPlayer.pause();
		videoPlayer.currentTime = 0;
	};

	const checkIsZero = time => time < 10 ? time = '0' + time : time;

	const updateTime = () => {
		const currentTime = videoPlayer.currentTime;		
		const duration = videoPlayer.duration;

		videoProgress.value = (currentTime / duration) * 100;

		const timing = (time) => {
			let minutes = Math.floor(time / 60);
			let seconds = Math.floor(time % 60);

			return `${checkIsZero(minutes)}:${checkIsZero(seconds)}`;
		};

		videoTimePassed.textContent = timing(currentTime);
		videoTimeTotal.textContent = timing(duration);		
	};

	const changeVideoProgress = () => {
		const duration = videoPlayer.duration;
		const value = videoProgress.value;

		videoPlayer.currentTime = (value / duration) * 100;
	};
	


	videoPlayer.addEventListener('click', tooglePlay);
	videoPlayer.addEventListener('timeupdate', updateTime);
	videoButtonPlay.addEventListener('click', tooglePlay);
	videoButtonStop.addEventListener('click', stopPlay);
	videoProgress.addEventListener('change', changeVideoProgress);
	// videoPlayer.addEventListener('play', tooglePlay);
	// videoPlayer.addEventListener('pause', tooglePlay);

};