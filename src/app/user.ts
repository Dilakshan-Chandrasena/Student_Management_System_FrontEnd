// Blueprint to create user objects while logging
export class User{

    constructor(
        public id:number,
        public email:string,
        public password:string,
        public role:string
    ){}
}