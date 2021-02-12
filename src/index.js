module.exports = function reverse (n) {
  const check = n.toString().match(/\d/g).reverse().join('')

  return +check
}
