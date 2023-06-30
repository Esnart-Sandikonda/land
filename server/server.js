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
            console.error(err);
            return res.status(500).json("Error");
        }
        if (data.rows.length > 0) {
            return res.json("success");
        } else {
            return res.json("fail");
        }
    });
});

//user login
app.post("/userlogin", (req, res) => {
  const sql = "SELECT * FROM property_registry WHERE email = $1 AND password = $2";
  const values = [req.body.email, req.body.password];

  pool.query(sql, values, (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).json("Error");
      }
      if (data.rows.length > 0) {
          return res.json("success");
      } else {
          return res.json("fail");
      }
  });
});

//admin creating user
app.post('/property', (req, res) => {
  const sql = "INSERT INTO property_registry (username, email, password, nationality, area, district, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
  const { username, email, password, nationality, area, district, latitude, longitude } = req.body;

  const values = [
    username,
    email,
    password,
    nationality,
    area,
    district,
    parseFloat(latitude),
    parseFloat(longitude)
  ];

  pool.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Error inserting data");
    }

    res.json({ message: "Data inserted successfully" });
  });
});



// Get all registered users
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM property_registry";
    pool.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: 'Error retrieving users',
                message: err.message
            });
        }
        return res.json(data.rows);
    });
});
  
// Update registered user
app.put('/updateuser/:user_id', (req, res) => {
  const user_id = req.params.user_id;
  const {
    username,
    email,
    password,
    nationality,
    area,
    district,
    gid
  } = req.body;

  const sql = "UPDATE property_registry SET username = $1, email = $2, password = $3, nationality = $4, area = $5, district = $6, gid = $7 WHERE user_id = $8";
  const values = [
    username,
    email,
    password,
    nationality,
    area,
    district,
    gid,
    user_id
  ];

  pool.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Error updating user',
        message: err.message
      });
    }
    return res.json('User updated successfully');
  });
});

//admin deleting a user
app.delete('/deleteuser/:user_id', (req, res) => {
  const sql = "DELETE FROM property_registry WHERE user_id = $1";
  const user_id = req.params.user_id;

  pool.query(sql, [user_id], (err, result) => {
    if (err) {
      return res.json(err);
    }
    return res.json("deleted");
  });
});


// Admin view land of each registered user
app.get('/userview/:user_id', (req, res) => {
  const userId = req.params.user_id;

  const sql = `
    SELECT latitude, longitude
    FROM property_registry
    WHERE user_id = $1
  `;

  pool.query(sql, [userId], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        error: 'Error retrieving user land',
        message: err.message
      });
    }
    if (data.rows.length === 0) {
      return res.status(404).json({
        error: 'User land not found'
      });
    }
    const user = {
      latitude: data.rows[0].latitude,
      longitude: data.rows[0].longitude
    };
    return res.json(user);
  });
});


// Route to retrieve shapefile data from PostgreSQL
app.get('/shapefile', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM shape');
    const shapefileData = result.rows;

    res.json(shapefileData);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving shapefile data');
  }
});

//admin logout
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({Status: "Success"});
})

//user creating applying for lease
app.post('/leaseapplication', (req, res) => {
  const sql = "INSERT INTO leaseapplication (username, email, occupation, area, district, landtype) VALUES ($1, $2, $3, $4, $5, $6)";
  const values = [
      req.body.username,
      req.body.email,
      req.body.occupation,
      req.body.area,
      req.body.district,
      req.body.landtype
  ];

  pool.query(sql, values, (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).json("Error inserting data");
      }

      res.json({ message: "Data inserted successfully" });
  });
});

// Getting lease application system
app.get('/gettingleaseform', (req, res) => {
  const sql = "SELECT * FROM leaseapplication";
  pool.query(sql, (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).json({
              error: 'Error retrieving users',
              message: err.message
          });
      }
      return res.json(data.rows);
  });
});

app.get('/userCount', (req, res) => {
  knex('property_registry')
    .count('user_id as count')
    .then((result) => {
      res.json({ count: parseInt(result[0].count) }); // Parse the count as an integer
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

//count admin
app.get('/adminCount', (req, res) => {
  const sql = "SELECT count(id) AS admin FROM adminlogin";
  pool.query(sql, (err, result) => {
    if (err) return res.json({ Error: "Error in running query" });
    return res.json(result.rows);
  });
});

//registered users
app.get('/employeeCount', (req, res) => {
  const sql = "SELECT count(user_id) AS employee FROM property_registry";
  pool.query(sql, (err, result) => {
    if (err) return res.json({ Error: "Error in running query" });
    return res.json(result.rows);
  });
});

//received numberof lease applications
app.get('/leaseApplicationsCount', (req, res) => {
  const sql = "SELECT count(id) AS leaseapplications FROM leaseapplication";
  pool.query(sql, (err, result) => {
    if (err) return res.json({ Error: "Error in running query" });
    return res.json(result.rows);
  });
});

// Endpoint to send a notification to the user
app.post('/sendNotification/:user_id', (req, res) => {
  const user_id = req.params.user_id;
  const message = req.body.message;

  
  res.sendStatus(200);
});

// get admin profile
app.get('/get/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM adminlogin WHERE id = $1";
  pool.query(sql, [id], (err, result) => {
    if (err) return res.json({ Error: "Get employee error in SQL" });
    return res.json({ Status: "Success", Result: result.rows });
  });
});

// get user profile
app.get('/getuserprofile/:user_id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM property_registry WHERE id = $1";
  pool.query(sql, [id], (err, result) => {
    if (err) return res.json({ Error: "Get employee error in SQL" });
    return res.json({ Status: "Success", Result: result.rows });
  });
});



// Start server
app.listen(8081, () => {
    console.log("Listening on port 8081");
});