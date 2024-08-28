const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = 1500;
ctx.canvas.height = 1000;
let rootX = canvas.width / 2;
let rootY = canvas.height;
let leanRight = 0.3;
let leanLeft = -0.3;
let radius = 20;
let length = 200;
let branchDepthStart = 0;
let maxBranchDepth = 20;
let leafSize = 3;
let leafColor1 = '#FF0000';
let leafColor2 = '#FF4433';
let trunkColor = '#ffffff';
let trunkOutlineColor = '#000000';
let backgroundColor = '#000000';

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setTimeout(() => {
  growBranch(rootX, rootY, length, 0, branchDepthStart, radius);
}, 500);

function random(num) { return Math.floor(Math.random() * num) }

function animateGrowBranch(startX, startY, length, lean, branchDepth, radius) {
  let step = 0;
  let maxSteps = length;

  function stepBranch() {
    if (branchDepth >= maxBranchDepth || length <= 0 || radius <= 0) {
      return;
    }

    if (step < maxSteps) {
      // 1 or 0 or -1px deviation of the growth direction
      let Xdeviation = random(3) - 1;
      Xdeviation += lean;
      startX += Xdeviation;

      // making a new Y coordinate
      // (so the branch grows upward)
      // 1 in 3 chance that the branch will not grow up on this iteration 
      startY = (random(3) > 0) ? startY : --startY;

      drawCircle(ctx, startX, startY, radius, trunkColor, trunkOutlineColor, false);
      
      // Adds Leaves 
      // 1 in 20 chance to grow a leaf
      if (!random(20)) {
        let color = (random(2)) ? leafColor2 : leafColor1;
        drawCircle(ctx, startX, startY, leafSize, color, 'black', false);
      }

      step++;
      requestAnimationFrame(stepBranch);
    } else {
      let newBranchDepth = branchDepth + 1;
      let newRadius = (radius < 5) ? radius - 0.2 : radius - 3;
      let newLength = (length < 100) ? length - random(10) : length - random(100);

      if (random(3)) {
        animateGrowBranch(startX, startY, newLength, leanLeft, newBranchDepth, newRadius);
        animateGrowBranch(startX, startY, newLength, leanRight, newBranchDepth, newRadius);
      } else {
        if (random(2)) {
          animateGrowBranch(startX, startY, newLength, leanRight, newBranchDepth, newRadius);
        } else {
          animateGrowBranch(startX, startY, newLength, leanLeft, newBranchDepth, newRadius);
        }
      }
    }
  }

  stepBranch();
}

function drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = strokeWidth;
  ctx.strokeStyle = stroke;
  ctx.stroke();
}

function growBranch(startX, startY, length, lean, branchDepth, radius) {
  animateGrowBranch(startX, startY, length, lean, branchDepth, radius);
}