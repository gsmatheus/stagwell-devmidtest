# stagwell-devmidtest

O projeto é uma aplicação de linha de comando (CLI) desenvolvida em TypeScript que oferece um menu interativo para realizar várias operações matemáticas. O usuário pode escolher entre uma calculadora simples, encontrar números primos, calcular fatorial, verificar palíndromos, gerar tabelas de multiplicação, contar vogais, calcular média de notas e juros de investimentos. Com uma interface simples e amigável, o projeto permite que os usuários executem essas operações de maneira rápida e eficiente através do terminal.

## Instalação

Para começar, você precisa ter o Node.js instalado em sua máquina. Acesse o site oficial do Node.js (https://nodejs.org/) e faça o download da versão recomendada para o seu sistema operacional. O Node.js inclui o npm (Node Package Manager), que será usado para instalar as dependências do projeto.

### Instalando as dependências

Abra o terminal na pasta do projeto e execute um dos seguintes comandos, dependendo do gerenciador de pacotes que você deseja usar:

```bash
# Usando npm
npm install

# Usando yarn
yarn install
```

Isso irá instalar todas as dependências listadas no arquivo `package.json` e criar uma pasta `node_modules` com os pacotes necessários.

## Testes

O projeto possui uma suíte abrangente de testes para garantir a qualidade e a integridade das funcionalidades. Os testes são escritos utilizando uma biblioteca de testes apropriada para projetos TypeScript, garantindo a cobertura dos principais casos de uso.

Para executar os testes, utilize o seguinte comando:

```bash
# Usando npm
npm test

# Usando yarn
yarn test
```

Isso executará os testes automatizados e exibirá os resultados no terminal. Certifique-se de que todos os testes estão passando antes de fazer modificações no código ou enviar alterações para o repositório. Os testes fornecem uma camada adicional de segurança e ajudam a evitar regressões em futuras atualizações.

## Build do Projeto

Para construir o projeto, execute o seguinte comando:

```bash
# Usando npm
npm run compile

# Usando yarn
yarn compile
```

Este comando irá compilar o código TypeScript em JavaScript e colocá-lo na pasta de saída especificada no arquivo `tsconfig.json`. O projeto estará pronto para ser executado após a compilação.

## Executando o Projeto

Após a instalação das dependências e a conclusão do build, você pode iniciar o projeto com o seguinte comando:

```bash
# Usando npm
npm start

# Usando yarn
yarn start
```

Isso iniciará a aplicação e exibirá o menu interativo no terminal. Você pode selecionar uma das opções disponíveis para realizar as operações matemáticas.
