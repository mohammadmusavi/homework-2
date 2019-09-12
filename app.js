var hotel = {
    place: "tehran",
    name: "azadi",
    star: 3,
    room: 25,
    Personnel: 40,
    phone: 55223377,
    manager: "musavi"
}
var property = prompt("Enter property name to see value...");
var answer = prompt("The value of " + property + " is : " + hotel[property] + " . Do you want to update ?");
(answer == "yes") ? (typeof hotel[property] == "number") ? hotel[property] = Number(prompt("Enter new value...")): hotel[property] = prompt("Enter new value..."): false;
console.log(hotel);