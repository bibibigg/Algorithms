function averagePair(arr, targetAvg) {
  if (arr.length === 0) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;
    if (average === targetAvg) {
      return true;
    }
    if (average < targetAvg) {
      left++;
    } else if (average > targetAvg) {
      right--;
    }
  }
  return false;
}
