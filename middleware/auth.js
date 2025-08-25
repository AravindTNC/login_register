import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  
  const token = req.header("Authorization")?.replace("Bearer ", "");// we need to get the header in bearer token format
// we use this instaed of split because we need to remove the bearer word  
  if (!token) {
    return res.status(401).json({ message: "No token, access denied" });
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    req.user = decoded;  

    next(); 
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
  console.log("req.user.id:", req.user.id);
console.log("req.params.id:", req.params.id);

};
export default auth