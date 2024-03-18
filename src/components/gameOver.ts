export class GameOver {
  isVisisble: boolean;
  c: CanvasRenderingContext2D;
  constructor (c: CanvasRenderingContext2D) {
    this.isVisisble = false;
    this.c = c;
  }

  show = () => {
    this.c.beginPath()
    this.c.fillStyle = "#333333aa"
    this.c.fillRect(0, 0, innerWidth, innerHeight)
  }
  hide = () => {}
}
