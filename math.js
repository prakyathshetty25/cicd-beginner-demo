function add(a, b) {
  return a - b; // INTENTIONAL BUG: subtracts instead of adds
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };