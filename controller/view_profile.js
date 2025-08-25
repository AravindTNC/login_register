 import userSchema from "../model/user.js";

 const getProfile =async(req,res)=>{
     try{
        const user =await userSchema.findById(req.user.id);
        if(!user){
         return res.status(404).json({success: false, message: "user not found"})
        }
         res.status(200).json({success: true, message: "user profile", user:user});
     }
     catch(error){
        res.status(500).json({success: false, message: "Error fetching user profile"})
     }
 }
 export default getProfile
