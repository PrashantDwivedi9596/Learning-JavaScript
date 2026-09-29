const main = document.querySelector('#main')
let balls = Array.from(document.querySelectorAll('.ball'))

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
let targetPos = { x: mouse.x, y: mouse.y }

let ballData = []
let isUserActive = false
let inactivityTimer = null

// Mathematical Pattern State Variables
let angleX = 0
let angleY = 0
let speedX = 0.012
let speedY = 0.017
let patternTime = 0

let zidx = 50

// Initialize ball positions and colors
function initBalls() {
  ballData = balls.map((ball) => {
    if (!ball.style.backgroundColor) {
      ball.style.backgroundColor = getRandomColor()
    }
    return { element: ball, x: mouse.x, y: mouse.y }
  })
}

// Mathematical Pattern Generator (Lissajous Curve + Harmonic Waves)
function getMathematicalPosition(time) {
  const bounds = main.getBoundingClientRect()
  const centerX = bounds.width / 2
  const centerY = bounds.height / 2

  // Radii scaled to fit comfortably inside container
  const radiusX = bounds.width * 0.35
  const radiusY = bounds.height * 0.35

  // Parametric Lissajous equations with frequency modulation
  // x(t) = A * sin(a*t + delta)
  // y(t) = B * sin(b*t)
  const x =
    centerX +
    Math.sin(time * 0.7) * radiusX +
    Math.cos(time * 0.3) * (radiusX * 0.25)
  const y =
    centerY +
    Math.sin(time * 1.1) * radiusY +
    Math.sin(time * 0.5) * (radiusY * 0.2)

  return { x, y }
}

// Track mouse movements
main.addEventListener('mousemove', (e) => {
  const rect = main.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top

  isUserActive = true
  targetPos.x = mouse.x
  targetPos.y = mouse.y

  // Reset inactivity timer (Triggers mathematical pattern after 2.5s)
  clearTimeout(inactivityTimer)
  inactivityTimer = setTimeout(() => {
    isUserActive = false
  }, 2500)
})

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

// Smooth Physics and Render Loop
function animate() {
  patternTime += 0.015

  // If user is inactive, drive target using trigonometric math pattern
  if (!isUserActive) {
    const mathPos = getMathematicalPosition(patternTime)

    // Smoothly blend toward mathematical target
    targetPos.x += (mathPos.x - targetPos.x) * 0.05
    targetPos.y += (mathPos.y - targetPos.y) * 0.05
  }

  let currentTargetX = targetPos.x
  let currentTargetY = targetPos.y

  ballData.forEach((ballObj, index) => {
    // Variable easing: leading balls move faster, trailing balls float smoothly
    const easeFactor = 0.18 - Math.min(index * 0.01, 0.08)

    ballObj.x += (currentTargetX - ballObj.x) * easeFactor
    ballObj.y += (currentTargetY - ballObj.y) * easeFactor

    const radius = ballObj.element.offsetWidth / 2 || 18
    const bounds = main.getBoundingClientRect()

    const clampedX = clamp(ballObj.x, radius, bounds.width - radius)
    const clampedY = clamp(ballObj.y, radius, bounds.height - radius)

    ballObj.element.style.transform = `translate(${clampedX - radius}px, ${clampedY - radius}px)`

    // Next ball follows current ball position
    currentTargetX = ballObj.x
    currentTargetY = ballObj.y
  })

  requestAnimationFrame(animate)
}

// Double Click: Spawn new ball
main.addEventListener('dblclick', (e) => {
  const newBall = document.createElement('div')
  newBall.className = 'ball'
  newBall.style.backgroundColor = getRandomColor()
  main.appendChild(newBall)

  balls.push(newBall)
  ballData.push({
    element: newBall,
    x: e.clientX,
    y: e.clientY,
  })

  checkThreshold()
})

// Cleanup excess balls (> 9) after 5 seconds
let cleanupTimer = null
function checkThreshold() {
  if (balls.length > 9 && !cleanupTimer) {
    cleanupTimer = setTimeout(() => {
      while (balls.length > 9) {
        const removedBall = balls.pop()
        ballData.pop()
        removedBall.remove()
      }
      cleanupTimer = null
    }, 5000)
  }
}

// Initialize
initBalls()
animate()
