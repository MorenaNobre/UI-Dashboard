import styled from 'styled-components'

export const Container = styled.div`
  grid-area: MG;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-bg);
  max-height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
`

export const SmallCard = styled.div`
  background: var(--white-icon);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 182px;
  width: 350px;
  border-radius: 16px;
  padding: 8px 0 8px 0;
`

export const MediumCard = styled.div`
  background: var(--white-icon);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 182px;
  width: 450px;
  border-radius: 16px;
  padding: 8px 0 8px 0;
`

export const Title = styled.div`
  width: 350px;
  font-size: 14px;
  font-weight: bold;
  color: var(--dark-grey);
  justify-content: flex-start;
  padding-left: 18px;
  padding-bottom: 10px;
  border-bottom: solid 1px #c2c3c4;
`

export const MiddleTitle = styled.div`
  width: 450px;
  font-size: 14px;
  font-weight: bold;
  color: var(--dark-grey);
  justify-content: flex-start;
  padding-left: 18px;
  padding-bottom: 10px;
  border-bottom: solid 1px #c2c3c4;
`

export const PieChart = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  background-image: url(./assets/pie-chart.svg);
  background-size: 120px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  border-radius: 50%;
`

export const BarChart = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  background-image: url(./assets/bar-chart.svg);
  background-size: 120px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`

export const Clock = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  background-image: url(./assets/clock.svg);
  background-size: 120px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  border-radius: 50%;
`