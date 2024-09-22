
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome; 
        this.idade = idade; 
        this.tipo = tipo; 
    }

    
    atacar() {
        let ataque; 
        
        
        if (this.tipo === 'mago') {
            ataque = 'usou magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'usou espada';
        } else if (this.tipo === 'monge') {
            ataque = 'usou artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'usou shuriken';
        } else {
            ataque = 'usou um ataque desconhecido';
        }

        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const herois = [
    new Heroi('Carlos', 100, 'mago'),
    new Heroi('Joao', 70, 'guerreiro'),
    new Heroi('Miguel', 60, 'monge'),
    new Heroi('Silvio', 50, 'ninja')
];


for (let heroi of herois) {
    heroi.atacar();
}
