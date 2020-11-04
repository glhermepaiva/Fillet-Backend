import { UserDatabase } from "../data/UserDatabase"
import { UserInputDTO } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
  async signupUser(user: UserInputDTO){
    if (!user.firstName || !user.lastName || !user.email || !user.phone || !user.password){
      throw new Error("Please make sure all fields are complete");
    }

    if (user.email.indexOf("@") === -1){
      throw new Error("Invalid email, please try again");
    }

    if (user.password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(user.password);

    const userDatabase = new UserDatabase();
    await userDatabase.signupUser(id, user.firstName, user.lastName, user.phone, user.email, hashPassword);

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({id});

    return accessToken
  }

  async getInfo(userId: string){

    const userDatabase = new UserDatabase();
    const result = await userDatabase.getUserInfoById(userId);

    return result
  }
}