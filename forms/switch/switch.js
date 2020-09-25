let firstName= prompt("Enter your first name: ")
let userState = prompt ("Enter your state in the 2 letter acronym: ")
let temperature = prompt("Enter a temperature in Fahreheit: ")

let stateCapital=userState.toUpperCase()
let capitalName=firstName.charAt(0).toUpperCase()+firstName.slice(1)

let userInfo=[`${capitalName}`,`${stateCapital}`,`${temperature}`]
console.log(`${userInfo}`)

switch(userInfo){
case(stateCapital== "NE" && temperature<32):
  NSB.MsgBox(`${capitalName}, wear a warm coat, hat, scarf and gloves.`);
  break;
case(userState== "NE" && temperature>32 && temperature<50):
  NSB.MsgBox(`${capitalName}, wear a warm coat but you won't need a hat, scarf or gloves.`);
  break;
case(userState== "FL" && temperature>32 && temperature<50):
  NSB.MsgBox(`${capitalName}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`);
  break;
case(userState== "FL" && temperature>50 && temperature<70):
  NSB.MsgBox(`${capitalName}, wear a warm coat, hat and gloves. Maybe a scarf too.`);
  break;
default:
 NSB.MsgBox("You did not provide enough information");
 break;
 }
