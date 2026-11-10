import { Funcionario } from "./Funcionario";

export class Veterinario extends Funcionario {
    private consultasRealizadas = 0;

    realizarConsulta(): void {
        this.consultasRealizadas++;
    }

    prescreverTratamento(tratamento: string): string {
        return `Tratamento prescrito: ${tratamento}`;
    }

    calcularBonus(): number {
        return this.consultasRealizadas * 50;
    }
}
