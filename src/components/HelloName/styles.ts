import styled from 'styled-components'

export const Container = styled.div`
  grid-area: HN;
  display: flex;
  align-items: center;
  /* background-color: var(--blue-primary); */
  background-color: var(--white-bg);
  padding: 11px 0;
  max-height: 100vh;
`

export const Greeting = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 32px;
  align-items: flex-start;
  background: var(--white-bg);
`

export const TitleHello = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: var(--light-grey);
`

export const Daily = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: var(--light-grey);
`