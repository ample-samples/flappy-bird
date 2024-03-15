import { State } from "../main";

export class Bird {
  x: number; // starting x pos
  y: number; // starting y pos
  dy: number;
  c: CanvasRenderingContext2D;
  width = 100;
  r = 30;
  grav = 0.02
  state: State
  hasFallenOff: boolean
  jumpEvent = (event: KeyboardEvent) => {
    if (event.code === "ArrowUp") {
      this.dy = -2
    }
  }

  constructor(c: CanvasRenderingContext2D, state: State) {
    this.x = 100;
    this.y = innerHeight / 2 - 200;
    this.c = c;
    this.dy = 0;
    this.state = state
    this.hasFallenOff = false

    this.c.canvas.addEventListener("keydown", this.jumpEvent)
  }

  draw = () => {
    this.c.beginPath()
    this.c.strokeStyle = "#aaa"
    this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    this.c.stroke()
  }

  update = () => {
    if (this.state.gameOver) {
      this.stop()
      return
    }
    this.dy += this.grav
    this.y += this.dy
    if (this.y > innerHeight - this.r) {
      this.hasFallenOff = true
      this.stop()
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
