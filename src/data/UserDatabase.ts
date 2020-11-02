import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "Fillet_Users"

  public async signupUser(
    id: string,
    firstName: string,
    lastName: string,
    phone: number,
    email: string,
    password: string
  ): Promise<void> {
    try {
      await this.getConnection()
      .insert({
        id, firstName, lastName, phone, email, password
      })
      .into(UserDatabase.TABLE_NAME)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)  
    }
  }
}