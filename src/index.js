module.exports = function towelSort(matrix) {
  if (arguments.length === 0) {
    return [];
  }
  return matrix.reduce((acc, current, index) => {
    return index % 2 ? acc.concat(current.reverse()) : acc.concat(current);
  }, []);
};
