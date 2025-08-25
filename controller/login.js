import userSchema from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login =async(req,res)=>{
    try{
        const{email,password}=req.body;

        const user=await userSchema.findOne({email:email});

        if (!user)
        {
          res.status(404).json({success: false,message: "user not found"})
        }

        const isMatch= await bcrypt.compare(password,user.password);

        if(!isMatch){
             res.status(400).json({success: false, message: "password incorrect"})
        }
        
           const token =jwt.sign({id:user._id, email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
           );
           res.status(200).json({success: true, message: "user logged in successfully",user:{email,id:user._id},token:token}
           )

    }catch(error){
     res.status(500).json({success: false, message: "Error logging in user",})
     console.log(error)   
    }

}
export default login   