import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { indexRouter } from "./routers";
import morgan from "morgan";


dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


const dbConnection : string = 'mongodb+srv://rudiwidodo098:akusayangkamu123@cluster0.7ryaewz.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(dbConnection)
    .then(() => {
        console.log('Database has been connected successfully')
    })
    .catch(err => {
        console.error('Error connect to database', err.message)
    })

app.use('/api/v1', indexRouter)

app.all('*', (req, res) => {
    res.status(404).json({
        status : 404,
        message : 'Route Not Found'
    })
})

export default app;
