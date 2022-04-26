var varA = 3;
var varB = 5;
var varC = varA + varB;
console.log(varA);
console.log(varB);
console.log(varC);
var varD = varB;
var varB = varA;
var varA = varD;
console.log(varA);
console.log(varB);
console.log(varC);

console.log('el resultado de', varA, 'mas', varB, 'es igual a', varC)

// destructuring

var A = 1;
var B = 2;

[A, B] = [B, A];

console.log(A);
console.log(B);
