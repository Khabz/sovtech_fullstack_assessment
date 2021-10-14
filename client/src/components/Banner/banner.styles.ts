import styled from "styled-components";
import bannerImage from "../../assets/img/banner.jpg";

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 20rem;
  position: relative;
  background-image: url(${bannerImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;

  svg {
    margin-top: 1rem;
    margin-left: 1rem;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const BannerBackground = styled.div`
  width: 100%;  
  align-self: center;
  text-align: center;
  h1 {
    color: #fff;
    margin: auto;
  }
`;
