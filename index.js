const maxArea = (height) => {
  let largestArea = 0;
  let largestHeight = 0;

  for (let i = 0; i < height.length; i++) {
    const valueLeft = height[i];

    if (valueLeft < largestHeight) {
      continue;
    }

    for (let j = i + 1; j < height.length; j++) {
      const valueRight = height[j];
      const minimumHeight = Math.min(valueLeft, valueRight);
      const distance = j - i;
      const area = minimumHeight * distance;

      if (valueLeft > largestHeight) {
        largestHeight = valueLeft;
      }

      if (area > largestArea) {
        largestArea = area;
      }
    }
  }

  return largestArea;
};

module.exports = { maxArea };
