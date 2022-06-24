const express = require('express');
require('./db/dbConfig');
const Student = require('./db/students')
const cors = require('cors');
const app = express();
app.listen(8080);

app.use(express.json());
app.use(cors());

// api for student registration
app.post('/registration', async (req, resp)=>{
    let student = new Student(req.body)
    let result = await student.save(req.body)
    result = result.toObject();
    delete result.password
    if(result){
        resp.send(result);
    }
});

// api for student login
app.post('/login', async (req, resp)=>{
    if(req.body.email && req.body.password) {
        let result = await Student.findOne(req.body).select('-password')
        if(result){
            resp.send(result);
        } else{
            resp.send('No user is found');
        }
    } else {
        resp.send('No user found');
    }
});