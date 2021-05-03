// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr=[[],[],[]];
// console.log(arr);

// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// var Arr=[[0,1,2,3],[1,0,1,0],[5,,1,0,0]];

// console.log(Arr);

// 3. Write a program to print numeric counting from 1 to 10.

// for(i=1; i<=10;i++){
//     console.log(i);
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var input = +prompt("Enter the number to print table");
// var lenght = +prompt("Enter the Lenght of the table you want to print");

// for(i=1; i<=lenght; i++){
//     console.log(`${input} x ${i} = ${input*i} `);
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple", "banana", "mango", "Orange", "strawberry"]

// for (i = 0; i<=fruits.length; i++){
//     console.log(fruits[i]);
// }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// for(i=1; i<=15; i++){
//     console.log(i);
// }

// for(i=10; i>=1; i--){
//     console.log(i);
// }

// for(i=1; i<=20; i++){
//     if(i % 2 == 0){
//     console. log(i);
//     }
//     }

// for(i=1; i<=20; i++){
//         if(i % 2 == 1){
//         console. log(i);
//         }
//         }


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var search = prompt("Enter your search");

// var matchFound = false;

// for (i=0; i<=arr.length; i++ ){
//     if (search === arr[i]){
//         console.log(`Your ${search} is available in our bakery `)

//     }
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// var array= [24, 53, 78, 91, 12];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//        largest=array[i];
//     }
// }
// console.log(largest);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


// var numbers = [24, 53, 78, 91, 12];
// var smallest_number = Math.min(...numbers);
// console.log('Smallest Value:', smallest_number);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for(i=1; i<=100; i++){
//     if(i%5==0){
//         console.log(i);

//     }
// }