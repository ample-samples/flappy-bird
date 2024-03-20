export class GameOver {
  isVisisble: boolean;
  c: CanvasRenderingContext2D;
  constructor (c: CanvasRenderingContext2D) {
    this.isVisisble = false;
    this.c = c;
  }

  restart = () => {};

  show = (score: number) => {
    this.c.beginPath()
    this.c.fillStyle = "#0069AAaa"
    this.c.fillRect(innerWidth / 2 - 100, innerHeight / 2 - 50, 200, 180)
    this.c.font = "30px Arial";

    this.c.fillStyle = "#00396D"
    this.c.fillStyle = "#FFEB57"
    this.c.textAlign = "center"
    this.c.fillText("Game Over", innerWidth / 2, innerHeight / 2);
    this.c.textAlign = "center"
    this.c.fillText(`Score: ${score}`, innerWidth / 2, innerHeight / 2 + 50);
    this.c.fillText("R To Restart", innerWidth / 2, innerHeight / 2 + 100);
  }
}
