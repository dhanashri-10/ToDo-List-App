import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



 const Connection = () => {

    const MONGODB_URI = `mongodb+srv://user:<password>@mern-todo.6ae3yjj.mongodb.net/?retryWrites=true&w=majority&appName=mern-todo`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfuly");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection;

