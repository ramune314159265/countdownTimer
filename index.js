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

    document.querySelector('#countdownHours2 .countdownNumberWrapper').style.translate = `0px ${-1080 + 120 * hour[0]}px`
    document.querySelector('#countdownHours1 .countdownNumberWrapper').style.translate = `0px ${-1080 + 120 * hour[1]}px`
    document.querySelector('#countdownMinutes2 .countdownNumberWrapper').style.translate = `0px ${-1080 + 120 * min[0]}px`
    document.querySelector('#countdownMinutes1 .countdownNumberWrapper').style.translate = `0px ${-1080 + 120 * min[1]}px`
    document.querySelector('#countdownSeconds2 .countdownNumberWrapper').style.translate = `0px ${-1080 + 120 * sec[0]}px`
    document.querySelector('#countdownSeconds1 .countdownNumberWrapper').style.translate = `0px ${-1080 + 120 * sec[1]}px`

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