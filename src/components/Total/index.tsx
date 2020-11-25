import React from 'react'

import { Container, Card, Title, ContentWrapper, NumberInfo, Clipboard, ButtonWrapper, Info, Expand, MoneyHand , RestaurantTotal, Client} from './styles'

const Total: React.FC = () => {
  return(
    <Container>
     <Card>
       <Title>Total order</Title>
       <ContentWrapper>
         <NumberInfo>10</NumberInfo>
         <Clipboard />
       </ContentWrapper>
       <ButtonWrapper>
         <Info>More info</Info>
         <Expand />
       </ButtonWrapper>
     </Card>
     <Card>
       <Title>Total earning (after taxes)</Title>
       <ContentWrapper>
         <NumberInfo>$91.73</NumberInfo>
         <MoneyHand />
       </ContentWrapper>
       <ButtonWrapper>
         <Info>More info</Info>
         <Expand />
       </ButtonWrapper>
     </Card>
     <Card>
       <Title>Restaurants</Title>
       <ContentWrapper>
         <NumberInfo>3</NumberInfo>
         <RestaurantTotal />
       </ContentWrapper>
       <ButtonWrapper>
         <Info>More info</Info>
         <Expand />
       </ButtonWrapper>
     </Card>
     <Card>
       <Title>Total clients</Title>
       <ContentWrapper>
         <NumberInfo>2</NumberInfo>
         <Client />
       </ContentWrapper>
       <ButtonWrapper>
         <Info>More info</Info>
         <Expand />
       </ButtonWrapper>
     </Card>
    </Container>
  )
}

export default Total