const express = require ('express');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

//Object Users an array of User
const Users = [
    {
        'id': '1',
        'name': 'Alfred',
        'lastName': 'Gonzalez Fernandez',
        'adress': 'Algun sitio'
    },
    {
        'id': '2',
        'name': 'Marta',
        'lastName': 'García Hernandez',
        'adress': 'Otro sitio'
    }
]

//Get all users
app.get('/api/user',(req,res) =>{
    res.send({Users});
})

// Get one specific user
app.get('/api/user/:id',(req,res) =>{
    
    let param = req.params.id
    let user = Users.filter((item) =>item.id === param)
    res.send({'User': user})
})

//Post any User
app.post('/api/user',(req,res)=>{
    
    let User = req.body
    res.send({User})
})


//Up connection
app.listen('7000', (err, res) => {
    if (!err){
        console.log('Connected')
    }
    else{
        console.log("Connection failed")
    }
})
