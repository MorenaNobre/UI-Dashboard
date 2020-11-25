import React from "react";

import {
  Container,
  SmallCard,
  Title,
  MiddleTitle,
  PieChart,
  MediumCard,
  BarChart,
  Clock,
} from "./styles";

const MeasureGraphics: React.FC = () => {
  return (
    <Container>
      <SmallCard>
        <Title>Most Popular Days</Title>
        <PieChart />
      </SmallCard>
      <MediumCard>
        <MiddleTitle>Most Popular Time</MiddleTitle>
        <BarChart />
      </MediumCard>
      <SmallCard>
        <Title>Avarage Advance Order Time</Title>
        <Clock />
      </SmallCard>
    </Container>
  );
};

export default MeasureGraphics;
