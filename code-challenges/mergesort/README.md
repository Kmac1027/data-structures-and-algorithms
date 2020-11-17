# Blog

## What is Merge Sort?

- Merge sort is one of the most popular sorting algorithms today and it uses the concept of divide and conquer to sort a list of elements. Meaning, it will divide the bigger problem into smaller problems and then solve each of the small problems in order to solve the bigger problem that we started out with.

![Mewrge Sort Example](https://miro.medium.com/max/700/1*Uh6e_EkHIPTv5ZucvTfYvQ.png)

- Example from [Medium.com](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)

- Notice that at each level we divide the array into two halves until we get bunch of single element arrays. This is the divide portion of the divide and conquer method. Then, we start merging and sorting the smaller arrays in a series of steps which is the conquer portion of divide and conquer.

### workflow

1. No need to sort the array if the array only has one element or empty
1. This is where we will be dividing the array into left and right
1. Using recursion to combine the left and right