
// let res = String.fromCharCode(99)
// console.log(arr[4].charCodeAt()- arr[3].charCodeAt());
// console.log(res);
// let res = arr.join(' ');
// for(let i=0, j=1; i< arr.length, j<arr.length; i++, j++ ){
//    let res = arr[j].charCodeAt() - arr[i].charCodeAt();

//    if(res >1){
//      let fin = arr[j].charCodeAt() - 1
//      return String.fromCharCode(fin);
     
//    }
    

// function findMissing(arr){
//   let array = arr;
//  for(let i=0, j=1; i< array.length, j<array.length; i++, j++ ){
//     let res = array[j].charCodeAt() - array[i].charCodeAt();
 
//     if(res >1){
//       let fin = array[j].charCodeAt() - 1
//      console.log( String.fromCharCode(fin));
      
//     }

function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}

findMissingLetter(['a','b','c','d','f'])

let arr =['a','b','c','d','f'];
var i=arr[0].charCodeAt();
console.log(i);
arr.map(x=>console.log(x.charCodeAt()))