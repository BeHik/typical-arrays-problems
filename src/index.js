
exports.min = function min (array) {
  let minNum = 0;

  if ((array!==undefined) && (array.length!==0)) {
  array.forEach(element => {element<minNum ? minNum=element : '' });}
  return minNum;
}

exports.max = function max (array) {
  let maxNum = 0;
  if ((array!==undefined) && (array.length!==0)) {
  array.forEach(element => {element>maxNum ? maxNum=element : ''});}
  return maxNum;
}

exports.avg = function avg (array) {
  let avgNum = 0;
  if ((array===undefined) || (array.length===0)) return avgNum;

  array.forEach(element => {avgNum += element});
  
  return avgNum/array.length;
}
