# ArrayJS
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
