let name = {
    firstName: "Sudhesh",
    lastName: "Holla"
}

let printFullName = function(place){
    console.log("My name is " + this.firstName + " " + this.lastName + "," + "from " + place)
}

let name2 = {
    firstName: "Sukhesh",
    lastName: "Holla"
}
printFullName.call(name, "udupi")
printFullName.apply(name2, ["kundapur"])

//bind keeps the copy and invoked later

let myFullName = printFullName.bind(name, "udupi")
myFullName();