basic.forever(function () {
    if (Math.round(input.compassHeading() / 45) == 0) {
        basic.showArrow(ArrowNames.North)
    }
    if (Math.round(input.compassHeading() / 45) == 1) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (Math.round(input.compassHeading() / 45) == 2) {
        basic.showArrow(ArrowNames.East)
    }
    if (Math.round(input.compassHeading() / 45) == 3) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (Math.round(input.compassHeading() / 45) == 4) {
        basic.showArrow(ArrowNames.South)
    }
    if (Math.round(input.compassHeading() / 45) == 5) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (Math.round(input.compassHeading() / 45) == 6) {
        basic.showArrow(ArrowNames.West)
    }
    if (Math.round(input.compassHeading() / 45) == 7) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
