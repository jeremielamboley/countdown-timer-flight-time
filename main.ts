input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.floor(timeLeftHours))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Math.floor(timeLeft))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Math.floor(timeLeftDays))
})
let elapsedSeconds = 0
let timeLeftDays = 0
let timeLeft = 0
let timeLeftHours = 0
let timeLeftonStart = 2360080
basic.forever(function () {
    elapsedSeconds = input.runningTime() / 1000
    timeLeft = timeLeftonStart - elapsedSeconds
    timeLeftHours = timeLeft / 3600
    timeLeftDays = timeLeft / 86400
})
