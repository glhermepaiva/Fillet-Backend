import {Request, Response} from 'express'
import {UserBusiness} from '../business/UserBusiness'
import {UserInputDTO} from '../model/User'

export class UserController {
  async signup(req: Request, res: Response) {
    
    const userBusiness = new UserBusiness();
    
    try {
      const input: UserInputDTO ={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
      }
      const token = await userBusiness.signupUser(input);
      
      res.status(200).send({message:`Signup complete, welcome ${input.firstName}!`, token});

    } catch (error) {
      res.status(400).send({error: error.message});
    }
  }

  async getInfo(req: Request, res: Response) {

    const userBusiness = new UserBusiness();

    try {

      const id = req.body.id
      
      const result = await userBusiness.getInfo(id);

      res.status(200).send({message:"Here are the information for the selected user:", result});

    } catch (error) {
      res.status(400).send({error: error.message});
    }
  }
}