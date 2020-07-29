//选择排序，每轮得出一个最小的数值，push 进新的数组，从而得到一个全新的拍讯数组
function sectionSort(arr,resultarr){
  if(arr.length ==1) {
    resultarr.push(arr[0]);
    return;
  }
  let index = 0
  let min = arr[index];
  for(var i =0;i<arr.length;i++){
    if(arr[i]<min){
      index = i;
      min = arr[i];
    }
  }
  resultarr.push(min);
  arr.splice(index,1)
  sectionSort(arr,resultarr);
}
