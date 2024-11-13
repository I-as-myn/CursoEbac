class Animal {
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`${this.nome} está fazendo um som.`);
    }
}

class Cachorro extends Animal{
    falar(){
        console.log(`${this.nome} diz: Au Au!`);
    }
}

class Gato extends Animal{
    falar(){
        console.log(`${this.nome} diz: Miau!`);
    }
}

const cachorro1 = new Cachorro("Rex");
const cachorro2 = new Cachorro("Belinha");
const gato1 = new Gato("Mingau");

cachorro1.falar();
cachorro2.falar();
gato1.falar();