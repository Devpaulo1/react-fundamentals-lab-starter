# Aula 08 — Reforçando Conceitos sobre React

Projeto inicial desenvolvido para a atividade prática da disciplina de **Single Page Application (SPA)**.

Este repositório funciona como um **laboratório de fundamentos do React**, no qual diferentes conceitos serão implementados progressivamente durante a aula.

A estrutura inicial do projeto, os assets, os componentes e o CSS já estão disponíveis. Entretanto, a lógica dos componentes foi propositalmente removida.

O objetivo é que cada funcionalidade seja construída conforme os conceitos forem apresentados.

---

# 1. Objetivo da atividade

Nesta atividade vamos revisar e aplicar alguns dos principais fundamentos utilizados no desenvolvimento de aplicações React.

Ao final do exercício, você deverá compreender como uma aplicação React pode ser construída através da combinação de:

```text
Dados
  ↓
Componentes
  ↓
Props
  ↓
State
  ↓
Eventos
  ↓
Renderização
  ↓
Interface
```

A aplicação será desenvolvida como um conjunto de pequenos exemplos independentes.

Cada componente terá uma responsabilidade específica e será utilizado para demonstrar um conceito.

> O objetivo não é copiar uma aplicação pronta.

Implemente cada componente conforme o conceito for apresentado durante a aula.

---

# 2. O que já está disponível

O projeto inicial contém:

- estrutura básica do React;
- arquivos dos componentes;
- CSS completo da aplicação;
- imagens utilizadas no exercício;
- comentários dentro dos componentes;
- estrutura inicial do `App.js`.

Os arquivos localizados em:

```text
src/components
```

possuem comentários indicando:

- a responsabilidade do componente;
- o conceito React relacionado;
- o comportamento esperado;
- as classes CSS disponíveis;
- os pontos que deverão ser implementados.

A lógica principal deverá ser desenvolvida pelo aluno.

---

# 3. Conceitos trabalhados

Durante o desenvolvimento serão revisados os seguintes conceitos:

- JSX;
- Components;
- Props;
- Destructuring;
- `useState`;
- eventos;
- renderização condicional;
- renderização de listas;
- `map()`;
- `key`;
- `filter()`;
- atualização de arrays em State;
- reutilização de componentes;
- Fragment;
- `children`;
- passagem de funções através de props;
- lifting state up;
- manipulação de assets;
- organização básica de uma aplicação React.

---

# 4. Estrutura do projeto

```text
src/
├── assets/
│   └── city.jpg
│
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
│
├── App.js
├── App.css
├── index.js
└── index.css

public/
└── img1.jpg
```

---

# 5. Responsabilidade dos arquivos

## `App.js`

É o componente principal da aplicação.

Ele será responsável por integrar os diferentes exemplos desenvolvidos durante a aula.

O fluxo será semelhante a:

```text
App
│
├── ManageData
├── ListRender
├── ConditionalRender
├── ShowUserName
├── CarDetails
├── Container
├── ExecuteFunction
├── MessageState
└── ChangeMessageState
```

Não desenvolva todo o `App.js` de uma única vez.

Cada componente deverá ser adicionado conforme o conteúdo for estudado.

---

## `ManageData.js`

Será utilizado para estudar:

```text
Variável JavaScript
        x
State do React
```

O objetivo é perceber que alterar uma variável JavaScript comum não significa necessariamente atualizar a interface.

Aqui será introduzido:

```javascript
useState()
```

---

## `ListRender.js`

Responsável pelos conceitos relacionados a listas.

Serão utilizados:

```javascript
map()
filter()
key
useState()
```

O componente deverá evoluir de uma lista simples para uma coleção de objetos.

---

## `ConditionalRender.js`

Será utilizado para estudar como React decide se determinado elemento deve ou não aparecer na interface.

Serão utilizados exemplos envolvendo:

```javascript
&&
```

e:

```javascript
condicao ? valorA : valorB
```

---

## `ShowUserName.js`

Primeira demonstração de comunicação entre componentes utilizando:

```text
Props
```

Um componente receberá informações enviadas pelo componente pai.

---

## `CarDetails.js`

Será utilizado para estudar:

- props;
- destructuring;
- reutilização de componentes;
- objetos;
- geração dinâmica de componentes.

