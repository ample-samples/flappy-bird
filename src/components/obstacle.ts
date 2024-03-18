export class Obstacle {
  x: number; // starting x pos
  y: number; // starting y pos
  dx: number;
  c: CanvasRenderingContext2D;
  width = 100;
  height = innerHeight;
  xOffset: number;
  initialdx: number;

  constructor(c: CanvasRenderingContext2D, dx: number, xOffset: number) {
    this.x = innerWidth + xOffset;
    // max 3/4 ih, min 1/4 ih
    this.y = (innerHeight * (1 + Math.random())) / 2 - innerHeight / 4
    this.dx = dx;
    this.c = c;
    this.xOffset = xOffset
    this.initialdx = dx
  }

  draw = () => {
    this.c.beginPath()
    this.c.fillStyle = "#aaa"
    this.c.fillRect(this.x, this.y, this.width, this.height)
    this.c.fillRect(this.x, this.y - (innerHeight + 200), this.width, this.height)
  }

  update = () => {
    this.x += this.dx;
    this.draw();
  }

  reset = () => {
    this.x = innerWidth + this.width;
    this.y = (innerHeight * (1 + Math.random())) / 2 - innerHeight / 4
  }

  restart = () => {
    this.dx = this.initialdx
    this.x = innerWidth + this.xOffset
    this.y = (innerHeight * (1 + Math.random())) / 2 - innerHeight / 4
    this.draw()
  }

  stop = () => {
    this.dx = 0
  }
}
