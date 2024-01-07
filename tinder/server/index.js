
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');
const PORT = 8000;
const uri = 'mongodb+srv://tinder-project:passwordmy123@cluster0.cdtoktt.mongodb.net/Cluster0?retryWrites=true&w=majority';

const app = express();
app.use(cors());
app.use(express.json());

const privateKey = 'myKey';


app.get('/', (req, res) => {
    res.json('Hello to my app');
})

app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;

    const generatedUserId = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await client.connect()
        const database = client.db('app-data');
        const users = database.collection('users');

        // console.log(database);
        // console.log(users);

        const existingUser = await users.findOne({ email: email });

        if (existingUser) {
            return res.status(409).send('User already exists. Please log in');
        } else {
            const normalizedEmail = email.toLowerCase();

            const data = {
                user_id: generatedUserId,
                email: normalizedEmail,
                hashed_password: hashedPassword
            }
            const insertedUser = users.insertOne(data);

            const token = jwt.sign({ user: insertedUser, email: normalizedEmail }, privateKey, {
                expiresIn: 60 * 24,
            })

            res.status(201).json({ token, userId: generatedUserId, email: normalizedEmail });

        }
    } catch (error) {
        console.log('error: ' + error);
    }

})


app.post('/login', async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;

    try {
        await client.connect();
        const database = client.db('app-data');
        const users = database.collection('users');

        const user = await users.findOne({ email: email });

        const correctPassword = await bcrypt.compare(password, user.hashed_password);

        if (user && correctPassword) {
            const token = jwt.sign({ user: user, email: email }, privateKey, {
                expiresIn: 60 * 24,
            })
            res.status(201).json({ token, userId: user.userId, email})
        }
        res.status(400).send('Invalid credentials!');
    } catch (error) {
        console.log(error);
    } 
})



app.get('/users', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('app-data');
        const users = database.collection('users');
        const returnedUsers = await users.find().toArray();
        res.send(returnedUsers);
    } finally {
        await client.close();
    }
})

app.listen(PORT, console.log(`Server running on port: ${PORT}`))

