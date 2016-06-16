var _ = require('lodash');

var myArray = [1,2,3,4,5];

_.forEach(myArray, function(item){
  console.log('the item is'+ item);
})


var doubledArray = _.map(myArray, function(item){
  return item * 2;
//map is an empty array that is shoving the result of *2 in it
});

console.log('doubled array', doubledArray)