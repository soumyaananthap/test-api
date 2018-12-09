var mongoose = require('mongoose');

var Todo = new mongoose.Schema({
    // id: {
    //     type: Number
    // },
    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    dueDate: {
        type: Date
    }
    // done: {
    //     type: Boolean
    // }
},
    {
       collection: 'todos'
    }
);


module.exports = mongoose.model('Todo', Todo)