const url = new URL(location.href)

const countdownTitles = {
    before: url.searchParams.get('titlebefore'),
    then: url.searchParams.get('titlethen'),
    after: url.searchParams.get('titleafter'),
}
const unixTime = url.searchParams.get('unixtime')
const offsetMilliSecond = (parseInt(url.searchParams.get('offset') ?? 0)) * 1000
const date = new Date(unixTime * 1000)

const countDownHandle = () => {
    const timeDiff = Math.round((date.getTime() - (Date.now() + offsetMilliSecond)) / 1000)
    const timeDiffAbsolutize = Math.abs(timeDiff)

    const hour = (Math.floor(timeDiffAbsolutize / 60 / 60)).toString().padStart(2, '0')
    const min = (Math.floor(timeDiffAbsolutize / 60) % 60).toString().padStart(2, '0')
    const sec = (Math.floor(timeDiffAbsolutize) % 60).toString().padStart(2, '0')

    document.querySelector('#countdownHours2 .countdownNumberWrapper').dataset.number = hour[0]
    document.querySelector('#countdownHours1 .countdownNumberWrapper').dataset.number = hour[1]
    document.querySelector('#countdownMinutes2 .countdownNumberWrapper').dataset.number = min[0]
    document.querySelector('#countdownMinutes1 .countdownNumberWrapper').dataset.number = min[1]
    document.querySelector('#countdownSeconds2 .countdownNumberWrapper').dataset.number = sec[0]
    document.querySelector('#countdownSeconds1 .countdownNumberWrapper').dataset.number = sec[1]

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
        setInterval(countDownHandle, 1000)
    }, 1000 - new Date().getMilliseconds())
})