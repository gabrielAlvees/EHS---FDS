import {
  Container,
  Link,
} from "./App.ts";

function App() {

  return (
    <Container>
        <Link         
        href="/pdfs/a.pdf"
        target="_blank"
        rel="noopener noreferrer">
          Almoxarifado
        </Link>

        <Link href="">
          Cozinha
        </Link>

        <Link href="">
          Geral
        </Link>

        <Link href=""> 
          Laboratorio
        </Link>

        <Link href="">
          Manutenção
        </Link>

        <Link href="">
          Produção
        </Link>
    </Container>
  )
}

export default App
