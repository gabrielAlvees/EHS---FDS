import { useState } from "react";
import { 
  Title, 
  Container, 
  LinkButton, 
  ButtonMain, 
  SmallButtonList, 
  SmallLinkButton 
} from "./App.ts";

import { pdfsAlmoxarifado } from "./AlmoxarifadoPdfs.ts";
import { pdfsCozinha } from "./CozinhaPdfs.ts";

function App() {
  const [showAlmox, setShowAlmox] = useState(false);
  const [showCozinha, setShowCozinha] = useState(false);

  return (
    <>
      <Title>Consulta de FDS - Segurança do Trabalho</Title>

      <Container>

        <ButtonMain onClick={() => setShowAlmox(!showAlmox)}>
          Almoxarifado
        </ButtonMain>

        {showAlmox && (
          <SmallButtonList>
            {pdfsAlmoxarifado.map((item, index) => (
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

        <LinkButton onClick={() => setShowCozinha(!showCozinha)}>
          Cozinha
        </LinkButton>

        {showCozinha && (
          <SmallButtonList>
            {pdfsCozinha.map((item, index) => (
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
