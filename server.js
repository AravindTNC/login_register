import express from 'express';   
import routers from './routes/routes.js';       
import conDB from './util/db.js';
import dotenv from 'dotenv';
import dbCon from './util/db.js';



const app=express()
dotenv.config()
dbCon()
app.use(express.json())
app.use('/',routers)

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});