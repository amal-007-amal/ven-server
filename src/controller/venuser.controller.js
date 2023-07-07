'use restrict'

const User = require('../models/venuser.model');

exports.findAll = function(req, res) {
    User.findAll(function(err, employee) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', employee);
      res.send({message:"SUCCESS","data":employee});
    });
  };
  
  
  exports.create = function(req, res) {
      const new_employee = new User(req.body);
    console.log("user data ",new_employee)
      //handles null error 
     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
          res.status(400).send({ error:true, message: 'Please provide all required field' });
      }else{
          User.create(new_employee, function(err, employee) {
              if (err)
              res.send(err);
              res.json({error:false,message:"SUCCESS",data:employee});
          });
      }
  };


  exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'SUCCESS' });
    }else{
        console.log("req ",req.body)
        User.update(new User(req.body), function(err, employee) {
            console.log(err)
            console.log(employee)
            if (err)
            res.send(err);
            res.json({ error:false, message: 'SUCCESS' });
        });
    }
  

};