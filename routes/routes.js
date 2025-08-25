import express, { Router } from 'express';
import login from '../controller/login.js'
import register from '../controller/register.js';
import {update,userDelete} from '../controller/update_delete.js'
import get from '../controller/view_user.js'
import auth from '../middleware/auth.js'
import  getProfile  from '../controller/view_profile.js';

const Routers=express.Router();
Routers.post('/register',register)
Routers.post('/login',login)
Routers.put('/update/:id',auth,update)
Routers.delete('/delete/:id',auth,userDelete)
Routers.get('/get',auth,get)
Routers.get('/profile',auth,getProfile)
export default Routers  