import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  const delay = Number(e.currentTarget.delay.value);
  const delayStep = Number(e.currentTarget.step.value);
  const amount = Number(e.currentTarget.amount.value);

  let newDelay = delay;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, newDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    newDelay += delayStep;
  }
  e.currentTarget.reset();
}
