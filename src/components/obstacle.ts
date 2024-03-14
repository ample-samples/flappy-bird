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
 */

export class Obstacle {
  x: number; // starting x pos
  y: number; // starting y pos
  dx: number;
  c: CanvasRenderingContext2D;
  width = 100;
  height = innerHeight;
  xOffset: number; // distance from first object
  constructor(c: CanvasRenderingContext2D, x: number, y: number, dx: number, xOffset: number) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.c = c;
    this.xOffset = xOffset;
  }

  draw = () => {
    this.c.beginPath()
    this.c.fillRect(this.x, this.y, this.width, this.height)
    this.c.fillRect(this.x, this.y - (innerHeight + 100), this.width, this.height)
  }

  update = () => {
    if (this.x < 0 - this.width) {
      this.x += innerWidth + this.width;
    }
    this.x += this.dx;
    this.draw();
  }

  reset = () => {

  }
}
