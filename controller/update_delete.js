import userSchema from "../model/user.js";


export const update =async(req,res)=>{

    const id  = req.params.id;// only if i give the req.params.id it is taken as a string else it is taken as object 
    //and below if (req.user.id !== id) will not work as object is not equal to string even though they are identical

  
  if (req.user.id !== id) {
    return res.status(403).json({ success: false, message: "You can only update your own account" });
  }
    try{
       
    const user_update=await userSchema.findByIdAndUpdate(req.params.id,req.body,{new:true});
    console.log(user_update);       
     if (!req.params.id){
            return res.status(404).json({success: false, message: "user not found"})
        }
    res.status(200).json({success:true, message: "user updated successfully", user:user_update});
    }
    catch(error){
        res.status(500).json({success: false, message: "Error updating user"})
    }

    }

export const userDelete =async(req,res)=>{
    
    const id= req.params.id//same as above
    if (req.user.id !== id) {
        return res.status(403).json({ success: false, message: "You can only delete your own account" });
      }
    
    try{
        const deletuser= await userSchema.findByIdAndDelete(req.params.id)
        if (!deletuser) {
        return res.status(404).json({ success: false, message: 'user Not found' });
        }
        res.status(200).json({ success: true, message: 'user Deleted successfully' });
     } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}


