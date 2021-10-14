import styled from "styled-components";
import bannerImage from "../../assets/img/banner.jpg";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  min-height: 20rem;
  position: relative;
  background-image: url(${bannerImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(60%);
`;

export const BannerBackground = styled.div`
  h1 {
    color: #fff;
  }
`;
