'use strict'

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function findPivot(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  let l = left;
  let r = right;
  while (l <= r) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r--;
    }
    if (l <= r) {
      swap(arr, l, r);
      l++;
      r--;
    }
  }
  return l
}

function quickSort(arr, left, right) {
  let pivot;
  if (arr.length > 1) {
    pivot = findPivot(arr, left, right);
    if (left < pivot - 1) {
      quickSort(arr, left, pivot - 1)
    } if (pivot < right) {
      quickSort(arr, pivot, right)
    }
  }
  return arr
}

module.exports = quickSort;