---

## `Fragment.js`

Demonstra como retornar múltiplos elementos sem criar um elemento HTML adicional apenas para agrupá-los.

---

## `Container.js`

Será utilizado para demonstrar:

```javascript
props.children
```

Esse conceito permite criar componentes capazes de envolver diferentes tipos de conteúdo.

---

## `ExecuteFunction.js`

Será utilizado para demonstrar que props não transportam apenas strings ou números.

Também é possível enviar:

```text
Funções
```

de um componente para outro.

---

## `MessageState.js`

Será responsável por exibir uma informação armazenada em um componente superior.

---

## `ChangeMessageState.js`

Será responsável por disparar uma alteração no State que pertence ao componente pai.

Esses dois componentes serão utilizados para estudar:

```text
Lifting State Up
```

---

# 6. Como executar o projeto

Certifique-se de possuir o Node.js instalado.

No terminal, entre na pasta do projeto.

Instale as dependências:

```bash
npm install
```

Depois execute:

```bash
npm start
```

A aplicação deverá ficar disponível em:

```text
http://localhost:3000
```

---

# 7. JSX

JSX é a sintaxe utilizada pelo React para descrever a interface.

Sua aparência é semelhante ao HTML:

```jsx
<h1>Hello React</h1>
```

Porém JSX permite utilizar JavaScript dentro da interface.

Para isso utilizamos:

```text
{ }
```

Exemplo:

```jsx
const course = "React";

return (
  <h2>Estudando {course}</h2>
);
```

O valor da variável será inserido no JSX.

Fluxo:

```text
JavaScript
    ↓
Expressão
    ↓
{ }
    ↓
JSX
    ↓
Interface
```

### Importante

JSX não é exatamente HTML.

Por exemplo, para adicionar uma classe CSS utilizamos:

```jsx
className="card"
```

e não:

```html
class="card"
```

### Documentação

React — Writing Markup with JSX:

https://react.dev/learn/writing-markup-with-jsx

JavaScript in JSX:

https://react.dev/learn/javascript-in-jsx-with-curly-braces

---

# 8. Componentes

Componentes são os principais blocos utilizados para construir interfaces React.

Uma página pode ser dividida em partes menores:

```text
Página
│
├── Header
├── Content
│   ├── Card
│   ├── Card
│   └── Card
│
└── Footer
```

Cada bloco pode se tornar um componente.

Um componente React normalmente é representado por uma função.

Exemplo genérico:

```jsx
const Welcome = () => {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
};

export default Welcome;
```

Depois ele pode ser utilizado em outro componente:

```jsx
<Welcome />
```

## Por que utilizar componentes?

Componentes ajudam a criar aplicações:

- organizadas;
- reutilizáveis;
- mais fáceis de manter;
- divididas em responsabilidades menores.

Em vez de possuir um único arquivo com centenas de linhas, podemos dividir a interface.

```text
Interface grande
      ↓
Divisão
      ↓
Componentes menores
      ↓
Responsabilidades específicas
```

### Documentação

Your First Component:

https://react.dev/learn/your-first-component

Importing and Exporting Components:

https://react.dev/learn/importing-and-exporting-components

---

# 9. Props

Props permitem enviar informações entre componentes.

O fluxo normalmente ocorre assim:

```text
Componente Pai
      │
      │ props
      ▼
Componente Filho
```

Exemplo conceitual:

```jsx
<User name="Alex" />
```

O componente filho pode receber essa informação:

```jsx
const User = (props) => {
  return <p>{props.name}</p>;
};
```

Props permitem reutilizar o mesmo componente com informações diferentes.

```jsx
<User name="Alex" />
<User name="Maria" />
<User name="John" />
```

O componente é o mesmo.

O que muda são os dados.

```text
          User
        /  |  \
       /   |   \
    Alex Maria John
```

### Importante

Props são utilizadas para comunicar dados do componente pai para o filho.

O componente filho não deve alterar diretamente as props recebidas.

### Documentação

Passing Props to a Component:

https://react.dev/learn/passing-props-to-a-component

---

# 10. Destructuring de Props

Props são objetos JavaScript.

Por isso podemos utilizar destructuring.

Em vez de:

