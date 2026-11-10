export abstract class Funcionario {
    private salario: number;

    constructor(
        public nome: string,
        public matricula: string,
        salarioInicial: number
    ) {
        this.salario = 0;
        this.alterarSalario(salarioInicial);
    }

    getSalario(): number {
        return this.salario;
    }

    alterarSalario(novoSalario: number): void {
        if (novoSalario <= 0) {
            throw new Error("O salário precisa ser maior que zero.");
        }

        this.salario = novoSalario;
    }

    abstract calcularBonus(): number;
}
