import userSchema from "../model/user.js";
import bcrypt from 'bcrypt';
const register =async(req,res)=>{
    try{
        const{name, email,password}=req.body;
        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        const newUser=new userSchema({  name, email,password   }) 
        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        newUser.password=hashedPassword;
        await newUser.save();
        res.status(201).json({success:true,message:"registered sucessfully", user:newUser});

    }
    catch(error){
        res.status(500).json({success: false, message: "Error registering user"})
    }
}
export default register