<p align="center">
        <img src="./logos/ArrayJS_logo_512x512.png">
</p>

 <h1 align="center">ArrayJS</h1>

A library for array manipulation in JavaScript. This library is designed to make working with arrays a breeze, offering a set of easy-to-use functions

**Installation**\
In an HTML document you get a script tag and link it to the library and it will automatically work for other of your scripts.
```HTML
<script src="your/path/to/Array.js"></script>
```

# Usage

**MultiArray**

```javascript
const multiArray = new ArrayJS.MultiArray(3,3,0);
// Creates an new dimensional array that is 3x3 and sets the empty items as 0
// [0,0,0]
// [0,0,0]
// [0,0,0]

multiArray.Add(0,0,1); // adds 1 on row 0 & column 0
multiArray.Add(1,1,2); // adds 2 on row 1 & column 1
multiArray.Add(2,2,3); // adds 3 on row 2 & column 2

// To remove from the use Remove(Row, Column) function, it will set it as the default value
// To get the array itself use multiArray.array
console.log(multiArray.array);
```
```
Output: [1,0,0]
        [0,2,0]
        [0,0,3]
```
\
**Compare**

```javascript
const array1 = [1,2,3,4];
const array2 = [1,2,3,4];
// Compares two arrays and if the arrays are equally long with the same items it will return true.
if(ArrayJS.Compare(array1,array2)){
  console.log("Passed!");
}

```
```
Output: Passed!
```
\
**Shuffle**

```javascript
const array = [1,2,3,4];

console.log(ArrayJS.Shuffle(array)); // Randomizes the array.

```
```
Output: [3,2,4,1]
```
\
**Swap**

```javascript
const array = [1,2,3,4];

console.log(ArrayJS.Swap(array,0,3)); // Swaps index of two items in an array.

```
```
Output: [4,2,3,1]
```
\
**GenerateArray**

```javascript
// Generates an array as of which the items count from 1 to the respective length of the array.
console.log(ArrayJS.GenerateArray(5));

```
```
Output: [1,2,3,4,5]
```
\
**DeepSearch**

```javascript
const array = [1,[ 2,3, ["secret", 4] ],5 ]

console.log(ArrayJS.DeepSearch(array,"secret"));
// Searches both the array and any nested arrays.
// If it finds nothing it will return undefined.
```
```
Output: {0: "secret", length: 1}
```
\
**Equalize**

```javascript
const array = [1,2,2,3];
console.log(ArrayJS.Equalize(array));
// Counts all of the interger items to an minimum number.
// If not possible it will return null.
```
```
Output: 1
```
\
**Split**

```javascript
const array = [1,2,3,4,5,6];
console.log(ArrayJS.Split(array,2)); 
// Splits the array in n interger amount of chunks
```
```
Output: [ [1,2,3], [4,5,6] ]
```

# Sorting Algorithms

They all achieve they same thing of sorting the array but they are using different techniques\
More info: https://en.wikipedia.org/wiki/Sorting_algorithm

