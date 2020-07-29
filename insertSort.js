//插入排序，索引递增，在索引位置上的数字与索引之前的数字比较。如果之前的数字都比当前索引的数据大，则被比较数字的索引位+1；
function insertSrot(arr,index){
  if(index == arr.length) return arr;
  let num = arr[index];
  let i = index-1;
  while(1){
    if(i<0) break;
    if(arr[i] > num){
      arr[i+1] = arr[i];
      arr[i] = num;
    } 
    else break;
    i--;
  }
  return insertSrot(arr,index+1);
}
