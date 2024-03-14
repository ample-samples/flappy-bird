/*
 * 
 * MVP:
 * 1. The bird will be controlled with a key and move up and down on the screen
 * 2. Obstacles of varying heights will travel from right to left
 * 3. The game ends when the bird touches an obstacle
 *
 * === # Psuedocode ===
 *
 * Typescript will be used for:
 * - Creating objects
 * - Holding state
 * - Taking keyboard inputs from the user
 * - Detecting events, i.e. collisions and scoring
 * - Moving objects, i.e. the bird and the obstacles
 *
 *
 * Code structure:
 * 1. Setup functions
 *   - Game state
 *   - Object creation
 * 2. Game loop
 *   - Each loop will have a set time interval
 *   - Game logic happens here
 *
 * File structure:
 * main.ts - contains main game loop
 * setup.ts - initialises game objects
 * components/ - folder contains object definitions
 * utils.ts - utility functions
 *
 */

import './style.css'
import { Obstacle } from './components/obstacle'

const canvas = document.querySelector("canvas")
if (!canvas) throw new Error("canvas not found")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext("2d")
if (!c) throw new Error("Canvas context not found")

const obstacles: Obstacle[] = []

for (let i = 0; i < 4; i++) {
  obstacles.push(new Obstacle(c, innerWidth + i * 400, Math.random() * innerWidth / 2, -1, i*200))
}

const animate = () => {
  c.clearRect(0, 0, innerWidth, innerHeight)
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].update()
  }
  requestAnimationFrame(animate)
}

animate()
