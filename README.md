<br>

<div align="center">

[<img src="./resources/catizen-logo.jpg" width="144"/>](https://t.me/catizenbot)

  <h1 align="center">AutoBot for Catizen</h1>
  
  <p align="center">
    <strong>This script unlocks the "Auto" mode button in the game without requiring the cost of 3900 $Fish.</strong>
  </p>
  <img src="./resources/demo.png"/>

</div>

## Features
- Auto-boost
- Auto-merge cats
- Auto-buy free cats
- Auto-delete low-level cats
- Auto-collect Airdrop Bonus

## Enable Debug Mode for Mini Apps

### Android
- **[Enable USB-Debugging](https://developer.chrome.com/docs/devtools/remote-debugging/)** on your device.
- In Telegram Settings, scroll all the way down, press and hold on the version number two times.
- Choose Enable WebView Debug in the Debug Settings.
- Connect your phone to your computer and open chrome://inspect/#devices in Chrome – you will see your Mini App there when you launch it on your phone.

### Telegram Desktop on Windows and Linux
- Download and launch the **[Beta Version](https://desktop.telegram.org/changelog#beta-version)** of Telegram Desktop on Windows or Linux (not supported on Telegram Desktop for macOS yet).
- Go to Settings > Advanced > Experimental settings > Enable webview inspection.
- Right click in the WebView and choose Inspect.

### Telegram macOS
- Download and launch the **[Beta Version](https://telegram.org/dl/macos/beta)** of Telegram macOS.
- Quickly click 5 times on the Settings icon to open the debug menu and enable “Debug Mini Apps”.

## Launch script

Follow the steps below to launch script:

1. Open the game in Telegram Web App and the web inspector of your browser. You can do this by right-clicking on the page and selecting **"Inspect"** or **"Inspect Element"** (depending on the browser).

2. Go to the **"Sources"** tab in the web inspector.

3. Find the file **"bundle-*.js"**. It is located in the **"tgCat/game/cat/js"** folder.

4. Open the file **"bundle-*.js"** and locate the line with the condition **A([R("leaguechange")], N.prototype, "updateBg", null),**.

5. Set a Brake Point at this line. You can do this by clicking on the line number to the left of the code or by pressing the **F9** key on your keyboard.

6. Reload the page by pressing **F5** on your keyboard.

7. Switch to the **"Console"** tab. In the console at the bottom of the page, enter the copied script and press the **Enter** key.

```
const consoleRed = 'font-weight: bold; color: red;';
const consoleGreen = 'font-weight: bold; color: green;';
const consolePrefix = '%c [AutoBot] ';

console.clear()
console.log(`${consolePrefix}Injecting...`, consoleGreen);

try {
    function onClickAuto() {
        P.cat.isAuto = !P.cat.isAuto,
        P.cat.isAuto ? (this.ani8.play(0, !0),
        Laya.timer.loop(500, this, this.checkAuto),
        this.checkFreeCat(),
        this.m_btn_AutoSetting.visible = !0) : (Laya.timer.clearAll(this.checkAuto),
        this.ani8.stop(),
        Laya.timer.loop(5e3, this, this.checkSum),
        this.m_btn_AutoSetting.visible = !1),
        this.m_img_StopAuto.visible = !P.cat.isAuto
        u(`AutoBot ${P.cat.isAuto ? 'deactivated' : 'activated'}!\n\nCracked by @clqkx`)
    }
    
    N.prototype.onClickAuto = onClickAuto
    console.log(`${consolePrefix}Script loaded`, consoleGreen);
    console.log(`${consolePrefix}Crack by @clqkx`, consoleGreen);

} catch (e) {
    console.log(`${consolePrefix}An error occurred, the BrakePoint is set incorrectly!`, consoleRed);
    console.log(`${consolePrefix}Please follow the instructions, and you will succeed :*`, consoleRed);
    console.log('https://github.com/clqkx/AutoBot-Catizen');
}
```

8. To disable the debugger, go back to the **"Sources"** tab and click on the Brake Point to remove it. You can also press the **F9** key again to remove the Brake Point.

### That's it! Now you can use Auto mode for free in Catizen game on Telegram.

## Author

Telegram: [@clqkx](https://t.me/clqkx)
Telegram Channel: [@clqkxdev](https://t.me/clqkxdev)
