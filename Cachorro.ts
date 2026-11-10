import { Animal } from "./Animal";

export class Cachorro extends Animal {
    emitirSom(): string {
        return `${this.nome} late: au au!`;
    }

    cuidadosDiarios(): string {
        return `${this.nome} precisa de passeio diário e alimentação adequada.`;
    }
}
