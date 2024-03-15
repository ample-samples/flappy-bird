export class Bird {
  x: number; // starting x pos
  y: number; // starting y pos
  dy: number;
  c: CanvasRenderingContext2D;
  width = 100;
  r = 30;

  constructor(c: CanvasRenderingContext2D) {
    this.x = 100;
    this.y = innerHeight / 2 - 200;
    this.c = c;
    this.dy = 0;
  }

  draw = () => {
    this.c.beginPath()
    this.c.strokeStyle = "#aaa"
    this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    this.c.stroke()
  }

  update = () => {
    this.draw()
  }

  restart = () => {}
}
