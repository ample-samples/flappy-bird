export class BackgroundPanel {
  c: CanvasRenderingContext2D
  image: CanvasImageSource
  dx: number
  initialdx: number
  x = 0;
  xoffset: number

  constructor(c: CanvasRenderingContext2D, dx: number, image: CanvasImageSource, xoffset: number) {
    this.c = c
    this.image = image
    this.dx = dx
    this.initialdx = dx
    this.xoffset = xoffset
  }

  draw = () => {
    this.c.drawImage(this.image, this.xoffset, 0, innerHeight, innerHeight)
  }
  update = () => {

  }
  restart = () => { }
  stop = () => { }
}
