import styled from "styled-components";
import { Star } from "styled-icons/fa-solid";
import { ExpandMore } from "styled-icons/material-rounded";

export const Container = styled.div`
  grid-area: MT;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white-bg);
  max-height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
`;

export const CardLoyal = styled.div`
  background: var(--white-icon);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 226px;
  width: 650px;
  border-radius: 16px;
  padding: 8px 0 8px 0;
`;

export const Title = styled.div`
  width: 650px;
  font-size: 14px;
  font-weight: bold;
  color: var(--dark-grey);
  justify-content: flex-start;
  padding-left: 18px;
  padding-bottom: 10px;
  border-bottom: solid 1px #c2c3c4;
`;

export const CustomerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  align-items: center;
  justify-content: center;
`;

export const LabelWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  width: 550px;
  border-bottom: solid 1px #c2c3c4;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: var(--dark-grey);
  text-align: center;
`;

export const PeopleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: space-between;
  width: 550px;
  text-align: center;
  margin: 0px 0 16px 0;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background-image: url(https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60);
  background-size: 32px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  border-radius: 50%;
  justify-self: center;
`;

export const PeopleName = styled.p`
  font-size: 14px;
  color: var(--light-grey);
`;

export const PeopleProfession = styled.p`
  font-size: 14px;
  color: var(--light-grey);
`;

export const PeopleOrder = styled.p`
  font-size: 14px;
  color: var(--light-grey);
`;

export const PeopleRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Stars = styled(Star)`
  width: 12px;
  height: 12px;
  color: yellow;
  margin-right: 6px;
`;

export const ManyStars = styled.p`
  font-size: 14px;
  color: var(--light-grey);
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const More = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: var(--dark-grey);
`;

export const Expand = styled(ExpandMore)`
  width: 20px;
  height: 20px;
  color: var(--dark-grey);
  margin-left: 6px;
`;

export const CardPopular = styled.div`
  background: var(--white-icon);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 226px;
  width: 550px;
  border-radius: 16px;
  padding: 8px 0 32px 0;
`;

export const TitlePopular = styled.div`
  width: 550px;
  font-size: 14px;
  font-weight: bold;
  color: var(--dark-grey);
  justify-content: flex-start;
  padding-left: 18px;
  padding-bottom: 10px;
  border-bottom: solid 1px #c2c3c4;
`;

export const PizzaChart = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  background-image: url(./assets/pizza-chart.svg);
  background-size: 120px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  border-radius: 50%;
`;
