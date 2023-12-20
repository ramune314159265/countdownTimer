const url = new URL(location.href)

const countdownTitles = {
    before: url.searchParams.get('titlebefore'),
    then: url.searchParams.get('titlethen'),
    after: url.searchParams.get('titleafter'),
}
const unixTime = url.searchParams.get('unixtime')
const date = new Date(unixTime * 1000)

const countDownHandle = () => {
    const timeDiff = Math.round((date.getTime() - Date.now()) / 1000)
    const timeDiffAbsolutize = Math.abs(timeDiff)

    const hour = (Math.floor(timeDiffAbsolutize / 60 / 60)).toString().padStart(2, '0')
    const min = (Math.floor(timeDiffAbsolutize / 60) % 60).toString().padStart(2, '0')
    const sec = (Math.floor(timeDiffAbsolutize) % 60).toString().padStart(2, '0')

    document.querySelector('#countdownHours2').textContent = hour[0]
    document.querySelector('#countdownHours1').textContent = hour[1]
    document.querySelector('#countdownMinutes2').textContent = min[0]
    document.querySelector('#countdownMinutes1').textContent = min[1]
    document.querySelector('#countdownSeconds2').textContent = sec[0]
    document.querySelector('#countdownSeconds1').textContent = sec[1]

    switch (true) {
        case (timeDiff > 0):
            document.querySelector('.countdownTitle').textContent = countdownTitles.before
            break
        case (timeDiff === 0):
            document.querySelector('.countdownTitle').textContent = countdownTitles.then
            break
        case (timeDiff < 0):
            document.querySelector('.countdownTitle').textContent = countdownTitles.after
            break
        default:
            break
    }

}

document.addEventListener('DOMContentLoaded', () => {
    countDownHandle()
    setTimeout(() => {
        setInterval(countDownHandle, 1000);
    }, 1000 - new Date().getMilliseconds());
})