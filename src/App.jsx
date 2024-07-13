import './App.css'
import Carrossel from './components/carrossel/Carrossel'
import Comprar from './components/comprar/Comprar'
import Destaques from './components/destaques/Destaques'
import Financiamento from './components/financiamento/Financiamento'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Pesquisa from './components/pesquisa/Pesquisa'
import Sobre from './components/sobre/Sobre'
import Time from './components/time/Time'

function App() {

  return (
    <>
      <Header />
      <Carrossel />
      <Pesquisa />
      <Destaques />
      <Financiamento />
      <Comprar />
      <Sobre />
      <Time />
      <Footer />
    </>
    
  )
}

export default App
