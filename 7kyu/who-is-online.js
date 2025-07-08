//❗DESCRIPTION
// You have a group chat application, but who is online!?

// You want to show your users which of their friends are online and available to chat!

// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// The input data has the following structure:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }]
// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).

//TESTS:
// friends = [{
//       username: 'David',
//       status: 'online',
//       lastActivity: 10
//     }, {
//       username: 'Lucy',
//       status: 'offline',
//       lastActivity: 22
//     }, {
//       username: 'Bob',
//       status: 'online',
//       lastActivity: 104
//     }]
//     Test.assertDeepEquals(whosOnline(friends), {
//       online: ['David'],
//       offline: ['Lucy'],
//       away: ['Bob']
//     }, 'Wrong result for example one of each')
//   })

//   it('Example test no one online', function () {
//     friends = [{
//       username: 'Lucy',
//       status: 'offline',
//       lastActivity: 22
//     }, {
//       username: 'Bob',
//       status: 'online',
//       lastActivity: 104
//     }]

//     Test.assertDeepEquals(whosOnline(friends), {
//       offline: ['Lucy'],
//       away: ['Bob']
//     }, 'Wrong result for example no one online')

//💡SOLUTION:

let friends = [{
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]

const whosOnline = (friends) => {
    let result = {}
    result.online = []
    result.offline = []
    result.away = []
    let online = false
    let offline = false
    let away = false
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
            result.online.push(friends[i].username)
            online = true
        } else if (friends[i].status === 'offline') {
            result.offline.push(friends[i].username)
            offline = true
        } else if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
            result.away.push(friends[i].username)
            away = true
        }
    }
    if (!online) {
        delete result.online
    } if (!offline) {
        delete result.offline
    } if (!away) {
        delete result.away
    }
    return result
}


