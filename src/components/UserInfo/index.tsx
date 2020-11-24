import React from 'react'

import { Container, UserWrap, BellIcon, Notification, ChatIcon, Chat, Avatar } from './styles'

const UserInfo: React.FC = () => {
  return(
    <Container>
     <UserWrap>
       <BellIcon />
       <Notification>
         Notification
       </Notification>
       <ChatIcon />
       <Chat>
         Chat
       </Chat>
       <Avatar />
     </UserWrap>
    </Container>
  )
}

export default UserInfo