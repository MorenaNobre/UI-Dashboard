import styled from "styled-components";
import { Notifications } from "styled-icons/material";
import { Chatbubbles } from "styled-icons/ionicons-sharp";

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: var(--blue-primary); */
  background-color: var(--white-bg);
  padding: 11px 0;
  max-height: 100vh;
`;

export const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
`;

export const BellIcon = styled(Notifications)`
  width: 18px;
  height: 18px;
  color: var(--dark-grey);
  margin-right: 6px;
`;

export const Notification = styled.p`
  font-size: 16px;
  color: var(--dark-grey);
  margin-right: 20px;
  cursor: pointer;
`;

export const ChatIcon = styled(Chatbubbles)`
  width: 18px;
  height: 18px;
  color: var(--dark-grey);
  margin-right: 6px;
`;

export const Chat = styled.p`
  font-size: 16px;
  color: var(--dark-grey);
  margin-right: 20px;
  cursor: pointer;
`;

export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  background-image: url(https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60);
  background-size: 42px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  border-radius: 50%;
  /* position: absolute; */
  /* bottom: max(-60px, -10vw); */
  /* left: 15px; */
`;
