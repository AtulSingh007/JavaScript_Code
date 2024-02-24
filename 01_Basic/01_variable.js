const userid=945678
let username="Atul Singh"
var usercity="Delhi"
userstate="Delhi"

console.log(userid);
console.log(username);
console.log(usercity);
console.log(userstate);

console.table([userid,username,usercity,userstate])

userid=1001 // this is constant so we are not able to change the value once it will assign.

console.log(userid);

// avoid using var because it has issue with block level use.try to use let only instead of Var keyword.
