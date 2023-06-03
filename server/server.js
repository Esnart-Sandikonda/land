const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//connecting to the database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "land"
})

//admin registering
app.post('/adminlogin', (req, res) =>{
    const sql = "INSERT INTO adminlogin (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

//admin loging in
app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM adminlogin WHERE `email` = ? && `password` = ?";
    db.query(sql, [ req.body.email, req.body.password ], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("success");
        } else{
            return res.json("fail")
        }
    })
})

//
app.get('/users', (req, res) =>{
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

//admin creating user data
app.post('/createuser', (req, res) =>{
    const sql = "INSERT INTO users (`username`, `email`, `password`, `area`, `district`,`land_type`, `latitude`, `longitude`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
                req.body.username,
                req.body.email,
                req.body.password,
                req.body.area,
                req.body.district,
                req.body.landType,
                req.body.latitude,
                req.body.longitude
    ]
    db.query(sql, values, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

//admin updating user data
app.put('/updateuser/:user_id', (req, res) =>{
    const sql = "UPDATE users SET `username`= ?, `email` = ?, `password`= ?, `area`=?, `district`=?, `land_type`=?, `latitude`=?, `longitude`=? WHERE user_id = ?";
    const user_id =req.params.user_id;
    const values = [
                req.body.username,
                req.body.email,
                req.body.password,
                req.body.area,
                req.body.district,
                req.body.landType,
                req.body.latitude,
                req.body.longitude,
                user_id
    ];
    db.query(sql, [...values, user_id], (err, data) =>{
        if(err) return res.json(err);
        return res.json("updated");
    })
})

//admin deleting a user
app.delete('/deleteuser/:user_id', (req, res) =>{
    const sql = "DELETE FROM users WHERE user_id = ?";
    const user_id =req.params.user_id;
    db.query(sql, [user_id], (err, data) =>{
        if(err) return res.json(err);
        return res.json("deleted");
    })
})

//user loging in
app.post('/userlogin', (req, res) => {
    const { email, password } = req.body;
  
    const sql = "SELECT email, password FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, data) => {
      if (err) {
        return res.json(err);
      }
  
      if (data.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      return res.json(data);
    });
  });
  
//posting user lease application form to database
app.post('/leaseapplication', (req, res) =>{
    const sql = "INSERT INTO leaseapplication (`username`, `email`, `password`, `area`, `district`) VALUES (?, ?, ?, ?, ?)";
    const values = [
                req.body.username,
                req.body.email,
                req.body.password,
                req.body.area,
                req.body.district,

    ]
    db.query(sql, values, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})  

//getting lease forms to admin
app.get('/gettingleaseform', (req, res) =>{
    const sql = "SELECT * FROM leaseapplication";
    db.query(sql, (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
  
// start server
app.listen(8081, () => {
    console.log("listening");
})