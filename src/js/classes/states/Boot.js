export default class Boot extends Phaser.State {
  preload() {
    console.log(`[Boot] — preload()`);
    this.load.spritesheet(`preloader`,`assets/img/preloader.gif`)
  }
  create() {
    this.state.start(`Preload`);
  }
}
