import React from "react";
import Container from "../Container/Container";
import { MainStyled, MainHeading, FactsList, FactsItem } from "./MainStyled";

const Main = () => {
  return (
    <>
      <MainStyled>
        <Container>
          <MainHeading>Fun facts about React</MainHeading>
          <FactsList>
            <FactsItem>Was first released in 2013</FactsItem>
            <FactsItem>Was originally created by Jordan Walke</FactsItem>
            <FactsItem>Has well over 100K stars on GitHub</FactsItem>
            <FactsItem>Is maintained by Facebook</FactsItem>
            <FactsItem>Powers thousands of enterprise apps, including mobile apps</FactsItem>
          </FactsList>
        </Container>
      </MainStyled>
    </>
  );
};

export default Main;
