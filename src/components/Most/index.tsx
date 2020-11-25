import React from "react";

import {
  Container,
  CardLoyal,
  Title,
  CustomerWrapper,
  LabelWrapper,
  Label,
  PeopleWrapper,
  Avatar,
  PeopleName,
  PeopleProfession,
  PeopleOrder,
  PeopleRating,
  Stars,
  ManyStars,
  Button,
  More,
  Expand,
  CardPopular,
  TitlePopular,
  PizzaChart
} from "./styles";

const Most: React.FC = () => {
  return (
    <Container>
      <CardLoyal>
        <Title>Most Loyal Customer</Title>
        <CustomerWrapper>
          <LabelWrapper>
            <Label>Profile</Label>
            <Label>Name</Label>
            <Label>Profession</Label>
            <Label>Order</Label>
            <Label>Rating</Label>
          </LabelWrapper>
          <PeopleWrapper>
            <Avatar />
            <PeopleName>John</PeopleName>
            <PeopleProfession>Doctor</PeopleProfession>
            <PeopleOrder>7</PeopleOrder>
            <PeopleRating>
              <Stars />
              <ManyStars>5</ManyStars>
            </PeopleRating>
          </PeopleWrapper>
          <PeopleWrapper>
            <Avatar />
            <PeopleName>John</PeopleName>
            <PeopleProfession>Doctor</PeopleProfession>
            <PeopleOrder>7</PeopleOrder>
            <PeopleRating>
              <Stars />
              <ManyStars>5</ManyStars>
            </PeopleRating>
          </PeopleWrapper>
        </CustomerWrapper>
        <Button>
          <More>See More</More>
          <Expand />
        </Button>
      </CardLoyal>
      <CardPopular>
        <TitlePopular>Most Popular food</TitlePopular>
        <PizzaChart />
      </CardPopular>
    </Container>
  );
};

export default Most;
