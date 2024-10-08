const User = require('./user-model');


// const users = [
//     {id: 1, name: 'Vitaliy'},
//     {id: 2, name: 'Viktor'},
//     {id: 3, name: 'Ann'},
// ]

// const getUser = (req, res) => {
//     if (req.params.id) {
//         return res.send(users.find(user => user.id == req.params.id))
//     }
//     res.send(users);
// }
//
// const createUser = (req, res) => {
//     const user = req.body;
//     users.push(user);
//     res.send(user);
// }

const getUser = async (req, res) => {
    let users;
    if (req.params.id) {
        users = await User.findById(req.params.id);
    } else {
        users = await User.find()
    }
    res.send(users);
}

const createUser = async (req, res) => {
    const user = await User.create(req.body)
    res.send(user);
}

module.exports = {
    getUser,
    createUser,
}