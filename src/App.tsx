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
import { pdfsGeral } from "./GeralPdfs.ts";
import { pdfsLaboratorio } from "./LaboratorioPdfs.ts";
import { pdfsManutencao } from "./ManutencaoPdfs.ts";

function App() {
  const [showAlmox, setShowAlmox] = useState(false);
  const [showCozinha, setShowCozinha] = useState(false);
  const [showGeral, setShowGeral] = useState(false);
  const [showLaboratorio, setShowLaboratorio] = useState(false);
    const [showManutencao, setShowManutencao] = useState(false);

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

        <LinkButton onClick={() => setShowGeral(!showGeral)}>
          Geral
        </LinkButton>

        {showGeral && (
          <SmallButtonList>
            {pdfsGeral.map((item, index) => (
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

        <LinkButton onClick={() => setShowLaboratorio(!showLaboratorio)}>
          Laboratório
        </LinkButton>

        {showLaboratorio && (
          <SmallButtonList>
            {pdfsLaboratorio.map((item, index) => (
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

        <LinkButton onClick={() => setShowManutencao(!showManutencao)}>
          Manutenção
        </LinkButton>

        {showManutencao && (
          <SmallButtonList>
            {pdfsManutencao.map((item, index) => (
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
          Produção
        </LinkButton>
      </Container>
    </>
  );
}

export default App;
