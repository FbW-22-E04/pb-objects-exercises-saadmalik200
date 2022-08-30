//1
const data = { a: 1 };
//write your code here
function isPlainObject(obj) {
  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
    return true;
  } else {
    return false;
  }
}

console.log(isPlainObject(data)); // true
console.log(isPlainObject([1, 2, 3])); // false
console.log(isPlainObject(null)); // false

console.log(`----------------------------------`);
//2
const data2 = { a: 1, b: 2 };
//write your code here

function makePairs(obj) {
  //   console.log(obj);
  const arr = [];

  for (const key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}

console.log(makePairs(data2)); // [['a', 1], ['b', 2]]

console.log(`----------------------------------`);

//3
const data3 = { a: 1, b: 2 };
// const obj = {};
//write your code here
function without(d, e) {
  //   for (const item in a) {
  //   const c = b;
  const obj = { ...d };
  delete obj[e];
  //   const { e, ...obj1 } = d;

  return obj;

  // console.log(item);
  // if (obj[a] === obj[b]) {
  //   obj[a] = b;
  //   return obj;
  // }
  //   }
}
console.log(without(data3, "b")); // { a: 1 }

console.log(`---------------Q4-------------------`);

4;
const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };
// write your code here
function isEmpty(obj) {
  //   if (Object.keys(obj).length === 0 || !Object.values(obj)[0]) {
  // console.log(true);

  if (
    obj && // 👈 null and undefined check
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  ) {
    return true;
  } else {
    return false;
  }
  //   console.log(Object.values(obj));
  //   return true;
}
console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true

console.log(`----------------------------------`);

//5
const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };
//write your code here

function isEqual(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqual(data5, data51)); // true
console.log(isEqual(data5, data52)); // false

console.log(`----------------------------------`);

//6
const data6 = { a: { b: [1, 2, 3] } };
//write your code here

function invoke(data, ab, spl, arr) {
  //   console.log(data[ab]);
  const newArr = ab.split(".");
  const result = newArr.reduce((acc, key) => {
    console.log(`Key is ${key}`);
    console.log(`ACC [Key] ${acc[key]}`);
    console.log(`Data [Key] ${data[key]}`);
    acc = acc[key] === undefined ? data[key] : acc[key];
    console.log(acc);
    return acc;
  }, {});

  //   console.log(result[spl].apply({}, arr));
  console.log(Array.prototype[spl].apply(result, arr));
  //   console.log(result);

  //   //   console.log(newArr);
  //   let obj = {};
  //   for (const item of newArr) {
  //     obj[item] = { ...obj[item] };
  //   }
  //   console.log(obj);

  //   return data.splice(1, 2, arr);
}
console.log(invoke(data6, "a.b", "splice", [1, 2])); // [2, 3]

// const a = a.b;

// console.log(data6.a.b.splice(1, 2, [1, 2]));
/*
//7
const data7 = { a: { b: undefined } };
//write your code here 
console.log(isEmptyDeep(data7));


//8
const data8 = { a: 1, b: { c: 1 } };  
const data81= { a: 1, b: { c: 1 } };  
const data82= { a: 1, b: { c: 2 } };
//write your code here 
console.log(isEqualDeep(data8, data81));// true  
console.log(isEqualDeep(data8, data82)); // false  


//9
const data9 = { a: 1, b: 2 };  
const data91 = { c: 1, b: 2 };
//write your code here 
console.log(intersection(data9, data91)); // { b: 2 }


//10
const data10 = { a: 1, b: { c: 3 } };  
const data11 = { c: 1, b: { c: 3 } };
//write your code here 
console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }

*/
