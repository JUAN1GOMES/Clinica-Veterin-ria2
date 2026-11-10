# Sistema de Clínica Veterinária

Projeto em TypeScript para praticar Programação Orientada a Objetos.

## O que o sistema possui

- Animais: cachorro, gato e ave.
- Funcionários: veterinário e recepcionista.
- Consultas ligadas a um animal e a um veterinário.
- Cadastro de animais e funcionários na clínica.
- Cálculo de bônus de acordo com o tipo de funcionário.
- Salário encapsulado, com alteração feita por método que valida o valor.

## Conceitos de POO utilizados

- **Abstração:** `Animal` e `Funcionario` são classes abstratas.
- **Herança:** as espécies herdam de `Animal`; veterinário e recepcionista herdam de `Funcionario`.
- **Polimorfismo:** cada espécie implementa seu próprio som e seus cuidados.
- **Encapsulamento:** o salário é privado e só pode ser alterado pelo método `alterarSalario`.
- **Agregação:** a clínica mantém listas de animais e funcionários, que podem continuar existindo fora dela.
- **Composição:** a consulta é representada como dependente de um animal e de um veterinário.

## Como executar

É necessário ter Node.js instalado.

1. Instale as dependências:

   `npm install`

2. Compile o TypeScript:

   `npm run build`

3. Execute:

   `npm start`

## Observação

O projeto é um exemplo acadêmico simples. Os dados ficam em memória e são perdidos quando o programa termina.
