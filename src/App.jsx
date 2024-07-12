import './App.css'
import Carrossel from './components/carrossel/Carrossel'
import Comprar from './components/comprar/Comprar'
import Destaques from './components/destaques/Destaques'
import Financiamento from './components/financiamento/Financiamento'
import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'

function App() {

  return (
    <>
      <Header />
      <Carrossel />
      <Destaques />
      <Financiamento />
      <Comprar />
      <Sobre />
    </>
    
  )
}

export default App
