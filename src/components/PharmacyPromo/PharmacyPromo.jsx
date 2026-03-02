import { useEffect, useState } from "react";
import { imgAdaptive } from "../../data/pharmacyPromo";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { Container } from "../../styles/GlobalStyles";
import * as s from "./PharmacyPromo.styled";
import FeaturesSection from "./FeaturesSection/FeaturesSection";

const PharmacyPromo = () => {
  const screenWidth = useScreenWidth();
  const [imageAdaptive, setImageAdaptive] = useState(imgAdaptive[screenWidth]);

  useEffect(() => {
    setImageAdaptive(imgAdaptive[screenWidth]);
  }, [screenWidth]);

  return (
    <Container>
      <s.Wrapper>
        <div>
          <s.Title>Add the medicines you need online now</s.Title>
          <s.Text>
            Enjoy the convenience of having your prescriptions filled from home
            by connecting with your community pharmacy through our online
            platform.
          </s.Text>
          <s.Button to="/medicine-store">Buy medicine</s.Button>
        </div>
        <s.Img
          srcSet={`${imageAdaptive.oneX} 1x, ${imageAdaptive.twoX} 2x`}
          src={`${imageAdaptive.oneX}`}
          alt="Girl with phone and pills"
          loading="lazy"
        />
      </s.Wrapper>
      <FeaturesSection />
    </Container>
  );
};

export default PharmacyPromo;
