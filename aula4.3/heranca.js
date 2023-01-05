class Hero{
    name;
    planet; 
    power;

    constructor(name, planet, pw){
        this.name = name;
        this.planet = planet;
        this.power = pw;
    }

    setPower( pw ){
        this.power = pw
    }

}

class MarvelHero extends Hero{
    weakeness

    setWeakeaness( weak ){
        this.weakeness = weak
    }

    setPower( pw, agility ){
        this.power = pw * agility
    }
}


class DCHero extends Hero{

    constructor(){
        super()
        console.log("construtor da filho sobrescreve o do pai")
    }

    setPower( pw, lucky ){
        this.power = pw * lucky
    }
}


let hero = new Hero();
// hero.setPower(100);
console.log(hero)

let marvel = new MarvelHero();
// marvel.setPower( 100, 100)
console.log(marvel)

let dc = new DCHero();
// dc.setPower(100, 20)
console.log(dc)
