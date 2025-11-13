import {
  Container,
  Link,
} from "./App.ts";

function App() {

  return (
    <Container>
        <Link href="pdf/a/a.pdf" target="_blank">
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
