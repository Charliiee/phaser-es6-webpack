import Phaser from 'phaser';

export default {
  title: 'Game Title',
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  fps: {
    min: 30,
    target: 60
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  pixelArt: false,
  autoResize: true,
  roundPixels: false,
  transparent: false,
  localStorageName: 'phaseres6webpack'
};
