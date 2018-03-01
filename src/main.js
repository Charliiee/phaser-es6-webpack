import Phaser from 'phaser';

import BootScene from './scenes/Boot';
import SplashScene from './scenes/Splash';
import GameScene from './scenes/Game';

import config from './config';

const gameConfig = Object.assign(config, {
  scene: [BootScene, SplashScene, GameScene]
});

class Game extends Phaser.Game {
  constructor () {
    super(gameConfig);
  }
}

window.onload = function() {
  window.game = new Game();
  resize();
  window.addEventListener("resize", resize, false);
};

function resize() {
  console.log(window.game)
  var canvas = document.querySelector("canvas");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = game.config.width / game.config.height;
  if(windowRatio < gameRatio){
    canvas.style.width = windowWidth + "px";
    canvas.style.height = (windowWidth / gameRatio) + "px";
  }
  else{
    canvas.style.width = (windowHeight * gameRatio) + "px";
    canvas.style.height = windowHeight + "px";
  }
}
