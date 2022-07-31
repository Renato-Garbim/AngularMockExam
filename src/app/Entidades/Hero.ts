export class Hero {
    
    constructor(id:number, name:string, power:string, sidekick:string, idade:number, tipoSanguineo:string){
        this.Id = id;
        this.Name = name;
        this.Power = power;
        this.Sidekick = sidekick;
        this.Idade = idade;
        this.TipoSanguineo = tipoSanguineo;
    }


    Id: number;
    Name: string;
    Power: string;
    Sidekick: string;
    Idade: number;
    TipoSanguineo: string;
}