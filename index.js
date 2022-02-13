const maxArea = (height) => {
  let largestArea = 0;
  let largestHeight = 0;

  for (let i = 0; i < height.length; i++) {
    const valueLeft = height[i];

    if (valueLeft < largestHeight) {
      continue;
    } else {
      largestHeight = valueLeft;
    }

    for (let j = height.length - 1; j > i; j--) {
      const valueRight = height[j];
      const minimumHeight = Math.min(valueLeft, valueRight);
      const distance = j - i;
      const area = minimumHeight * distance;

      if (area > largestArea) {
        largestArea = area;
      }

      if (valueRight > valueLeft) {
        break;
      }
    }
  }

  return largestArea;
};

module.exports = { maxArea };
