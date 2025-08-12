const timeEl = document.getElementById('time')
const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const resetBtn = document.getElementById('reset')

let seconds = 0
let timer = null

const updateDisplay = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0')
    const min = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    timeEl.textContent = `${hrs}:${min}:${secs}`
}

const start = () => {
    if (timer !== null) return
    timer = setInterval(() => {
        seconds++
        updateDisplay()
    }, 1000)
}

const pause = () => {
    clearInterval(timer)
    timer = null
}

const reset = () => {
    pause()
    seconds = 0
    updateDisplay()
}

playBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
resetBtn.addEventListener('click', reset)

updateDisplay()
