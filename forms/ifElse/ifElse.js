let firstName= prompt("Enter your first name: ")
let userState = prompt ("Enter your state in the 2 letter acronym: ")
let temperature =Number(prompt("Enter a temperature in Fahreheit: "))

var stateCapital=userState.toUpperCase()
var capitalName=firstName.charAt(0).toUpperCase()+firstName.slice(1)

var userInfo=[`${capitalName}`,`${stateCapital}`,`${temperature}`]
console.log(`${userInfo}`)

if (userState== "NE" && temperature<32){
NSB.MsgBox(`${capitalName}, wear a warm coat, hat, scarf and gloves.`)
} else if (userState== "NE" && temperature>32 && temperature<50){
NSB.MsgBox(`${capitalName}, wear a warm coat but you won't need a hat, scarf or gloves.`)
} else if (userState=="FL" && temperature>32 && temperature<50){
NSB.MsgBox(`${capitalName}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
} else if (userState=="FL" && temperature>50 && temperature<70){
NSB.MsgBox(`${capitalName}, wear a warm coat, hat and gloves. Maybe a scarf too.`)
}
