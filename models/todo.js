var mongoose = require('mongoose');

var todo = new mongoose.Schema({
    id: {
        type: Number
    },
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
},
    {
       collection: 'todos'
    }
);


module.exports = mongoose.model('Todo', todo)