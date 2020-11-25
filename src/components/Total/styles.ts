import styled from "styled-components";
import { ClipboardList } from "styled-icons/heroicons-outline";
import { ExpandMore, PeopleAlt } from "styled-icons/material-rounded";
import { HandHoldingUsd } from 'styled-icons/fa-solid'
import { Restaurant } from 'styled-icons/ionicons-outline'


export const Container = styled.div`
  grid-area: TL;
  align-items: center;
  background-color: var(--white-bg);
  max-height: 100vh;
  /* width: 100vw;
  margin: 0 auto; */
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Card = styled.div`
  background-color: var(--white-icon);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 142px;
  width: 250px;
  border-radius: 16px;
  padding: 12px 12px 0 12px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: var(--light-grey);
  justify-content: flex-start;
  width: 250px;
  padding-left: 18px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  padding-left: 18px;
  padding-right: 32px;
`;

export const NumberInfo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: var(--dark-grey);
`;

export const Clipboard = styled(ClipboardList)`
  width: 38px;
  height: 38px;
  color: var(--dark-grey);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue-primary);
  width: 250px;
  padding: 8px;
  border-radius: 0 0 16px 16px;
`;

export const Info = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: var(--white-icon);
  margin-right: 5px;
`;

export const Expand = styled(ExpandMore)`
  width: 18px;
  height: 18px;
  color: var(--white-icon);
`;

export const MoneyHand = styled(HandHoldingUsd)`
  width: 38px;
  height: 38px;
  color: var(--dark-grey);
`

export const RestaurantTotal = styled(Restaurant)`
  width: 38px;
  height: 38px;
  color: var(--dark-grey);
`

export const Client = styled(PeopleAlt)`
  width: 38px;
  height: 38px;
  color: var(--dark-grey);
`