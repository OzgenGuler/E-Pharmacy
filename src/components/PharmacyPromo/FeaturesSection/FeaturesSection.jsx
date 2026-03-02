import { featuresSectionData } from "../../../data/featuresSection";
import sprite from "../../../assets/icons/sprite.svg";
import * as s from "./FeaturesSection.styled";

const FeaturesSection = () => {
  return (
    <s.Wrapper>
      {featuresSectionData.map((text) => (
        <s.Item key={text}>
          <svg width={20} height={20}>
            <use href={`${sprite}#lightning`} />
          </svg>
          <s.Text>{text}</s.Text>
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default FeaturesSection;
