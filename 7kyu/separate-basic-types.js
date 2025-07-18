//❗DESCRIPTION
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

//TESTS:
//  it("given ['a', 1, 2, false, 'b']", function() {
//     assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
//   });

//   it("given ['a', 1, 2 ]", function() {
//     assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});
//   });

//💡SOLUTION:
function separateTypes(input) {
    let obj = {
        number: [],
        string: [],
        boolean: []
    }
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] == "number") {
            obj.number.push(input[i])
        } else if (typeof input[i] == "string") {
            obj.string.push(input[i])
        } else if (typeof input[i] == "boolean") {
            obj.boolean.push(input[i])
        }
    }

    if (obj.number.length === 0) {
        delete obj.number
    }
    if (obj.string.length === 0) {
        delete obj.string
    } 
    if (obj.boolean.length === 0) {
        delete obj.boolean
    }

    return obj
}


console.log(separateTypes([]));
