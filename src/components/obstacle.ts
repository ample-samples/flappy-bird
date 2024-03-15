/*
 * An obstacle is a game object that moves 
 * across the screen and will end the 
 * game if touched
 *
 * It will be created on the right side 
 * of the screen and move to the left
 *
 * Contains data about the object and behaviours
 * Data:
 *   - x pos
 *   - y pos
 *   - dx speed
 *   - dy = 0
 * Behaviours:
 *   - Create / draw
 *   - Reset to start / reset
 *   - Change / update
 *   - Pause/play?
 *
 * There should be 3-4 obstacles on the screen at once
 * obst dist = floor(innerWidth / 4)?
 *
 */

export class Obstacle {
  x: number; // starting x pos
  y: number; // starting y pos
  dx: number;
  c: CanvasRenderingContext2D;
  width = 100;
  height = innerHeight;

  constructor(c: CanvasRenderingContext2D, x: number, dx: number, xOffset: number) {
    this.x = x + xOffset;
    // max 3/4 ih, min 1/4 ih
    this.y = (innerHeight * (1 + Math.random())) / 2 - innerHeight / 4
    this.dx = dx;
    this.c = c;
  }

  draw = () => {
    this.c.beginPath()
    this.c.fillStyle = "#aaa"
    this.c.fillRect(this.x, this.y, this.width, this.height)
    this.c.fillRect(this.x, this.y - (innerHeight + 200), this.width, this.height)
  }

  update = () => {
    if (this.x < 0 - this.width) {
      this.reset()
    }
    this.x += this.dx;
    this.draw();
  }

  reset = () => {
    this.x = innerWidth + this.width;
    this.y = (innerHeight * (1 + Math.random())) / 2 - innerHeight / 4
  }
}
