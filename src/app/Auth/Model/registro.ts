export class Registro {

    constructor(email: string, password: string, confirmPassword: string){
        this.Email = email;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
    }
    
    Email: string; 
    Password: string;
    ConfirmPassword: string;
}
