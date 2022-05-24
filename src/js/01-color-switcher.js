const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
  };
  let interval = null;
  refs.stopBtn.disabled = true;
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  refs.startBtn.addEventListener('click', onStartBtnClick);
  
  function onStartBtnClick() {
    getBodyColor();
    interval = setInterval(getBodyColor, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }
  
  refs.stopBtn.addEventListener('click', onStopBtnClick);
  
  function onStopBtnClick() {
    clearInterval(interval);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  }
  
  function getBodyColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
