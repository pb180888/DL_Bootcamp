function addOperator(x, y) {
  console.log(x + y);
  return x + y;
}
function divideOperator(x, y) {
  console.log(x / y);
  return x / y;
}
module.exports = {
  addOperator: addOperator,
  divideOperator: divideOperator,
};
