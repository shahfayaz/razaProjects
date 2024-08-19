import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react'
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*{
box-sizing: border-box;
margin: 0;
padding: 0;
}
body{
background-color:#323334;
color:white;
min-height: 100vh;

}
`;








createRoot(document.getElementById("root")).render(
  <StrictMode>
 <GlobalStyle />
    <App />
  </StrictMode>
);
