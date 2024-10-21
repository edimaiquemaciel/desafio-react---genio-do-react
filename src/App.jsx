import { useState } from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import lampadaMagica from './assets/Imagem Lâmpada mágica.png'
import lampadaGenio from './assets/Imagem Gênio com a lâmpada.png'
import './style.scss'


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sevillana", cursive;
}
`;


const Botao = styled.button`
padding: 15px 50px;
background-color: #007BFF;
color: #FFFFFF;
border-radius: 50px;
border: none;
cursor: pointer;
font-size: 36px;
position: relative;
top: -50px;
@media (max-width: 768px){
  font-size: 30px;
}
@media(max-width: 480px){
  background-color: #B74794;
  top: -150px;
}

`;

function App() {
  const [lampada, setLampada ] = useState(false)

  return (
    <main>
      <GlobalStyle />
      <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>
      <img src={lampada ? lampadaGenio : lampadaMagica} alt="Lâmpada Mágica" />
      <Botao onClick={() => setLampada(!lampada)}>Esfregue a lâmpada</Botao>
      
    </main>
  )
}

export default App
