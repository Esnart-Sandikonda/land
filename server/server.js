const express = require("express");
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//connecting to the database
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "landmanagement",
    password: "12345678",
    port: 5432,
});

// Admin logging in
app.post("/login", (req, res) => {
    const sql = "SELECT * FROM adminlogin WHERE email = $1 AND password = $2";
    const values = [req.body.email, req.body.password];
  
    pool.query(sql, values, (err, data) => {
      if (err) {
        return res.json("Error");
      }
      if (data.rows.length > 0) {
        return res.json("success");
      } else {
        return res.json("fail");
      }
    });
  });

// Admin creating user data
app.post('/property', (req, res) => {
  const sql = "INSERT INTO property_registry (username, email, password, nationality, area, district, gid) VALUES ($1, $2, $3, $4, $5, $6, $7)";
  const values = [
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.nationality,
      req.body.area,
      req.body.district,
      req.body.gid
  ];

  pool.query(sql, values, (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).json("Error inserting data");
      }

      // Commit the transaction
      pool.query('COMMIT', (commitErr) => {
          if (commitErr) {
              console.error(commitErr);
              return res.status(500).json("Error committing transaction");
          }

          res.json({ message: "Data inserted successfully" });
      });
  });
});


// Get all registed users
app.get('/users', (req, res) => {
  const sql = "SELECT * FROM property_registry";
  pool.query(sql, (err, data) => {
    if (err) {
      return res.status(500).json({
        error: 'Error retrieving users',
        message: err.message
      });
    }
    return res.json(data.rows);
  });
});
  
// start server
app.listen(8081, () => {
    console.log("listening");
});
