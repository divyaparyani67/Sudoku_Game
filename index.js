//Write the logic to solve one line or block in sudoku. Sudoku 1st row solving.

let sudokuRow_1 = [0, 0, 0, 2, 6, 0, 7, 0, 1]; //array intialized with sample input of sudoku puzzle row 1
console.log("Row 1 Input : " + sudokuRow_1);



let presentrow1Values = [];// empty array initialized for present values
for (let i=0; i<sudokuRow_1.length; i++){ //for loop will iterate through each value of sudokuRow_1 value
    if  (sudokuRow_1[i]>0){
        presentrow1Values.push(sudokuRow_1[i]); //push the present values  from sudokuRow_1 
    }

}

let possiblerow1Values = [1,2,3,4,5,6,7,8,9]; // array intilized of 1-9 numers for possible values

possiblerow1Values = possiblerow1Values.filter ( function( el ) {
    return presentrow1Values.indexOf( el ) < 0;  //it will show values which are not present in sudokuRow_1
} );

for  (let i=0; i<sudokuRow_1.length; i++){ // for loop will iterate through the  sudokuRow_1 
    if (sudokuRow_1[i] === 0){ //checks for 0 in the sudokuRow_1
        sudokuRow_1[i] = possiblerow1Values[0]; //replcae the values with 0 using shift
        possiblerow1Values.shift();
    
    }
}
console.log("Row 1 Output : " + sudokuRow_1);

// Sudoku 2nd row solving.

let sudokuRow_2 = [6, 8, 0, 0, 7, 0, 0, 9, 0];
console.log("Row 2 Input : " + sudokuRow_2);



let presentrow2Values =[];
 for (let i=0; i<sudokuRow_2.length; i++){
    if (sudokuRow_2[i]>0){
        presentrow2Values.push(sudokuRow_2[i]);
    }
 }

 let possiblerow2Values = [1,2,3,4,5,6,7,8,9];

 possiblerow2Values = possiblerow2Values.filter (function ( el ) {
    return presentrow2Values.indexOf ( el ) <0;
 } );

for (let i=0; i<sudokuRow_2.length; i++){
    if (sudokuRow_2[i] === 0){
        sudokuRow_2[i] = possiblerow2Values[0];
        possiblerow2Values.shift();

    }
}

console.log("Row 2 Output : " + sudokuRow_2);

// Sudoku 3rd row solving.

let sudokuRow_3 = [1, 9, 0, 0, 0, 4, 5, 0, 0];
console.log("Row 3 Input : " + sudokuRow_3);


let presentrow3Values =[];
 for ( let i=0; i<sudokuRow_3.length; i++){
    if (sudokuRow_3[i]>0){
        presentrow3Values.push(sudokuRow_3[i]);
    }
 }

 let possiblerow3Values = [1,2,3,4,5,6,7,8,9];
  possiblerow3Values =possiblerow3Values.filter (function  (el) {
    return presentrow3Values.indexOf ( el ) <0;
  } );

  for (let i=0; i<sudokuRow_3.length; i++){
    if (sudokuRow_3[i] === 0){
        sudokuRow_3[i] = possiblerow3Values[0];
        possiblerow3Values.shift();

    }
  }

  console.log("Row 3 Output : " + sudokuRow_3);

// Sudoku 4th row solving.

let sudokuRow_4 = [8, 2, 0, 1, 0, 0, 0, 4, 0];
console.log("Row 4 Input : " + sudokuRow_4);


let presentrow4Values =[];
 for ( let i=0; i<sudokuRow_4.length; i++){
    if (sudokuRow_4[i]>0){
        presentrow4Values.push(sudokuRow_4[i]);
 }  
    }
let possiblerow4Values = [1,2,3,4,5,6,7,8,9];
 possiblerow4Values = possiblerow4Values.filter (function (el) {
    return presentrow4Values.indexOf ( el ) <0;
 } );

 for (let i=0; i<sudokuRow_4.length; i++){
    if (sudokuRow_4[i] === 0){
        sudokuRow_4[i] = possiblerow4Values[0];
        possiblerow4Values.shift();

    }
 }

 console.log("Row 4 Output : " + sudokuRow_4);

// Sudoku 5th row solving.

let sudokuRow_5 = [0, 0, 4, 6, 0, 2, 9, 0, 0];
console.log("Row 5 Input : " + sudokuRow_5);


