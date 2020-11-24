import React from 'react'

import { Container, IconsWrapper, SearchIconWrapper, SearchIcon, HomeIconsWrapper, HomeIcon, InfoChatIcon, ConfigIcon, ExitWrapper, ExitIcon } from './styles'

const Menu: React.FC = () => {
  return(
    <Container>
     <IconsWrapper>
       <SearchIconWrapper>
         <SearchIcon />
       </SearchIconWrapper>
       <HomeIconsWrapper>
         <HomeIcon />
         <InfoChatIcon />
         <ConfigIcon />
       </HomeIconsWrapper>
       <ExitWrapper>
         <ExitIcon />
       </ExitWrapper>
     </IconsWrapper>
    </Container>
  )
}

export default Menu