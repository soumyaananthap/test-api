// var express = require('express');
// // var todoRoutes = express.Router();
// var router = express.Router();
// // var Todo = require('./Todo')
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// // todoRoutes.route('/all').get(function(req,res,next){
// //   Todo.find(function(todos){
// //     if(!todos){
// //       return [];
// //     }
// //     res.json(todos);
// //   })
// // })

// router.route('/add').post(function(req,res){
//   Todo.create(
//     {
//       name: req.body.name,
//       done: false
//       //id: id,
//       // name: req.body.name,
//       // description: req.body.description,
//       // //status: pending|completed,
//       // dueDate: new Date(this.valueOf() + days * 24 * 60 * 60 * 1000 )
//     },
//     function(error,todo){
//       if(error){
//         res.status(400).send('unable to create todo list')
//       }
//       res.status(204).send('status created')
//     }
//   )
// })

// // app.post('/api/todos', function(req,res){
// //   Todo.create({
// //     id: id,
// //     name: req.body.name,
// //     description: req.body.description,
// //     status: pending|completed,
// //     dueDate: new Date(this.valueOf() + days * 24 * 60 * 60 * 1000 )
// //   }).then(todo=>{
// //     res.json(todo);
// //   });
// // });

// module.exports = router;

'use strict'
var express = require('express')
// console.log(express);

var todoRoutes = express.Router()
// console.log(todoRoutes);

var Todo = require('../models/todo')
// console.log(Todo);
// get all todos in the db

// get all todos

todoRoutes.route('/all').get(function (req, res, next) {
  // console.log('hi');
  Todo.find(function (err, todos) {
    // console.log(err);
    // console.log(todos);
    // console.log(req);
    // console.log(res);
    // console.log(next);
    if (err) {
      return next(new Error(err))
    }
    // res.send('respond with a resource');
    res.json(todos) // return all todos
    // alert(todos);
    next;
    
  })
})


// create a todo item
todoRoutes.route('/add').post(function (req, res, next) {
  // console.log('hello');
  Todo.create(
    {
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
      dueDate: Date.now()
    },
    function (error, todo) {
      if (error) {
        res.status(400).send('Unable to create todo list')
      }
      res.status(200).json(todo)
      next;
    }
  )
})

// get a todo item by id 
todoRoutes.route('/id').get(function(req,res,next){
  console.log('hii');
  var id = req.params.id
  console.log(id);
  Todo.findById(id,function(err,todo){
    if(err){
      res.status(400).send('todo does not exist')
    }
    res.status(200).json(todo)
    next;
  })
})

// delete a todo item

todoRoutes.route('/delete/:id').delete(function (req, res, next) {
  var id = req.params.id
  Todo.findByIdAndRemove(id, function (err, todo) {
    if (err) {
      return next(new Error('Todo was not found'))
    }
    res.json('Successfully removed')
  })
})

// perform update on todo item

todoRoutes.route('/update/:id').put(function (req, res, next) {
  // console.log('hello todo');
  var id = req.params.id
  Todo.findById(id, function (error, todo) {
    if (error) {
      return next(new Error('Todo was not found'))
    } else {
      todo.name = req.body.name
      todo.description = req.body.description
      todo.status = req.body.status
      todo.dueDate = Date.now()

      todo.save({
        function (error, todo) {
          if (error) {
            res.status(400).send('Unable to update todo')
          } else {
            res.status(200).json(todo)
          }
        }
      })
    }
  })
})

// patch update on todo item

todoRoutes.route('/users/:id').patch(function (req, res, next) {
  // console.log('hello node');
  var id = req.params.id
  Todo.findById(id, function (error, todo) {
    if (error) {
      return next(new Error('Todo was not found'))
    } else {
      todo.name = req.body.name
      todo.description = req.body.description
      todo.status = req.body.status
      todo.dueDate = Date.now()

      todo.save({
        function (error, todo) {
          if (error) {
            res.status(400).send('Unable to update todo')
          } else {
            res.status(200).json(todo)
          }
        }
      })
    }
  })
})

module.exports = todoRoutes