import './assets/src/style.scss'

const querySelector = {
  minutesElement: document.querySelector('#minutes'),
  secondsElement: document.querySelector('#seconds'),
  buttonStart: document.querySelector('#start')
}

const initial = {
  minutesElement: querySelector.minutesElement,
  secondsElement: querySelector.secondsElement,
  minutesValue: querySelector.minutesElement.innerHTML * 60,
  secondsValue: querySelector.secondsElement.innerHTML,
  isStart: Boolean
}

const { buttonStart } = querySelector

let onClicked = (event) => {
  event.preventDefault()
  initial.isStart ^= true // Toggle true or false

  if (initial.isStart) {
    textStateButton(event.target, 'Pause')
    decreaseTimer();
  } else {
    textStateButton(event.target, 'Start')
    pauseTimer(event.target)
  }
}

const decreaseTimming = setInterval(() => {
  
}, interval);

let decreaseTimer = () => {
  let { minutesValue, secondsValue } = initial
  let timer = minutesValue, minutes, seconds;

  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    if (--timer < 0) {
      timer = minutesValue
    }

    initial.minutesElement = timer

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(seconds);


  }, 1000);
}

let pauseTimer = () => {
  clearInterval(decreaseTimer)
}


let textStateButton = (document, text) => document.innerHTML = text
buttonStart.addEventListener('click', (event) => onClicked(event))





// setInterval(() => {
//   initial.minutesValue == initial.minutesValue--
// }, 1000);





















// const query = {
//   minutesElement: document.querySelector('#minutes'),
//   secondsElement: document.querySelector('#seconds'),
// }

// const initial = {
//   minutesValue: document.querySelector('#minutes').innerHTML * 60,
//   secondsValue: document.querySelector('#seconds').innerHTML,
//   status: false
// }

// const buttons = {
//   startButton: document.querySelector('.start'),
//   pauseButton: document.querySelector('.pause')
// }
// // const buttons = document.querySelectorAll('button')

// function startTimer(duration) {
//   let timer = duration, minutes, seconds;

//     // if (stateButton) {
//     //   button.disabled = true
//     // }

//   setInterval(() => {
//     const { minutesElement, secondsElement } = query

//     minutes = parseInt(timer / 60, 10)
//     seconds = parseInt(timer % 60, 10)

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     let updateValue = {
//       minutesElement,
//       secondsElement,
//       minutesUpdated: minutes,
//       secondsUpdated: seconds
//     }



//     // updateValueFn(updateValue);

//     if (--timer < 0) {
//       timer = duration
//     }
//   }, 1000);

//   // function updateValueFn( { minutesElement, secondsElement, minutesUpdated, secondsUpdated }) {
//   //   minutesElement.innerHTML = minutesUpdated
//   //   secondsElement.innerHTML = secondsUpdated
//   // }
//   // setInterval(function () {
//   //   minutes = parseInt(timer / 60, 10);
//   //   seconds = parseInt(timer % 60, 10);

//   //   minutes = minutes < 10 ? "0" + minutes : minutes;
//   //   seconds = seconds < 10 ? "0" + seconds : seconds;

//   //   display.textContent = minutes + ":" + seconds;

//   //   if (--timer < 0) {
//   //     timer = duration;
//   //   }
//   // }, 1000);
// }

// window.onload = function () {
//   const pomodoroTimer = document.querySelector('.pomodoro-timer')
//   const { minutesValue } = initial
//   const { startButton, pauseButton } = buttons

//   startButton.addEventListener('click', () => startTimer(minutesValue))

//   // buttons.forEach((button) => {
//   //   button.addEventListener('click', () => startTimer(minutesValue))
//   // })
// };