```jsx
const User = (props) => {
  return <p>{props.name}</p>;
};
```

podemos escrever:

```jsx
const User = ({ name }) => {
  return <p>{name}</p>;
};
```

Com várias informações:

```jsx
const Product = ({ name, price, category }) => {
  // ...
};
```

Isso torna o código mais enxuto quando sabemos quais propriedades serão utilizadas.

---

# 11. State

Props permitem receber dados.

State permite que um componente **lembre informações que podem mudar durante a execução da aplicação**.

Para trabalhar com State utilizaremos:

```javascript
useState()
```

Exemplo conceitual:

```jsx
import { useState } from "react";

const Example = () => {
  const [value, setValue] = useState(0);

  return (
    <button onClick={() => setValue(value + 1)}>
      {value}
    </button>
  );
};
```

Aqui:

```text
value
```

representa o valor atual.

Enquanto:

```text
setValue
```

é utilizado para atualizar esse valor.

Fluxo:

```text
Usuário executa uma ação
          ↓
     setValue(...)
          ↓
React atualiza o State
          ↓
Componente renderiza novamente
          ↓
Interface apresenta o novo valor
```

Esse processo é fundamental para aplicações interativas.

### Documentação

State: A Component's Memory:

https://react.dev/learn/state-a-components-memory

---

# 12. Variável comum x State

Considere uma variável JavaScript comum:

```javascript
let value = 10;
```

Podemos alterar seu valor:

```javascript
value = 20;
```

Entretanto React não utiliza essa alteração automaticamente como um sinal para atualizar a interface.

Com State:

```javascript
const [value, setValue] = useState(10);
```

a atualização ocorre através da função:

```javascript
setValue(20);
```

Isso informa ao React que existe uma alteração relevante para a interface.

Fluxo conceitual:

```text
Variável comum

value = 20
    ↓
JavaScript alterou o valor
    ↓
React não necessariamente renderiza novamente
```

Com State:

```text
setValue(20)
    ↓
State atualizado
    ↓
React renderiza novamente
    ↓
Interface atualizada
```

---

# 13. Eventos

React permite responder às ações realizadas pelo usuário.

Alguns eventos comuns:

```text
onClick
onChange
onSubmit
onMouseEnter
onMouseLeave
```

Nesta atividade utilizaremos principalmente:

```jsx
onClick
```

Exemplo:

```jsx
const showMessage = () => {
  console.log("Button clicked");
};

<button onClick={showMessage}>
  Execute
</button>
```

Observe que passamos:

```javascript
showMessage
```

e não:

```javascript
showMessage()
```

Caso contrário, a função seria executada durante a renderização.

Fluxo:

```text
Usuário
   ↓
Clique
   ↓
onClick
   ↓
Função
   ↓
Ação
```

### Documentação

Responding to Events:

https://react.dev/learn/responding-to-events

---

# 14. Renderização de listas

Aplicações frequentemente trabalham com coleções de informações.

Exemplo:

```javascript
const technologies = [
  "React",
  "JavaScript",
  "HTML",
  "CSS"
];
```

Para transformar esses dados em JSX podemos utilizar:

```javascript
map()
```

Exemplo genérico:

```jsx
<ul>
  {technologies.map((technology) => (
    <li>{technology}</li>
  ))}
</ul>
```

O fluxo será:

```text
Array
 ↓
map()
 ↓
cada item
 ↓
JSX
 ↓
lista renderizada
```

---

# 15. Arrays de objetos

Aplicações reais normalmente trabalham com objetos.

Exemplo:

```javascript
const users = [
  {
    id: 1,
    name: "Ana"
  },
  {
    id: 2,
    name: "Carlos"
  }
];
```

Podemos acessar:

```javascript
user.id
user.name
```

e gerar componentes dinamicamente.

A ideia geral será:

```text
Array de objetos
       ↓
      map()
       ↓
Objeto atual
       ↓
Props
       ↓
Componente
```

Esse padrão será utilizado em diferentes momentos da atividade.

### Documentação

Rendering Lists:

https://react.dev/learn/rendering-lists

---

# 16. `key`

Ao criar uma lista de elementos React, cada elemento deve possuir uma identificação.

Exemplo conceitual:

