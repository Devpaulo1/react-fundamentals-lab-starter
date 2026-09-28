# Aula 08 — Reforçando Conceitos sobre React

Projeto inicial para a atividade prática da disciplina de **Single Page Application (SPA)**.

## Objetivo

Este repositório funciona como um laboratório de fundamentos de React. A estrutura de arquivos, os assets e o CSS já estão disponíveis, mas a lógica dos componentes foi propositalmente removida.

Os arquivos em `src/components` possuem comentários explicando:

- a responsabilidade do componente;
- os conceitos de React que serão praticados;
- o comportamento que deverá ser desenvolvido;
- as classes CSS disponíveis para a interface.

> O objetivo não é copiar uma aplicação pronta. Desenvolva cada componente conforme o conceito for apresentado em aula.

## Conceitos trabalhados

- JSX
- Componentização
- Props
- Destructuring
- `useState`
- Eventos
- Renderização condicional
- Renderização de listas com `map()`
- `key`
- Atualização de arrays com `filter()`
- Reutilização de componentes
- Fragment
- `children`
- Funções através de props
- Lifting state up
- Assets em `public` e `src/assets`

## Estrutura

```text
src/
├── assets/
│   └── city.jpg
├── components/
│   ├── ManageData.js
│   ├── ListRender.js
│   ├── ConditionalRender.js
│   ├── ShowUserName.js
│   ├── CarDetails.js
│   ├── Fragment.js
│   ├── Container.js
│   ├── ExecuteFunction.js
│   ├── MessageState.js
│   └── ChangeMessageState.js
├── App.js
├── App.css
├── index.js
└── index.css

public/
└── img1.jpg
```

## Como executar

No terminal, dentro da pasta do projeto:

```bash
npm install
npm start
```

A aplicação será aberta em `http://localhost:3000`.

## Regra da atividade

Implemente por etapas. Evite desenvolver o `App.js` final de uma única vez.

A sequência sugerida é:

1. Interface base e assets
2. `ManageData`
3. `ListRender`
4. `ConditionalRender`
5. `ShowUserName`
6. `CarDetails`
7. `Fragment`
8. `Container`
9. `ExecuteFunction`
10. `MessageState` + `ChangeMessageState`
11. Integração e refatoração

## Referências oficiais

- https://react.dev/learn
- https://react.dev/learn/describing-the-ui
- https://react.dev/learn/your-first-component
- https://react.dev/learn/passing-props-to-a-component
- https://react.dev/learn/state-a-components-memory
- https://react.dev/learn/rendering-lists
- https://react.dev/learn/conditional-rendering
- https://react.dev/learn/responding-to-events
- https://react.dev/learn/sharing-state-between-components
- https://react.dev/learn/updating-arrays-in-state
