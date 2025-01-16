function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const result = combine([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

//Example with explicit type annotations to avoid type inference issues
function combineExplicit<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const result2 = combineExplicit<number>([1,2,3],[4,5,6]);
console.log(result2); //Output: [1,2,3,4,5,6]

const result3 = combineExplicit<string>(['a','b','c'],['d','e','f']);
console.log(result3); //Output: ['a','b','c','d','e','f']