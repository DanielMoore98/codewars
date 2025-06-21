//❗DESCRIPTION
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

//TESTS:
// describe("addProperty", function() {
//   var obj = {};
//   before(function() {
//     obj = {};
//     addProperty(obj, "name", "Palle");
//   });
//   it("Should set the value of the property", function() {
//     Test.expect(obj.name === "Palle");
//   });
//   it("Should allow setting the new property to another value", function() {
//     obj.name = "Dylan";
//     Test.expect(obj.name === "Dylan");
//   });
//   it("Should throw an error if the property already exists", function() {
//     Test.expectError("Did not throw expected error", function() {
//       addProperty(obj, "name", "Palle");
//     });
//   });

//💡SOLUTION:
const test = { name: 'Palle' }
function addProperty(obj, prop, value) {
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    if (keys.includes(prop)) {
        throw new Error('property already exists')
    } else {
        obj[prop] = value
    }
}