let presentrow5Values =[];
 for ( let i=0; i<sudokuRow_5.length; i++){
    if (sudokuRow_5[i]>0){
        presentrow5Values.push(sudokuRow_5[i]);
 }  
    }
let possiblerow5Values = [1,2,3,4,5,6,7,8,9];
 possiblerow5Values = possiblerow5Values.filter (function (el) {
    return presentrow5Values.indexOf ( el ) <0;
 } );

 for (let i=0; i<sudokuRow_5.length; i++){
    if (sudokuRow_5[i] === 0){
        sudokuRow_5[i] = possiblerow5Values[0];
        possiblerow5Values.shift();

    }
 }
 
 console.log("Row 5 Output : " + sudokuRow_5);

 // Sudoku 6th row solving.

 let sudokuRow_6 = [0, 5, 0, 0, 0, 3, 0, 2, 8];
console.log("Row 6 Input : " + sudokuRow_6);


let presentrow6Values =[];
 for ( let i=0; i<sudokuRow_6.length; i++){
    if (sudokuRow_6[i]>0){
        presentrow6Values.push(sudokuRow_6[i]);
 }  
    }
let possiblerow6Values = [1,2,3,4,5,6,7,8,9];
 possiblerow6Values = possiblerow6Values.filter (function (el) {
    return presentrow6Values.indexOf ( el ) <0;
 } );

 for (let i=0; i<sudokuRow_6.length; i++){
    if (sudokuRow_6[i] === 0){
        sudokuRow_6[i] = possiblerow6Values[0];
        possiblerow6Values.shift();

    }
 }

 console.log("Row 6 Output : " + sudokuRow_6);

//Sudoku 7th row solving.
 
 let sudokuRow_7 = [0, 0, 9, 3, 0, 0, 0, 7, 4];
console.log("Row 7 Input : " + sudokuRow_7);


let presentrow7Values =[];
 for ( let i=0; i<sudokuRow_7.length; i++){
    if (sudokuRow_7[i]>0){
        presentrow7Values.push(sudokuRow_7[i]);
 }  
    }
let possiblerow7Values = [1,2,3,4,5,6,7,8,9];
 possiblerow7Values = possiblerow7Values.filter (function (el) {
    return presentrow7Values.indexOf ( el ) <0;
 } );

 for (let i=0; i<sudokuRow_7.length; i++){
    if (sudokuRow_7[i] === 0){
        sudokuRow_7[i] = possiblerow7Values[0];
        possiblerow7Values.shift();

    }
 }

 console.log("Row 7 Output : " + sudokuRow_7);


 //Sudoku 8th row solving.
 
 let sudokuRow_8 = [0, 4, 0, 0, 5, 0, 0, 3, 6];
console.log("Row 8 Input : " + sudokuRow_8);


let presentrow8Values =[];
 for ( let i=0; i<sudokuRow_8.length; i++){
    if (sudokuRow_8[i]>0){
        presentrow8Values.push(sudokuRow_8[i]);
 }  
    }
let possiblerow8Values = [1,2,3,4,5,6,7,8,9];
 possiblerow8Values = possiblerow8Values.filter (function (el) {
    return presentrow7Values.indexOf ( el ) <0;
 } );

 for (let i=0; i<sudokuRow_8.length; i++){
    if (sudokuRow_8[i] === 0){
        sudokuRow_8[i] = possiblerow8Values[0];
        possiblerow8Values.shift();

    }
 }

 console.log("Row 8 Output : " + sudokuRow_8);
 
//Sudoku 9th row solving.
 
let sudokuRow_9 = [7, 0, 3, 0, 1, 8, 0, 0, 0];
console.log("Row 9 Input : " + sudokuRow_9);



let presentrow9Values =[];
 for ( let i=0; i<sudokuRow_9.length; i++){
    if (sudokuRow_9[i]>0){
        presentrow9Values.push(sudokuRow_9[i]);
 }  
    }
let possiblerow9Values = [1,2,3,4,5,6,7,8,9];
 possiblerow9Values = possiblerow9Values.filter (function (el) {
    return presentrow9Values.indexOf ( el ) <0;
 } );

 for (let i=0; i<sudokuRow_9.length; i++){
    if (sudokuRow_9[i] === 0){
        sudokuRow_9[i] = possiblerow9Values[0];
        possiblerow9Values.shift();

    }
 }

 console.log("Row 9 Output : " + sudokuRow_9);
 
// Solved 9 rows individually 
