import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import './styles/global.css'

function App() {
  return (
    <section className="containerHomePage">
      <Header/>
      <Main/>
      <Footer/>
      <ScrollToTop/>
    </section>
  )
}

export default App
