//❗DESCRIPTION
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//TESTS:
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');

//💡SOLUTION:
function solution(str) {
    let strReverse = ''
    for (i = str.length - 1; i >= 0; i--) {
        strReverse += str[i]
    }
    return strReverse
}

