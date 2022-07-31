export class Token {
    
    constructor(jwt:string, refreshToken:string){

        this.Jwt = jwt;
        this.RefreshToken = refreshToken;

    }

    Jwt: string;
    RefreshToken: string;

}
