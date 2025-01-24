function gas_sensor () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        return true
    } else {
        return false
    }
}
