export abstract class Animal {
    constructor(
        public nome: string,
        public idade: number,
        public tutor: string
    ) {}

    abstract emitirSom(): string;
    abstract cuidadosDiarios(): string;
}