```jsx
items.map((item) => (
  <li key={item.id}>
    {item.name}
  </li>
))
```

A `key` ajuda React a identificar cada item durante atualizações da interface.

Quando possível, utilize identificadores únicos existentes nos próprios dados:

```text
id
```

em vez da posição do elemento.

Preferível:

```jsx
key={item.id}
```

Evite utilizar índice quando existe um identificador estável:

```jsx
key={index}
```

Principalmente quando:

- itens podem ser removidos;
- itens podem mudar de posição;
- novos elementos podem ser adicionados.

### Documentação

Rendering Lists:

https://react.dev/learn/rendering-lists

---

# 17. Atualizando arrays com `filter()`

Não devemos modificar diretamente arrays armazenados no State.

Em vez disso, criamos um novo array.

Uma das funções utilizadas para isso é:

```javascript
filter()
```

Exemplo JavaScript:

```javascript
const numbers = [1, 2, 3, 4];

const filteredNumbers = numbers.filter(
  (number) => number !== 3
);
```

Resultado:

```javascript
[1, 2, 4]
```

Aplicado conceitualmente ao React:

```text
State atual
    ↓
filter()
    ↓
novo array
    ↓
setState()
    ↓
React renderiza novamente
```

### Documentação

Updating Arrays in State:

https://react.dev/learn/updating-arrays-in-state

---

# 18. Renderização condicional

Nem todos os elementos precisam aparecer o tempo inteiro.

Podemos utilizar condições para decidir o que será exibido.

## Operador `&&`

Exemplo:

```jsx
{isLogged && <p>Usuário conectado</p>}
```

Se:

```javascript
isLogged === true
```

o elemento será renderizado.

---

## Operador ternário

Quando existem dois possíveis resultados:

```jsx
{isLogged ? (
  <p>Usuário conectado</p>
) : (
  <p>Faça login</p>
)}
```

Fluxo:

```text
Condição
   ↓
true ──────→ elemento A

false ─────→ elemento B
```

### Documentação

Conditional Rendering:

https://react.dev/learn/conditional-rendering

---

# 19. Reutilização de componentes

Um dos principais objetivos da componentização é reutilizar estruturas.

Considere um componente genérico:

```text
Card
```

Ele pode receber diferentes dados:

```text
Card
 ├── Produto A
 ├── Produto B
 └── Produto C
```

Em vez de copiar o mesmo JSX várias vezes, podemos reutilizar:

```jsx
<Card ... />
<Card ... />
<Card ... />
```

Depois podemos evoluir para:

```text
Array
  ↓
map()
  ↓
<Card />
```

Esse conceito será praticado com `CarDetails`.

---

# 20. Fragment

Um componente React precisa retornar uma estrutura válida.

Às vezes queremos retornar vários elementos sem criar uma `<div>` apenas para agrupá-los.

Podemos utilizar:

```jsx
<>
  <h2>Título</h2>
  <p>Descrição</p>
</>
```

Esse recurso é chamado:

```text
Fragment
```

Outra forma:

```jsx
import { Fragment } from "react";

<Fragment>
  ...
</Fragment>
```

O Fragment não cria um elemento adicional no HTML final.

### Documentação

Fragment:

https://react.dev/reference/react/Fragment

---

# 21. `children`

Um componente pode receber conteúdo entre sua abertura e fechamento.

Exemplo:

```jsx
<Box>
  <p>Conteúdo</p>
</Box>
```

O conteúdo:

```jsx
<p>Conteúdo</p>
```

será recebido pelo componente através de:

```javascript
children
```

Exemplo conceitual:

```jsx
const Box = ({ children }) => {
  return (
    <div className="box">
      {children}
    </div>
  );
};
```

Isso permite criar componentes extremamente reutilizáveis.

```text
Container
    │
    └── children
          │
          ├── texto
          ├── imagem
          ├── botão
          └── outro componente
```

### Documentação

Passing Props to a Component:

https://react.dev/learn/passing-props-to-a-component

---

# 22. Funções através de Props

Props não transportam apenas dados.

Também podemos enviar funções.

Fluxo:

```text
Componente Pai
      │
      │ function
      ▼
Componente Filho
      │
      │ onClick
      ▼
Executa função criada no Pai
```

Exemplo conceitual:

