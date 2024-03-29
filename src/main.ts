import './style.css'
import { Obstacle } from './components/obstacle'
import { Bird } from './components/bird'
import { GameOver } from './components/gameOver'
import { BackgroundPanel } from './components/background'
import { birdHitsObstacle } from './utils'
import pipeComplete_base64 from './assets/images/PipeComplete_base64'
import bird_base64 from './assets/images/bigBird_base64'
import background_base64 from './assets/images/Background4_base64'

const pipeImg = new Image()
pipeImg.src = "data:image/png;base64," + pipeComplete_base64
const birdImg = new Image()
birdImg.src = "data:image/png;base64," + bird_base64
const backgroundImg = new Image()
backgroundImg.src = "data:image/png;base64," + background_base64

export type State = {
  score: number,
  gameOver: boolean,
  restart: boolean
}

let state: State = {
  score: 0,
  gameOver: false,
  restart: false
}

const canvas = document.querySelector("canvas")
if (!canvas) throw new Error("canvas not found")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")
if (!c) throw new Error("Canvas context not found")

const obstacles: Obstacle[] = []
const numObstacles = Math.floor(innerWidth / 300)
for (let i = 0; i <= numObstacles; i++) {
  obstacles.push(new Obstacle(c, -1, 300 * (i + 1) + innerWidth, pipeImg))
}

const backgrounds: BackgroundPanel[] = []
const numBackgrounds = Math.ceil(innerWidth / innerHeight) + 1
for (let i = 0; i < numBackgrounds; i++) {
  backgrounds.push(new BackgroundPanel(c, -1, backgroundImg, i * innerHeight))
}

const bird = new Bird(c, birdImg)
const gameOver = new GameOver(c)

window.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.code === "KeyR") {
    state = { ...state, restart: true }
  }
})

window.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.code === "ArrowUp" && state.gameOver) {
    state = { ...state, restart: true }
  }
})

window.addEventListener("click", () => {
  if (state.gameOver) {
    state = { ...state, restart: true }
  }
})

const gameOverSound = document.querySelector<HTMLAudioElement>(".audio__game-over")
if (!gameOverSound) throw new Error("Gameover element not found")
const epicSound = document.querySelector<HTMLAudioElement>(".audio__epic")
if (!epicSound) throw new Error("Epic element not found")
const pointSound = document.querySelector<HTMLAudioElement>(".audio__point")
if (!pointSound) throw new Error("Point element not found")

const animate = () => {
  c.clearRect(0, 0, innerWidth, innerHeight)

  if (state.restart) {
    state = { ...state, gameOver: false, score: 0 }
    gameOver.isVisisble = false
    bird.restart()
    obstacles.forEach(obstacle => obstacle.restart())
    state = { ...state, restart: false }
  }

  backgrounds.forEach(background => background.draw())

  bird.update()
  obstacles.forEach(obstacle => obstacle.update())

  obstacles.forEach(obstacle => {
    if (obstacle.x < 0 - obstacle.width) {
      obstacle.reset()
      state.score++
      pointSound.play()
      if (state.score !== 0 && state.score % 10 === 0) {
        epicSound.play()
      }
    }
    if (birdHitsObstacle(bird, obstacle)) {
      if (!state.gameOver) gameOverSound.play()
      state = { ...state, gameOver: true }
    }
  })

  if (bird.hasFallenOff) {
    if (!state.gameOver) gameOverSound.play()
    state = { ...state, gameOver: true }
  }

  if (state.gameOver) {
    obstacles.forEach(obstacle => obstacle.stop())
    bird.stop()
    gameOver.show(state.score)
  }

  c.font = "30px Arial";
  c.fillStyle = "#FFEB57"
  c.textAlign = "left"
  c.fillText("Score: " + state.score, 0, 30)

  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)
