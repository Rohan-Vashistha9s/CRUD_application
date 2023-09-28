import express,{Router} from 'express';
import User from '../schema/userSchema.js';   
 
 const Routes = express.Router();

 Routes.post('/add', async (request,response) => {
    const user = request.body;
    
    const newUser = new User(user);
    try{
      await  newUser.save();
        response.status(201).json(newUser);
    } 
    catch(error){
        response.status(409).json({message: error.message})
    }
})

export default Routes;

