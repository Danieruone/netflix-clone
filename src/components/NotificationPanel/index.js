import React from "react";
import { Container, TopBar, Content } from "./styles";

import { NotificationElement } from "components/NotificationElement";

export const NotificationPanel = () => {
  return (
    <Container>
      <TopBar />
      <Content>
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
        <NotificationElement />
      </Content>
    </Container>
  );
};
