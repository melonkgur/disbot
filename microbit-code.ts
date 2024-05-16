/**
 * this file runs on the microbit, allowing it to receive signals from the bot.
 *
 * the makecode libraries will not show up, and this file should generally be edited using
 * the online editor.
 *
 * the only reason that it is here is so that we are able to track it and save it with the rest
 * of the repo.
 */
(function on_start() { // on start, i think. i forget how this is done by default
    music.setBuiltInSpeakerEnabled(true)
})()

basic.forever(function on_forever() { // loop
    let args: string;
    let cmd = serial.readUntil(".")
    if (cmd.length > 0) {
        if (cmd == "BEEP") {
            music.createSoundExpression(
                WaveShape.Square,
                131,
                0,
                255,
                0,
                500,
                SoundExpressionEffect.None,
                InterpolationCurve.Logarithmic
            )
        } else if (cmd == "DISPLAY") {
            args = serial.readUntil(serial.delimiters(Delimiters.NewLine))
            basic.showString(args)
        }
    }
})

