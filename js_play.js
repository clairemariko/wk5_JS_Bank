var myArray = [1,2,3,4,5];

// for (var item of myArray){
//   console.log('item' + item);
// }


//this is doing the exact same as before, we are telling the array, her here the function instead of me doing it, you do it.


// myArray.forEach(function(item){
//   console.log('item' + item);
// });

//now let me it into a call back function! so make the function equal to a variable, this variable is now put in as an argument

var printItem = function(item){
  console.log('item' + item);
};

myArray.forEach(printItem);

//writting our own for each if we didnt have this wonderful forEach
var myArray = [1,2,3,4,5];

var ourForEach = function(array, callOnItem){
  for(var item of array){
    callOnItem(item);
  }
};

ourForEach(myArray, function(item){
  console.log('the item is', item);
});

//this is what happen within the forEach method, we pass through an array and a callback function. in our own made each method we want to FOR each Item in the Array, we set it to -callOnItem which relaates to funcion(item) in ourForEach.





