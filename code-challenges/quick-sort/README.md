# BLOG

## QuickSort

- Quick Sort will divide elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.
- Though sort() gives the result we want, problem lies with the way it sorts the array elements.
  Default sort() in JavaScript uses insertion sort by V8 Engine of Chrome and Merge sort by Mozilla Firefox and Safari.
- before going forward with the Quick sort, selecting the pivot element plays a major role. If you select the first element as the pivot element, then it gives worst performance in the sorted array. So, it is always advisable to pick the middle element (length of the array divided by 2) as the pivot element and we do the same.

1. First select an element which is to be called as pivot element.
1. Next, compare all array elements with the selected pivot element and arrange them in such a way that,elements less than the pivot element are to it's left and greater than pivot is to it's right.
1. Finally, perform the same operations on left and right side elements to the pivot element.

## steps

1. First find the "pivot" element in the array.
1. Start the left pointer at first element of the array.
1. Start the right pointer at last element of the array.
1. Compare the element pointing with left pointer and if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than orequal to the pivot element.
1. Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.
1. Check if left pointer is less than or equal to right pointer, then saw the elements in locations of these pointers.
1. Increment the left pointer and decrement the right pointer.
1. If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.

![](https://www.guru99.com/images/1/011019_1052_QuickSortAl2.png)

[Info from guru99](https://www.guru99.com/quicksort-in-javascript.html)