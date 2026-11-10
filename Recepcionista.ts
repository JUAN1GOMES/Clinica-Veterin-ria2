import { Funcionario } from "./Funcionario";

export class Recepcionista extends Funcionario {
    private agendamentosConfirmados = 0;

    confirmarAgendamento(): void {
        this.agendamentosConfirmados++;
    }

    calcularBonus(): number {
        return this.agendamentosConfirmados * 10;
    }
}
