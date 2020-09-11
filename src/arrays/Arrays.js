const Arrays = {
  chunk: (arr, size) => arr.reduce((chunks, el, i) => (i % size
    ? chunks[chunks.length - 1].push(el)
    : chunks.push([el])) && chunks, []),
  // The intersection will give us the elements that both arrays share in common
  intersection: (arrA, arrB) => arrA.filter((x) => arrB.includes(x)),
  // The difference will output the elements from array A that are not in the array B
  difference: (arrA, arrB) => arrA.filter((x) => !arrB.includes(x)),
  // In this case, you will get an array containing all the elements of arrA that are not in arrB and vice-versa,
  simetricalDifference: (arrA, arrB) => arrA.filter((x) => !arrB.includes(x))
  .concat(arrB.filter((x) => !arrA.includes(x))),
  // The union must be the simplest of them all, in the end, the result should be all the elements from A, all from B
  union: (arrA, arrB) => [...new Set([...arrA, ...arrB])],
};

module.exports = Arrays;
