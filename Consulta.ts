import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";

export class Consulta {
    constructor(
        public animal: Animal,
        public veterinario: Veterinario,
        public data: Date
    ) {
        if (!animal || !veterinario) {
            throw new Error("Uma consulta precisa de um animal e um veterinário.");
        }

        this.veterinario.realizarConsulta();
    }

    mostrarDados(): string {
        return `Consulta de ${this.animal.nome} com Dr(a). ${this.veterinario.nome} em ${this.data.toLocaleDateString("pt-BR")}.`;
    }
}
