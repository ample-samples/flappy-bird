import { State } from "../main";

export class GameOver {
  isVisisble: boolean;
  c: CanvasRenderingContext2D;
  constructor (c: CanvasRenderingContext2D) {
    this.isVisisble = false;
    this.c = c;
  }

  show = (score: number) => {
    this.c.beginPath()
    this.c.fillStyle = "#333333aa"
    this.c.fillRect(0, 0, innerWidth, innerHeight)
    this.c.font = "30px Arial";

    this.c.fillStyle = "#000"
    this.c.textAlign = "center"
    this.c.fillText("Game Over", innerWidth / 2, innerHeight / 2);
    this.c.fillStyle = "#000"
    this.c.textAlign = "center"
    this.c.fillText(`Score: ${score}`, innerWidth / 2, innerHeight / 2 + 50);
  }
  hide = () => {}
}
