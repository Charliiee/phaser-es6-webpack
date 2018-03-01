import Phaser from 'phaser';

class Mushroom extends Phaser.GameObjects.Sprite {
  constructor ({ scene, x, y, asset }) {
    super(scene, x, y, asset);
  }
}

export default Mushroom;
