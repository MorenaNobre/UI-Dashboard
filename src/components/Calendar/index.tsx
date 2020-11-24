import React from 'react'

import { Container, CalendarWrapper, CalendarDate, CalendarIcon } from './styles'

const Calendar: React.FC = () => {
  return(
    <Container>
     <CalendarWrapper>
       <CalendarDate>
         29 may 2020
       </CalendarDate>
       <CalendarIcon />
     </CalendarWrapper>
    </Container>
  )
}

export default Calendar