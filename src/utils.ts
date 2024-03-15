import { Obstacle } from './components/obstacle'

export const birdHitsObstacle = (bird: any, obstacle: Obstacle) => {
  const rect1 = {
    x: obstacle.x,
    y: obstacle.y,
    h: obstacle.height,
    w: obstacle.width
  }
  const rect2 = {
    x: obstacle.x,
    y: obstacle.y - innerHeight + 200,
    h: obstacle.height,
    w: obstacle.width
  }

  // First part of obstacle
  const distX1 = Math.abs(bird.x - rect1.x - rect1.w / 2);
  const distY1 = Math.abs(bird.y - rect1.y - rect1.h / 2);

  if (distX1 > (rect1.w / 2 + bird.r)) { return false; }
  if (distY1 > (rect1.h / 2 + bird.r)) { return false; }

  if (distX1 <= (rect1.w / 2)) { return true; }
  if (distY1 <= (rect1.h / 2)) { return true; }

  const dx1 = distX1 - rect1.w / 2;
  const dy1 = distY1 - rect1.h / 2;

  if (dx1 * dx1 + dy1 * dy1 <= (bird.r * bird.r)) { return true } 

  // Second part of obstacle
  const distX2 = Math.abs(bird.x - rect2.x - rect2.w / 2);
  const distY2 = Math.abs(bird.y - rect2.y - rect2.h / 2);

  if (distX2 > (rect2.w / 2 + bird.r)) { return false; }
  if (distY2 > (rect2.h / 2 + bird.r)) { return false; }

  if (distX2 <= (rect2.w / 2)) { return true; }
  if (distY2 <= (rect2.h / 2)) { return true; }

  const dx2 = distX2 - rect2.w / 2;
  const dy2 = distY2 - rect2.h / 2;

  return (dx2 * dx2 + dy2 * dy2 <= (bird.r * bird.r));
}
