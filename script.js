const consoleRed = 'font-weight: bold; color: red;';
const consoleGreen = 'font-weight: bold; color: green;';
const consolePrefix = '%c [AutoBot] ';

console.clear()
console.log(`${consolePrefix}Injecting...`, consoleGreen);

try {
    function onClickAuto() {
        console.log('injected'),
        u(`AutoBot ${N.cat.isAuto ? 'deactivated' : 'activated'}!\n\nCracked by @clqkx`)
        N.cat.isAuto = !N.cat.isAuto,
        N.cat.isAuto ? (this.ani8.play(0, !0),
        Laya.timer.loop(500, this, this.checkAuto),
        this.checkFreeCat()) : (Laya.timer.clearAll(this.checkAuto),
        this.ani8.stop(),
        Laya.timer.loop(5e3, this, this.checkSum)),
        this.m_img_StopAuto.visible = !N.cat.isAuto
    }
    
    E.prototype.onClickAuto = onClickAuto
    console.log(`${consolePrefix}Script loaded`, consoleGreen);
    console.log(`${consolePrefix}Crack by @clqkx`, consoleGreen);

} catch (e) {
    console.log(`${consolePrefix}An error occurred, the BrakePoint is set incorrectly!`, consoleRed);
    console.log(`${consolePrefix}Please follow the instructions, and you will succeed :*`, consoleRed);
    console.log('https://github.com/clqkx/AutoBot-Catizen');
}