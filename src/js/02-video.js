import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const handleTimeUpdate = (data) => {
  const currentTime = data.seconds;
  localStorage.setItem("videoplayer-current-time", currentTime);
};

function getterDataLocalStorage() {
  const dataFromLocalStorage = localStorage.getItem('videoplayer-current-time');

  if (dataFromLocalStorage) {
    return dataFromLocalStorage;
  }
  return 0;
}
player.setCurrentTime(getterDataLocalStorage());
player.on('timeupdate', throttle(handleTimeUpdate, 1000));
