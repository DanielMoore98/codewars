//❗DESCRIPTION
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//TESTS:
// doTest("test", "es");
// doTest("testing", "t");
// doTest("middle", "dd");
// doTest("A", "A");

//💡SOLUTION:

function getMiddle(s) {
    if (s.length % 2 === 0) {
        if (s.length > 2) {
            return s.slice(s.length / 2 - 1, s.length / 2 + 1)
        } else {
            return s
        }
    } else {
        if (s.length > 1) {
            return s.slice((s.length + 1) / 2 - 1, (s.length + 1) / 2)
        } else {
            return s
        }
    }
}


