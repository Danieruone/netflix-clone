import React from "react";
import { Container, SocialMedia } from "./styles";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const Footer = () => {
  return (
    <Container>
      <SocialMedia>
        <a
          href="https://github.com/Danieruone/netflix-clone"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="https://darudev.dev" target="_blank" rel="noreferrer">
          <CgWebsite />
        </a>
        <a
          href="www.linkedin.com/in/daniel-mendoza-developer"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/Darudev" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </SocialMedia>
      <p>Made with ❤ by Daniel Mendoza</p>
    </Container>
  );
};
