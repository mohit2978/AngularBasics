import { User } from "../model/user.model";

export class UserService{
    users:User[]
    constructor(){
        this.users=[
            new User("mohit","abc@gmail.com","engineer1"),
            new User("rohit","ab1c@gmail.com","engineer11"),
            new User("bohit","a1bc@gmail.com","engineer2"),
            new User("nohit","a111bc@gmail.com","engineer21"),
        ]
    }
    getUsers(){
        return this.users;
    }
    addUsers(u:User){
        this.users.push(u);
    }
}