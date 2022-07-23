## Documentação de arquitetura do Projeto

- Requisito de desenvolvimento
- Instalação de dependências
- Configurações de ambiente
- Iniciar projeto
- Arquitetura do Projeto
  - Qualidade de código
  - Estrutura do projeto

### Requisito de desenvolvimento

Requisitos obrigatórios para uso do projeto:

- Node 16.15.1 [Node](https://nodejs.org)
- Yarn 1.23.0 [Yarn](https://yarnpkg.com/)
- React native 0.69.1 [React Native](https://reactnative.dev/docs/environment-setup)

### Instalação de dependências

Pré-requisitos:

- [x] Ter as dependências para instalação dos [requisitos obrigatórios](#Requisito)
- [x] Abrir o diretório do projeto

Abrir o terminal do seu sistema operacional e executar o comando abaixo:

#Android:

```shell
yarn android:rebase
```

#Ios:

```shell
yarn ios:rebase
```

### Configurações de ambiente

Pré-requisitos:

- [x] Ter instalado as dependências do projeto
- [x] Abrir o diretório do projeto

Editar o arquivo chamado `.env`. Este arquivo deve conter as configurações das variáveis de ambiente do projeto.

As variáveis do arquivo `.env` são:

```dotenv
#url do backend
WEATHER_BASE_URL_API=""
WEATHER_API_KEY=""
```

As variáveis do arquivo `.env.staging` são variavéis no ambiente de homologação
As variáveis do arquivo `.env.production` são variavéis no ambiente de produção

## Iniciar projeto

Pré-requisitos:

- [x] Ter os executaveis para instalação dos [Configurações de ambiente](#Requisito)
- [x] Abrir o diretório do projeto

Abrir o terminal do seu sistema operacional e executar o comando abaixo:

#Android:

```shell
yarn android
```

#Ios:

```shell
yarn ios
```

---

## Arquitetura do Projeto

### Qualidade de Código

Ferramentas utilizadas para realizar padronização do código:

#### ESLint 7.32.0 [ESLint](https://eslint.org/)

Usado para garantir que o código esteja no mesmo padrão entre a equipe de desenvolvimento.

#### Husky 8.0.1 [Husky](https://typicode.github.io/husky),

Lint-staged 13.0.3 [Lint-staged](https://github.com/okonet/lint-staged) e
Commitizen 4.2.5 [Commitizen](https://commitizen-tools.github.io/commitizen/)

Usado para manter um gitflow em todos os commits do projeto garantindo que seja apenas realizados os commits quando passar por um lint para garantir o padrão do código e rodar os testes para conferir se o sistema está rodando perfeitamente.

#### Typescript 4.4.4 [Typescript](https://www.typescriptlang.org/)

Usado para garantir a tipagem do código e melhorar a manutenção do sistema com os testes estáticos.

#### Testing-library/react-native 10.1.1 [Testing-library](https://testing-library.com/)

#### React-test-renderer 18.0 [React-test-renderer](https://pt-br.reactjs.org/docs/test-renderer.html)

Usado junto com o jest para realizar teste e garantir as entregas no sistema.

### Base da arquitetura

A base da arquitetura desse sistema foi tirada de duas arquiteturas, Atomic Design e MVVM, que visam facilitar os testes e reaproveitamento de código. Tendo isso em vista, essa arquitetura tem como objetivo separar a aplicacao em módulos, que por sua vez obedecem o Atomic Design tendo a hieraquia de paginas, e componentes do tipo páginas, ecossistema, organimsmo, molécula e atômico.

### Estrutura do projeto

O projeto está estruturado em:

- [App](#App)
- [ProvidersConfig](#ProvidersConfig)
- [Src](#Src)
  - [Core](#Core)
    - [Assets](#Assets)
    - [Components](#Components)
    - [Routes](#Routes)
    - [Services](#Services)
    - [Styles](#Styles)
    - [Utils](#Utils)
      - [Hooks](#Hooks)
      - [Functions](#Functions)
  - [Modules](#Views)
    - [ExampleModule](#ExampleModule)
      - [Components](#ComponentsModule)
      - [Hooks](#HooksModule)
      - [Pages](#PagesModule)
      - [Reducers](#ReducersModule)
      - [Utils](#UtilsModule)
      - [Routes](#RoutesModule)

#### Src

`Pasta que tem todos os arquivos do sistema. `

#### Core

`Guarda toda lógica que gerencia o sistema, e onde se concentra maior parte de componentes atômicos e moleculares que podem ser compartilhados nos módulos.`

#### Assets

`Guarda todos arquivos estáticos como por exemplo: imagens, icones, animações.`

#### Components

`Componentes guardam componentes atomicos e moleculares que possuem estilização.`

#### Utils

`Guarda todos os hooks, funções que são atomicas e moleculares para serem compartilhados com os módulos do sistema.`

#### Routes

`Gerência as rotas de cada módulo e exporta para o index do projeto. Assim ajudando os desenvolvedores a mexer no json do seu módulo sem ocorrer merge durante os versionamentos, pois esse arquivo manipula rotas do módulo, e por sua vez as suas rotas internas são gerenciadas por ele mesmo de forma independente do core.`

#### Services

`Guarda todos serviços do projeto com intuito de centralizar as regras de negócio referente ao módulo de api para conexão com o backend, sistema de notificação, validação entre outros.`

#### Styles

`Guarda todos styles e temas globais do projeto.`

#### Modules

`Guarda todos os módulos e componentes de ecosistema e páginas.`

---

## Context partner

Esse padrão será ultilizado em casos onde a lógica precisa ser compartilhada em componentes do tipo organismo, ecossistema e páginas.

### Estrutura do reducer

- [Reducers](#ReducersCtxPartner)
  - [ExampleReducer](#ReducerExampleCtxPartner)
    - [Components](#ComponentsCtxPartner)
    - [Hooks](#HooksCtxPartner)
    - [Contexts](#ContextsCtxPartner)
    - [Reducer](#ReducerCtxPartner)

#### Reducers

`Onde se encontra todos os reducers do módulo`

#### Components

` todos os componentes do tipo atômico e molecular como os providers do reducer`

#### Hooks

`Guarda todos os hooks que externalizam e abstrai o acesso aos dados e funções do reducer`

#### Contexts

`Guarda todos os contextos que armazena os dados e funções do reducer`

#### Reducer

`É onde fica as actions que controlam o estado e as regras de negocio do reducer bem como a tipagem das entidades`

---

## Screenshots

![Screenshot home](https://i.imgur.com/ogqSjCn.png)
![GIf home](https://i.imgur.com/pMzwOGb.gif)
