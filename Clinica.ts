import { Animal } from "./Animal";
import { Funcionario } from "./Funcionario";

export class Clinica {
    private animais: Animal[] = [];
    private funcionarios: Funcionario[] = [];

    constructor(public nome: string) {}

    cadastrarAnimal(animal: Animal): void {
        this.animais.push(animal);
    }

    contratarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    listarAnimais(): Animal[] {
        return this.animais;
    }

    listarFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }
}
