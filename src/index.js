import { refs, colors} from  './js/constans'

const { $body, $startBtn, $stopBtn} = refs

$startBtn.addEventListener('click', handleStart)
$stopBtn.addEventListener('click', handleStop)

let intervalId = null

function handleStart({target}) {
    target.disabled = true
    intervalId = setInterval(bodyColor, 1000)
}

function handleStop() {
    $startBtn.disabled = false
    clearInterval(intervalId)
}

function bodyColor() {
    const backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    $body.style.backgroundColor = backgroundColor
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };