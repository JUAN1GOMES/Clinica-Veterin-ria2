import { Animal } from "./Animal";

export class Ave extends Animal {
    emitirSom(): string {
        return `${this.nome} canta.`;
    }

    cuidadosDiarios(): string {
        return `${this.nome} precisa de uma gaiola limpa e alimentação adequada.`;
    }
}
