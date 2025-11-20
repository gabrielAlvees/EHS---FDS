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
  "/pdfs/01FISPQ-Oxigenio-Liquido.pdf",
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
            {almoxarifadoPDFs.map((pdf, index) => (
              <SmallLinkButton
                key={index}
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                {index + 1}
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
