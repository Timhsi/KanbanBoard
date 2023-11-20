import hash from 'hash.js';


export function getRandomColor(inputString) {
  const hashValue = hash.sha1().update(inputString).digest('hex');

  const r = parseInt(hashValue.slice(0, 2), 16);
  const g = parseInt(hashValue.slice(2, 4), 16);
  const b = parseInt(hashValue.slice(4, 6), 16);

  return `rgb(${r},${g},${b})`;
}
