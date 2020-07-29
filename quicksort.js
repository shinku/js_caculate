//js快排算法实现

function quickSort(sourceArr){
  if(sourceArr.length<=1) {
    return sourceArr;
  }
  let minArr =[];
  let maxArr = [];
  let pid = sourceArr[0];
  for(var i = 1;i<sourceArr.length;i++){
     if(sourceArr[i]<pid) minArr.push(sourceArr[i])
     else maxArr.push(sourceArr[i])
  }
 
  let arr = quickSort(minArr).concat(pid).concat(quickSort(maxArr));
  return arr;
}
