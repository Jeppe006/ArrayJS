# ArrayJS

![](logos/ArrayJS_logo_512x512.png)

An module made for extending the capabilities of arrays in javascript

# Usage:

**Compare**

```javascript
const array1 = [1,2,3,4];
const array2 = [1,2,3,4];
// ArrayJS.Compare() compares two arrays and returns boolean.
if(ArrayJS.Compare(array1,array2)){
  console.log("Passed!");
}

```

```
Output: Passed!
```

**Shuffle**

```javascript
const array = [1,2,3,4];

console.log(ArrayJS.Shuffle(array)); // Randomizes the array.

```

```
Output: [3,2,4,1]
```

**Swap**

```javascript
const array = [1,2,3,4];

console.log(ArrayJS.Swap(array,0,3)); // Swaps index of two items in an array.

```
```
Output: [4,2,3,1]
```

**GenerateArray**

```javascript
console.log(ArrayJS.GenerateArray(5)) // Generates an array as of which the items count from 1 to the respective length of the array.

```

```
Output: [1,2,3,4,5]
```

# Sorting Algorithms

They all achieve they same thing of sorting the array but they are using different techniques\
More info: https://en.wikipedia.org/wiki/Sorting_algorithm

