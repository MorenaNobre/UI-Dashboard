import styled from 'styled-components'

//MN - Menu
//HN - Hello Name
//CL - Calendar
//UI - User Info
//TL - Total
//MG - Measure Graphics
//MT - Most

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 350px auto 350px;
  grid-template-rows: 10% 25% 25% 40%;

  grid-template-areas: 
    'MN HN CL UI'
    'MN TL TL TL'
    'MN MG MG MG'
    'MN MT MT MT';

  height: 100vh;
`