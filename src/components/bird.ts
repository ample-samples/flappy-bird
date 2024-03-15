export class Bird {
  x: number; // starting x pos
  y: number; // starting y pos
  dy: number;
  c: CanvasRenderingContext2D;
  width = 100;
  r = 30;
  grav = 0.02
  jumpEvent = (event: KeyboardEvent) => {
    if (event.code === "ArrowUp") {
      this.dy = -2
    }
  }

  constructor(c: CanvasRenderingContext2D) {
    this.x = 100;
    this.y = innerHeight / 2 - 200;
    this.c = c;
    this.dy = 0;
    this.canJump = true

    this.c.canvas.addEventListener("keydown", this.jumpEvent)
  }

  draw = () => {
    this.c.beginPath()
    this.c.strokeStyle = "#aaa"
    this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    this.c.stroke()
  }

  update = () => {
    this.dy += this.grav
    this.y += this.dy
    if (this.y > innerHeight - this.r) {
      this.grav = 0
      this.dy = 0
      console.log("fell off")
    }
    this.draw()
  }

  restart = () => {
    this.grav = 0.02
    this.y = innerHeight / 2
    this.draw()
  }

  stop = () => {
    this.dy = 0
    this.grav = 0
    this.c.canvas.removeEventListener("keydown", this.jumpEvent)
  }
}
