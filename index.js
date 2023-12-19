const url = new URL(location.href)

const countdownTitle = url.searchParams.get('title')
const unixTime = url.searchParams.get('unixtime')
const date = new Date(unixTime * 1000)

const countDownHandle = () => {
    const timeDiff = date.getTime() - Date.now()

    const hour = (Math.floor(timeDiff / 1000 / 60 / 60)).toString().padStart(2, '0')
    const min = (Math.floor(timeDiff / 1000 / 60) % 60).toString().padStart(2, '0')
    const sec = (Math.floor(timeDiff / 1000) % 60).toString().padStart(2, '0')

    document.querySelector('#countdownHours2').textContent = hour[0]
    document.querySelector('#countdownHours1').textContent = hour[1]
    document.querySelector('#countdownMinutes2').textContent = min[0]
    document.querySelector('#countdownMinutes1').textContent = min[1]
    document.querySelector('#countdownSeconds2').textContent = sec[0]
    document.querySelector('#countdownSeconds1').textContent = sec[1]

}

document.addEventListener('DOMContentLoaded', () => {
    countDownHandle()
    document.querySelector('.countdownTitle').textContent = countdownTitle
    setTimeout(() => {
        setInterval(countDownHandle, 1000);
    }, 1000 - new Date().getMilliseconds());
})