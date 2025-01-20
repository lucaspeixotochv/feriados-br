# Feriados BR

A biblioteca `feriados-br` foi desenvolvida para facilitar o gerenciamento de feriados nacionais e estaduais brasileiros. Com ela, é possível acessar informações sobre feriados, verificar se uma data é feriado e muito mais.

## Sumário

1. [Instalação](#instalação)
2. [Funcionalidades](#funcionalidades)
   - [Obter Feriados Nacionais](#1-obter-feriados-nacionais)
   - [Obter Feriados Estaduais](#2-obter-feriados-estaduais)
   - [Verificar se uma Data é Feriado](#3-verificar-se-uma-data-é-feriado)
3. [Feriados](#feriados)
   - [Feriados Nacionais](#feriados-nacionais)
   - [Feriados Estaduais](#feriados-estaduais)
4. [Estrutura do Pacote](#estrutura-do-pacote)
5. [Contribuindo](#contribuindo)
6. [Licença](#licença)
7. [Autor](#autor)

## Instalação

Você pode instalar a biblioteca via npm:

```bash
npm install feriados-br
```

## Funcionalidades

1. **Obter Feriados Nacionais**  
   A biblioteca permite acessar a lista de feriados nacionais.

### Exemplo:

```javascript
const { HolidayManager } = require("feriados-br");

// Instanciar a classe
const holidayManager = new HolidayManager();

// Obter feriados nacionais
console.log(holidayManager.getNationalHolidays());
```

2. **Obter Feriados Estaduais**  
   Você pode obter feriados específicos de um estado, como o de São Paulo.

### Exemplo:

```javascript
// Obter feriados estaduais de São Paulo
console.log(holidayManager.getHolidaysByState("SP"));
```

3. **Verificar se uma Data é Feriado**  
   A biblioteca permite verificar se uma data específica é um feriado em determinado estado.

### Exemplo - Somente Nacional:

```javascript
// Verificar se 09/07/2025 é feriado no Brasil
const isHoliday = holidayManager.isHoliday("2025-07-09");
console.log(isHoliday); // true ou false
```

### Exemplo - Nacional e Estadual(SP):

```javascript
// Verificar se 09/07/2025 é feriado no Brasil e em São Paulo
const isHoliday = holidayManager.isHoliday("2025-07-09", "SP");
console.log(isHoliday); // true ou false
```

### Sempre passe uma string no formato "YYYY-MM-DD". Para converter um objeto Date para esse formato, siga as instruções abaixo:

```javascript
const date = new Date();
// Data formatada para passar no parâmetro
const formatedDate = date.toISOString().split("T")[0];
```

## Feriados

## Feriados Nacionais

Aqui estão alguns dos principais feriados nacionais que você pode acessar com a biblioteca:

- **01 de janeiro**: Confraternização Universal
- **03 de março**: Carnaval
- **04 de março**: Carnaval
- **21 de abril**: Tiradentes
- **01 de maio**: Dia do Trabalho
- **07 de setembro**: Independência do Brasil
- **12 de outubro**: Nossa Senhora Aparecida
- **02 de novembro**: Finados
- **15 de novembro**: Proclamação da República
- **25 de dezembro**: Natal

## Feriados Estaduais

Você também pode acessar os feriados estaduais. Por exemplo, em São Paulo, temos o seguinte feriado:

- **09 de julho**: Revolução Constitucionalista

## Estrutura do Pacote

O pacote contém os seguintes arquivos:

- **dist/holidayManager.js**: Código da lógica de gerenciamento de feriados.
- **dist/index.js**: Entrada principal para o uso da biblioteca.
- **dist/types.js**: Tipos de dados para o TypeScript.
- **holidays.json**: Dados dos feriados nacionais e estaduais.
- **package.json**: Configurações do projeto.

## Contribuindo

Se você deseja contribuir para este projeto, siga os passos abaixo:

1. Faça um fork do projeto no [GitHub](https://github.com/lucaspeixotochv/feriados-br).
2. Crie uma branch para a nova funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações necessárias e adicione testes.
4. Envie um pull request.

## Licença

Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Autor

Lucas Peixoto  
[GitHub](https://github.com/lucaspeixotochv) | [LinkedIn](https://www.linkedin.com/in/lucaspeixotochv)
