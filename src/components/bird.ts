export class Bird {
  x: number; // starting x pos
  y: number; // starting y pos
  dy: number;
  c: CanvasRenderingContext2D;
  width = 100;
  r = 20;
  grav = 0.02
  hasFallenOff: boolean
  image: CanvasImageSource
  jumpEvent = (event: KeyboardEvent | MouseEvent) => {
    if (event instanceof KeyboardEvent && event.code === "ArrowUp"
    || event instanceof MouseEvent) {
      this.dy = -2
      const jumpSound = document.querySelector<HTMLAudioElement>(".audio__jump")
      if (!jumpSound) throw new Error("Jump element not found")
      jumpSound.play()
    }
  }

  constructor(c: CanvasRenderingContext2D, image: CanvasImageSource) {
    this.x = 100;
    this.y = innerHeight / 2 - 200;
    this.c = c;
    this.dy = 0;
    this.hasFallenOff = false
    this.image = image

    this.c.canvas.addEventListener("keydown", this.jumpEvent)
    this.c.canvas.addEventListener("click", this.jumpEvent)
  }

  draw = () => {
    this.c.drawImage(this.image, this.x - this.width/4, this.y -this.width/4, this.width/2, this.width/2)
  }

  update = () => {
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
    this.hasFallenOff = false
    this.dy = 0
    this.draw()
    this.c.canvas.addEventListener("keydown", this.jumpEvent)
    this.c.canvas.addEventListener("click", this.jumpEvent)
  }

  stop = () => {
    this.dy = 0
    this.grav = 0
    this.c.canvas.removeEventListener("keydown", this.jumpEvent)
    this.c.canvas.removeEventListener("click", this.jumpEvent)
  }
}
