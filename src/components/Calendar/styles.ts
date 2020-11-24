import styled from "styled-components";
import { Calendar } from "styled-icons/boxicons-regular";

export const Container = styled.div`
  grid-area: CL;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: var(--blue-primary); */
  background-color: var(--white-bg);
  padding: 11px 0;
  max-height: 100vh;
`;

export const CalendarWrapper = styled.div`
  height: 52px;
  background: var(--white-icon);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 194px;
  padding: 18px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px 1px;
`;

export const CalendarDate = styled.div`
  font-size: 16px;
  color: var(--light-grey);
`;

export const CalendarIcon = styled(Calendar)`
  width: 24px;
  height: 24px;
  color: var(--light-grey);
  cursor: pointer;
`;
