'use strict'

function isString(str) {
  return Object.prototype.toString.call(str) === '[object String]'
}

function last(array) {
  const length = !array ? 0 : array.length
  return length ? array[length - 1] : undefined
}

module.exports = {
  isString,
  last
}
