var express = require('express');
// var todoRoutes = express.Router();
var router = express.Router();
// var Todo = require('./Todo')
var port = 3000;
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.listen(port, () => {
  console.log("Server listening on port " + port);
 });

module.exports = router;


// todoRoutes.route('/all').get(function(req,res,next){
//   Todo.find(function(todos){
//     if(!todos){
//       return [];
//     }
//     res.json(todos);
//   })
// })

// router.route('/todos/user').post(function(req,res){
//   Todo.create(
//     {
//       id: id,
//       name: req.body.name,
//       description: req.body.description,
//       status: pending|completed,
//       dueDate: new Date(this.valueOf() + days * 24 * 60 * 60 * 1000 )
//     },
//     function(error,todo){
//       if(error){
//         res.status(400).send('unable to create todo list')
//       }
//       res.status(204).send('status created')
//     }
//   )
// })


