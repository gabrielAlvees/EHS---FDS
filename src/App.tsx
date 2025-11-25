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
    pdf: "/pdfs/Almoxarifado/01FISPQ-Oxigenio-Liquido.pdf"
  },
  {
    nome: "02. FISPQ Argonio 256431",
    pdf: "/pdfs/Almoxarifado/02. FISPQ Argonio 256431.pdf"
  },
  {
    nome: "03. FISPQ Nitrogênio 256452",
    pdf: "/pdfs/Almoxarifado/03. FISPQ Nitrogênio 256452.pdf"
  },
  {
    nome: "04. FISPQ Oxigênio",
    pdf: "/pdfs/Almoxarifado/04. FISPQ Oxigênio.pdf"
  },
  {
    nome: "05. FISPQ Argonio 256535",
    pdf: "/pdfs/Almoxarifado/05. FISPQ Argonio 256535.pdf"
  },
  {
    nome: "06. FISPQ Acetileno 405951",
    pdf: "/pdfs/Almoxarifado/06. FISPQ Acetileno 405951.pdf"
  },
  {
    nome: "07. FISPQ Mistura de Gases 417923",
    pdf: "/pdfs/Almoxarifado/07. FISPQ Mistura de Gases 417923.pdf"
  },
  {
    nome: "08. FISPQ Catalisador Mek",
    pdf: "/pdfs/Almoxarifado/08. FISPQ Catalisador Mek.pdf"
  },
  {
    nome: "09. FISPQ Massa Plástica Branca",
    pdf: "/pdfs/Almoxarifado/09. FISPQ Massa Plastica branca.pdf"
  },
  {
    nome: "10. FISPQ Gel Desengraxante Premium Citrus",
    pdf: "/pdfs/Almoxarifado/10. FISPQ Gel Desengr. Premium Citrus.pdf"
  },
  {
    nome: "11. FISPQ Gel Desengraxante Premium",
    pdf: "/pdfs/Almoxarifado/11. FISPQ Gel Desengr. Premium.pdf"
  },
  {
    nome: "12. FISPQ Sabão em Pasta Desengraxante",
    pdf: "/pdfs/Almoxarifado/12. FISPQ Sabão em Pasta Desengrax..pdf"
  },
  {
    nome: "13. FISPQ Limpa Pedra D’Visão",
    pdf: "/pdfs/Almoxarifado/13. FISPQ Limpa Pedra DVisão.pdf"
  },
  {
    nome: "14. FISPQ Adesivo Silicone Acetoxi Incolor",
    pdf: "/pdfs/Almoxarifado/14. FISPQ Adesivo Silicone Ac. Incolor.pdf"
  },
  {
    nome: "15. FISPQ Lubrific. Tilub HL-MO",
    pdf: "/pdfs/Almoxarifado/15. FISPQ Lubrific. Tilub HL-MO.pdf"
  },
  {
    nome: "16. FISPQ Lubrific. TILUB MOL G Plus",
    pdf: "/pdfs/Almoxarifado/16. FISPQ Lubrific. TILUB MOL G Plus.pdf"
  },
  {
    nome: "17. FISPQ Fernel ALF 10",
    pdf: "/pdfs/Almoxarifado/17. FISPQ Fernel ALF 10.pdf"
  },
  {
    nome: "18. FISPQ Sabão Deseng. Pinheiro",
    pdf: "/pdfs/Almoxarifado/18. FISPQ Sabão Deseng. Pinheiro.pdf"
  },
  {
    nome: "19. FISPQ Silicone Pinheiro",
    pdf: "/pdfs/Almoxarifado/19. FISPQ Silicone Pinheiro.pdf"
  },
  {
    nome: "20. FISPQ Pretinho Pinheiro",
    pdf: "/pdfs/Almoxarifado/20. FISPQ Pretinho Pinheiro.pdf"
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
