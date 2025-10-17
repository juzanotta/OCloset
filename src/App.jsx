import './App.css'

function App() {

  return (
    <>
      <header>
        <p>save the date</p>
        <img src="./logo.png" alt="" />
        <p>dez/2025</p>
      </header>

      <section class="section1">
        <img src="/icon.png" alt="" />
        <div>
          <h1>roupas incríveis para momentos únicos. <br />sem o peso no seu armário (nem no seu bolso).</h1>
          <h3>a plataforma que conecta pessoas e roupas de forma simples, segura e sustentável.</h3>
          <a href="#">quero conhecer!</a>
        </div>
      </section>

      <section class="section2">
        <h1>como funciona?</h1>

        <div class="cards">
          <div class="card">
              <h2>para alugar</h2>
              <p><span>explore:</span> encontre peças únicas pertinho de você</p>
              <p><span>conecte-se:</span> converse com a dona da peça e verifique a disponibilidade</p>
              <p><span>arrase:</span> receba a peça e curta seu evento</p>
          </div>

          <div class="card">
              <h2>para anunciar</h2>
              <p><span>anuncie grátis:</span> descreva sua peça em poucos passos</p>
              <p><span>receba pedidos:</span> aprove as solicitações de aluguel</p>
              <p><span>ganhe dinheiro:</span> de forma segura pela plataforma :)</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default App
