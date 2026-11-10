import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Ave } from "./Ave";
import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";
import { Consulta } from "./Consulta";
import { Clinica } from "./Clinica";

const clinica = new Clinica("Clínica Veterinária Dona Marta");

const cachorro = new Cachorro("Rex", 4, "Carlos");
const gato = new Gato("Mimi", 2, "Ana");
const ave = new Ave("Louro", 1, "Mariana");

const veterinario = new Veterinario("Paulo", "V001", 3500);
const recepcionista = new Recepcionista("Juliana", "R001", 1800);

clinica.cadastrarAnimal(cachorro);
clinica.cadastrarAnimal(gato);
clinica.cadastrarAnimal(ave);

clinica.contratarFuncionario(veterinario);
clinica.contratarFuncionario(recepcionista);

const consulta = new Consulta(cachorro, veterinario, new Date());

recepcionista.confirmarAgendamento();

console.log("CLÍNICA:", clinica.nome);
console.log("\nANIMAIS CADASTRADOS:");

for (const animal of clinica.listarAnimais()) {
    console.log(animal.nome);
    console.log(animal.emitirSom());
    console.log(animal.cuidadosDiarios());
    console.log("");
}

console.log(consulta.mostrarDados());
console.log(veterinario.prescreverTratamento("Repouso e acompanhamento"));
console.log("\nBÔNUS:");
console.log(`${veterinario.nome}: R$ ${veterinario.calcularBonus().toFixed(2)}`);
console.log(`${recepcionista.nome}: R$ ${recepcionista.calcularBonus().toFixed(2)}`);
