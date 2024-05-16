/**
 * this file runs on the microbit, allowing it to receive signals from the bot.
 *
 * the makecode libraries will not show up, and this file should generally be edited using
 * the online editor.
 *
 * the only reason that it is here is so that we are able to track it and save it with the rest
 * of the repo.
 */
basic.forever(function on_forever() {
    let args: string;
    let cmd = serial.readUntil(".")
    if (cmd.length > 0) {
        if (cmd == "BEEP") {
            music.createSoundExpression(WaveShape.Square, 131, 0, 127, 0, 50, SoundExpressionEffect.None, InterpolationCurve.Logarithmic)
        } else if (cmd == "DISPLAY") {
            args = serial.readUntil(serial.delimiters(Delimiters.NewLine))
            basic.showString(args)
        }
    }
})
