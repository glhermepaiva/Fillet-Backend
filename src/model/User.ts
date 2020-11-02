export class User {
  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private phone: number,
    private email: string,
    private password: string
  ){}
  
  getId(){
    return this.id
  }

  getFirstName(){
    return this.firstName
  }

  getLastName(){
    return this.lastName
  }

  getPhone(){
    return this.phone
  }

  getEmail(){
    return this.email
  }

  getPassword(){
    return this.password
  }

  setFirstName(firstName: string){
    this.firstName = firstName
  }

  setLastName(lastName: string){
    this.lastName = lastName
  }

  setPhone(phone: number){
    this.phone = phone
  }

  setEmail(email: string){
    this.email = email
  }

  setPassword(password: string){
    this.password = password
  }
}

export interface UserInputDTO {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  password: string;
}