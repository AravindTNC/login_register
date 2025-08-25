import userSchema from "../model/user.js";

 const get=async(req,res) => {
    try{
        const users =await userSchema.find();

     if(!users){
        res.status(404).json({ sucess: false, message:"no user found"})
        }
           res.status(200).json({success :true , message: "fetched",user:users})

       
    }
    catch(error){
        res.stats(500).json({success: false, message: "Error fetching users"})

    }
}
export default get