const maxArea = (height) => {
  let largestArea = 0;
  let indexLeft = 0;
  let indexRight = height.length - 1;

  while (indexLeft < indexRight) {
    const valueLeft = height[indexLeft];
    const valueRight = height[indexRight];
    const distance = indexRight - indexLeft;
    const currentArea = Math.min(valueLeft, valueRight) * distance;

    largestArea = Math.max(largestArea, currentArea);

    if (valueLeft < valueRight) {
      indexLeft++;
    } else {
      indexRight--;
    }
  }

  return largestArea;
};

module.exports = { maxArea };
