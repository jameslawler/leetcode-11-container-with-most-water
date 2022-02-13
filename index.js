const maxArea = (height) => {
  let largestArea = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const valueLeft = height[i];
      const valueRight = height[j];
      const minimumHeight = Math.min(valueLeft, valueRight);
      const distance = j - i;
      const area = minimumHeight * distance;

      if (area > largestArea) {
        largestArea = area;
      }
    }
  }

  return largestArea;
};

module.exports = { maxArea };
