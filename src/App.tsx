import { useState } from "react";
import { 
  Title, 
  Container, 
  LinkButton, 
  ButtonMain, 
  SmallButtonList, 
  SmallLinkButton 
} from "./App.ts";

const almoxarifadoPDFs = [
  {
    nome: "01. FDS Oxigênio Líquido",
    pdf: "/pdfs/01FISPQ-Oxigenio-Liquido.pdf"
  },
  {
    nome: "02. FDS Nitrogênio Líquido",
    pdf: "/pdfs/02FISPQ-Nitrogenio-Liquido.pdf"
  }
];

function App() {
  const [showAlmox, setShowAlmox] = useState(false);

  return (
    <>
      <Title>Consulta de FDS - Segurança do Trabalho</Title>

      <Container>

        <ButtonMain onClick={() => setShowAlmox(!showAlmox)}>
          Almoxarifado
        </ButtonMain>

        {showAlmox && (
          <SmallButtonList>
            {almoxarifadoPDFs.map((item, index) => (
              <SmallLinkButton
                key={index}
                href={item.pdf}
                target="_blank"
              >
                {item.nome}
                
              </SmallLinkButton>
            ))}
          </SmallButtonList>
        )}

        <LinkButton href="/pdfs/cozinha.pdf" target="_blank">
          Cozinha
        </LinkButton>

        <LinkButton href="">
          Geral
        </LinkButton>

        <LinkButton href="">
          Laboratório
        </LinkButton>

        <LinkButton href="">
          Manutenção
        </LinkButton>

        <LinkButton href="">
          Produção
        </LinkButton>
      </Container>
    </>
  );
}

export default App;
