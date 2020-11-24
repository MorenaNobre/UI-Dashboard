import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  } 

  *, double-button, input {
    border: 0;
    outline: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  :root {
    --white-bg: #F4F5F9;
    --white-card: #C2DAFF;
    --white-icon: #FFFDFF;
    --light-grey: #7D7F81;
    --dark-grey: #696969;
    --blue-primary: #7CA3DE;
    --blue-hover: #187CBE;
  }
`