import { Animal } from "./Animal";

export class Gato extends Animal {
    emitirSom(): string {
        return `${this.nome} mia: miau!`;
    }

    cuidadosDiarios(): string {
        return `${this.nome} precisa de um arranhador, água e alimentação adequada.`;
    }
}
