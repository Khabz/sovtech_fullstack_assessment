import React from "react";
import { useHistory } from "react-router-dom";
import { BannerContainer, BannerBackground } from "./banner.styles";
import { IoArrowBackCircle } from "react-icons/io5";

interface IBannerProps {
  title: string;
  requireBack: boolean;
}

const Banner = (props: IBannerProps) => {
  const { title, requireBack } = props;
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <BannerContainer>
      {requireBack && <IoArrowBackCircle onClick={handleBack} />}
      <BannerBackground>
        <h1>{title}</h1>
      </BannerBackground>
    </BannerContainer>
  );
};

export default Banner;
