import React from 'react'

import { Container, Greeting, TitleHello, Daily } from './styles'

const HelloName: React.FC = () => {
  return(
    <Container>
     <Greeting>
       <TitleHello>
         Hello John  !
       </TitleHello>
       <Daily>
         Here is your daily statistic
       </Daily>
     </Greeting>
    </Container>
  )
}

export default HelloName