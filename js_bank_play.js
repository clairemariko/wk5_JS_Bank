// var Bank = function(){
//   this.accounts = [100,200,300,400];
//   this.total = 0;

// }

// Bank.prototype = {
//   setTotal: function(){
//     this.total = 0;
//     this.accounts.forEach(function(account){
//       this.total += account;
//     });
//   }
// }

// var b = new Bank();

// b.setTotal();

// console.log('total', b.total);

//this add up to zero, so what happening here it should be a 1000! so let investigae:
var Bank = function(){
  this.accounts = [100,200,300,400];
  this.total = 0;

}

Bank.prototype = {
  setTotal: function(){
    this.total = 0;
    console.log('this outside forEach',this) //! let see
    this.accounts.forEach(function(account){
      console.log('this inside', this)//! let see
      this.total += account;
    }.bind(this));//by adding .bind(this) we are making sure this is what we want it to be. bind is a method on a function and can be call on any function
  }
}

var b = new Bank();

b.setTotal();

console.log('total', b.total);
 

 so we investigate and we get what looks like the whole of js file! what happens is we are not sure what is in a call back. so how to make sure we are setting it to do what we want to do.

 so we add the .bind(this) to make sure all our this are the one we want!

 we should get this in the terminal:
 this outside forEach { accounts: [ 100, 200, 300, 400 ], total: 0 }
 this inside { accounts: [ 100, 200, 300, 400 ], total: 0 }
 this inside { accounts: [ 100, 200, 300, 400 ], total: 100 }
 this inside { accounts: [ 100, 200, 300, 400 ], total: 300 }
 this inside { accounts: [ 100, 200, 300, 400 ], total: 600 }
 total 1000

THIS INSIDE is relating to what the each is doing in the callback and make sure it is binding to this. of the Bank. 
////////////////////////////////////////////////////////////////////













