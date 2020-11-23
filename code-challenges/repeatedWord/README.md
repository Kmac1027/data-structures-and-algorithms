# Repeated Word

## Challenge

take in a large string and return the first word that is repeated

## procedure

### the way i want to do this:

 1. taking a string and turing it into an array with each word in the string its own string within the array.
 1. loop through the array and push into a new array checking each time if taht worde already excists within the array
 1. the first time we come to a word that already exists within the new array we retrun that word knowing that it will b ehe fisr word repeated

 ### the way the directions tell me to do it:

 1. take a string and use regex to turn it into an array with each word as its owns tring
 1. loop through that array and put each word into a hashmap
 1. check to see if the word is already in the hasmap before adding it, if it is, then return it, if not, than add to the hashmap