```jsx
const Parent = () => {

  const executeAction = () => {
    console.log("Executando no componente pai");
  };

  return (
    <Child action={executeAction} />
  );
};
```

No filho:

```jsx
const Child = ({ action }) => {
  return (
    <button onClick={action}>
      Execute
    </button>
  );
};
```

Esse padrão é muito utilizado para comunicação entre componentes.

---

# 23. Lifting State Up

Imagine dois componentes:

```text
MessageState
ChangeMessageState
```

Um precisa mostrar uma mensagem.

Outro precisa alterar a mensagem.

Se cada componente criar seu próprio State:

```text
MessageState
   └── message A

ChangeMessageState
   └── message B
```

teremos dois estados independentes.

A solução é mover o State para o componente pai.

```text
            App
             │
        message state
         /        \
        /          \
       ▼            ▼
MessageState   ChangeMessageState
    │                │
exibe mensagem   altera mensagem
```

Essa estratégia é conhecida como:

```text
Lifting State Up
```

O State sobe para o ancestral comum entre os componentes.

Depois:

```text
App
 │
 ├── envia o valor por props
 │
 └── envia a função de atualização por props
```

### Documentação

Sharing State Between Components:

https://react.dev/learn/sharing-state-between-components

---

# 24. Assets no React

Nesta atividade serão utilizadas duas estratégias diferentes.

---

## Arquivos em `public`

Exemplo:

```text
public/
└── img1.jpg
```

O arquivo pode ser referenciado por um caminho público:

```jsx
<img
  src="/img1.jpg"
  alt="Example"
/>
```

---

## Arquivos dentro de `src/assets`

Exemplo:

```text
src/
└── assets/
    └── city.jpg
```

Nesse caso o arquivo normalmente será importado:

```javascript
import cityImage from "./assets/city.jpg";
```

Depois utilizado:

```jsx
<img
  src={cityImage}
  alt="City"
/>
```

Nesta atividade utilizaremos as duas estratégias justamente para comparar o comportamento.

---

# 25. Fluxo geral da aplicação

Durante a aula o projeto deverá evoluir aproximadamente desta forma:

```text
1. JSX estático
        ↓
2. Componentes
        ↓
3. Props
        ↓
4. State
        ↓
5. Eventos
        ↓
6. Arrays
        ↓
7. map()
        ↓
8. Renderização dinâmica
        ↓
9. filter()
        ↓
10. Componentes reutilizáveis
        ↓
11. Funções por props
        ↓
12. Lifting State Up
```

O objetivo é perceber que aplicações React são construídas através da composição progressiva desses conceitos.

---

# 26. Sequência da atividade

A implementação deverá seguir a sequência abaixo.

## Etapa 1 — Interface base e assets

Objetivos:

- revisar JSX;
- importar CSS;
- utilizar imagens;
- comparar `public` e `src/assets`.

---

## Etapa 2 — `ManageData`

Objetivos:

- comparar variável comum e State;
- introduzir `useState`;
- entender re-renderização.

---

## Etapa 3 — `ListRender`

Objetivos:

- arrays;
- `map()`;
- objetos;
- `key`;
- `filter()`;
- arrays em State.

---

## Etapa 4 — `ConditionalRender`

Objetivos:

- condições;
- `&&`;
- operador ternário.

---

## Etapa 5 — `ShowUserName`

Objetivos:

- props;
- comunicação pai → filho.

---

## Etapa 6 — `CarDetails`

Objetivos:

- props;
- destructuring;
- reutilização;
- componentes gerados através de arrays.

---

## Etapa 7 — `Fragment`

Objetivos:

- evitar wrappers HTML desnecessários;
- utilizar Fragment.

---

## Etapa 8 — `Container`

Objetivos:

- composição;
- `children`;
- reutilização de estruturas.

---

## Etapa 9 — `ExecuteFunction`

Objetivos:

- funções em props;
- comunicação entre componentes;
- eventos.

---

## Etapa 10 — `MessageState` + `ChangeMessageState`

Objetivos:

- State compartilhado;
- funções através de props;
- lifting state up.

---

## Etapa 11 — Integração

Ao finalizar:

