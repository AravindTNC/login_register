import mongoose from 'mongoose';

const dbCon=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('connected to the database');
        }

catch(error){
    console.log('error');
    console.log('not connected to the database');
}    
}
export default dbCon