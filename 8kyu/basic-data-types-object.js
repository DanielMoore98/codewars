//❗DESCRIPTION
// In JavaScript, Object is one of basic data types. To define an object you can use let obj = new Object() or let obj = {}.

// You can define the object attributes during initialization, like this:

// let animal = {name: "dog"}
// you can also set/get some properties after the object definition, like this:

// let animal = {}
// animal.name = "dog"
// // or:
// animal["name"] = "dog"
// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

//TESTS:
// it("white dog with 4 legs", () => {
//     assert.strictEqual(animal({ name: "dog", legs: 4, color: "white" }), "This white dog has 4 legs.");
//  });

//   it("red cock with 2 legs", () => {
//     assert.strictEqual(animal({ name: "cock", legs: 2, color: "red" }), "This red cock has 2 legs.");
//  });

//   it("gray rabbit with 4 legs", () => {
//     assert.strictEqual(animal({ name: "rabbit", legs: 4, color: "gray" }), "This gray rabbit has 4 legs.");
//  });

//💡SOLUTION:


function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