- revise os imports;
- remova código não utilizado;
- verifique warnings;
- verifique erros no console;
- confira as `key`;
- revise os nomes;
- confira a organização dos componentes.

---

# 27. Fluxo de desenvolvimento recomendado

Não tente implementar tudo antes de testar.

Utilize ciclos curtos:

```text
Criar
 ↓
Executar
 ↓
Testar
 ↓
Verificar console
 ↓
Corrigir
 ↓
Commit
 ↓
Próxima etapa
```

---

# 28. Sugestão de commits

Procure criar commits pequenos e relacionados com a evolução do projeto.

Exemplos:

```bash
git commit -m "feat: create manage data example"
```

```bash
git commit -m "feat: implement list rendering example"
```

```bash
git commit -m "feat: add conditional rendering example"
```

```bash
git commit -m "feat: add props examples"
```

```bash
git commit -m "feat: add reusable car component"
```

```bash
git commit -m "feat: demonstrate children composition"
```

```bash
git commit -m "feat: demonstrate function props"
```

```bash
git commit -m "feat: implement lifting state up example"
```

Evite desenvolver toda a atividade e gerar apenas um commit no final.

---

# 29. Perguntas para reflexão

Durante o desenvolvimento, tente responder:

1. Qual a diferença entre uma variável JavaScript e um State?

2. O que acontece quando chamamos uma função de atualização do State?

3. Por que React renderiza novamente um componente?

4. O que são props?

5. Qual é o sentido do fluxo:

```text
Pai → Filho
```

em props?

6. Por que componentes devem ser reutilizáveis?

7. Qual é o objetivo do `map()`?

8. Por que elementos gerados por `map()` precisam de `key`?

9. Qual a vantagem de utilizar `filter()` para remover elementos?

10. Qual a diferença entre:

```javascript
props.name
```

e:

```javascript
{ name }
```

11. Para que serve Fragment?

12. O que representa `children`?

13. Podemos enviar funções através de props?

14. Por que mover um State para o componente pai?

15. O que significa **lifting state up**?

16. Quando um dado pode ser calculado diretamente, precisamos criar outro State?

---

# 30. Regra da atividade

> Não implemente o `App.js` final antes de desenvolver os componentes individualmente.

A evolução da atividade deve ser visível.

```text
Hardcoded
    ↓
Dados
    ↓
State
    ↓
Componentes
    ↓
Props
    ↓
Componentes reutilizáveis
    ↓
Comunicação entre componentes
```

O objetivo principal desta atividade não é apenas fazer a aplicação funcionar.

O objetivo é conseguir explicar:

```text
por que o código funciona
```

e:

```text
qual problema cada conceito React resolve.
```

---

# 31. Referências oficiais

## React

React — Learn

https://react.dev/learn

---

## JSX

Describing the UI:

https://react.dev/learn/describing-the-ui

Writing Markup with JSX:

https://react.dev/learn/writing-markup-with-jsx

JavaScript in JSX with Curly Braces:

https://react.dev/learn/javascript-in-jsx-with-curly-braces

---

## Components

Your First Component:

https://react.dev/learn/your-first-component

Importing and Exporting Components:

https://react.dev/learn/importing-and-exporting-components

---

## Props

Passing Props to a Component:

https://react.dev/learn/passing-props-to-a-component

---

## State

State: A Component's Memory:

https://react.dev/learn/state-a-components-memory

---

## Eventos

Responding to Events:

https://react.dev/learn/responding-to-events

---

## Listas

Rendering Lists:

https://react.dev/learn/rendering-lists

---

## Renderização condicional

Conditional Rendering:

https://react.dev/learn/conditional-rendering

---

## Arrays no State

Updating Arrays in State:

https://react.dev/learn/updating-arrays-in-state

---

## Compartilhamento de State

Sharing State Between Components:

https://react.dev/learn/sharing-state-between-components

---

## Fragment

React Fragment:

https://react.dev/reference/react/Fragment

---

# Resultado esperado

Ao terminar a atividade você deverá compreender o fluxo fundamental de uma aplicação React:

```text
Data
 ↓
Components
 ↓
Props / State
 ↓
Events
 ↓
State Update
 ↓
Re-render
 ↓
Updated UI
```

Esses conceitos serão utilizados como base para aplicações React mais completas nas próximas aulas.
