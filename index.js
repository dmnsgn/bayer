/**
 * Compute the bayer matrix based for powers of two.
 * @param {number} size Needs to be a power of two otherwise will throw a "Maximum call stack size exceeded" Error.
 * @returns {Array[]} A 2D array containing the matrix.
 */
function bayer(size = 2, x = 0, y = 0, value = 0, step = 1, matrix = [[]]) {
  const prevPoT = size / 2;

  if (size == 1) {
    matrix[y] = matrix[y] || [];
    matrix[y][x] = value;
    return matrix;
  }

  bayer(prevPoT, x, y, value + step * 0, step * 4, matrix);
  bayer(prevPoT, x + prevPoT, y + prevPoT, value + step * 1, step * 4, matrix);
  bayer(prevPoT, x + prevPoT, y, value + step * 2, step * 4, matrix);
  bayer(prevPoT, x, y + prevPoT, value + step * 3, step * 4, matrix);

  return matrix;
}

export default bayer;
