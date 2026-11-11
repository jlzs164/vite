import "./App.css";

function App() {
  return (
    <div className="pagina">
      <header className="cabecalho">
        <h1>Meu Projeto React</h1>
        <p>Minha primeira aplicação utilizando Vite e React.</p>
      </header>

      <main>
        <section className="cartao">
          <h2>Sobre o projeto</h2>

          <p>
            Este projeto foi criado utilizando Vite como ferramenta
            de desenvolvimento e React para construção da interface.
          </p>

          <p>
            O objetivo é entender a estrutura de um projeto React,
            sua execução e o processo de geração de build.
          </p>
        </section>

        <section className="tecnologias">
          <h2>Tecnologias utilizadas</h2>

          <div className="lista">
            <span>React</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </section>
      </main>

      <footer>
        <p>Projeto desenvolvido para a Spike "Vite".</p>
      </footer>
    </div>
  );
}

export default App;