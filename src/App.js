import "./App.css";

/*
  ==============================================================
  AULA 09 — REFORÇANDO CONCEITOS SOBRE REACT
  ==============================================================

  Este arquivo será o ponto de integração dos exemplos criados
  durante a aula.

  IMPORTANTE:
  - A estrutura inicial NÃO contém a solução da atividade.
  - Os componentes já existem na pasta /components, mas estão
    propositalmente sem implementação.
  - Importe e utilize cada componente somente quando o conceito
    correspondente for trabalhado em aula.

  CONCEITOS QUE SERÃO APLICADOS AQUI:
  - JSX
  - import / export
  - componentes
  - props
  - reutilização de componentes
  - renderização de listas com map()
  - useState
  - eventos
  - lifting state up
  - uso de assets de public/ e src/assets/

  ROTEIRO SUGERIDO:
  1. Monte a interface base.
  2. Trabalhe com as duas imagens disponibilizadas no projeto.
  3. Importe os componentes progressivamente.
  4. Crie o array de carros quando chegar à etapa de renderização
     dinâmica.
  5. Crie o estado compartilhado da mensagem apenas na etapa de
     lifting state up.

  Evite implementar tudo de uma vez. A proposta é acompanhar a
  evolução do código durante a aula.
*/

function App() {
  return (
    <main className="app-shell">
      <section className="starter-screen">
        <p className="eyebrow">Aula 09 · Single Page Application</p>
        <h1>Laboratório de React</h1>
        <p>
          A estrutura do projeto está pronta. Abra os arquivos comentados em
          <strong> src/components</strong> e desenvolva cada etapa conforme o
          roteiro da atividade.
        </p>

        <div className="starter-hint">
          <strong>Comece pelo App.js.</strong>
          <span>
            O CSS já está disponível. A lógica, os componentes e as interações
            deverão ser construídos durante a aula.
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
