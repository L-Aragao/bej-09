//Encapsulamento serve para controlar o nivel de acesso de propriedade e metodos
//public ou nao anotar nada - significa que a propridade ou metodo esta totalmente livre para acessado
//protected - ele restrige o uso dentro das classes pai e filhas.
//private - encapsula tudo dentro da classe proprietaria.


class Classe{
    private propriedade1: string

    constructor(){
        this.propriedade1 = "propriedade"
    }

    protected getPropriedade(): any{
        return this.propriedade1;
    }

    // get propriedade(): string {
    //     return this.propriedade1
    // }
}

class Classe2 extends Classe{

    getPropriedade(): any {
        super.getPropriedade();
        console.log("metodo do filho")
    }
    
    //nao funciona pois o encapsulamento com PRIVATE torna a propriedade restrita
    // getPropriedade2(): any{
    //     return this.propriedade
    // }
}

let objeto: Classe = new Classe();
let objeto2: Classe2 = new Classe2();

objeto2.getPropriedade