const express = require('express');
const mysql = require('mysql2/promise');
const app = express();


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'Password_19',
    database: 'simple_crud',
})


db.query("SELECT 1")
.then((data) => {
    console.log("DB connection worked")
}).catch((err) => {
    console.log("DB connection failed \n " + err)
});


