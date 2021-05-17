import Styled from "styled-components";
// images
import hero from "../assets/images/hero.jpg";

export const Hero = Styled.div`
    background-image: url(${hero});
    background-size: cover;
    padding: 50px;
    height: 100vh;
`;