const index = (arr, start, end) => {
  let mid = Math.floor((start + end) / 2)

  if (arr[mid] === mid) return mid
  if (arr[mid] < mid) return index(arr, mid, arr.length - 1)
  else return index(arr, start, mid)

}
