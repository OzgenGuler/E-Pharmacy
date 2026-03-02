import { social } from "../../../data/social";
import sprite from "../../../assets/icons/sprite.svg";
import * as s from "./Social.styled";

const Social = () => {
  return (
    <s.Wrapper>
      {social.map((item) => (
        <s.Item key={item.id}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.id}
          >
            <svg width={28} height={28}>
              <use href={`${sprite}#${item.icon}`} />
            </svg>
          </a>
        </s.Item>
      ))}
    </s.Wrapper>
  );
};

export default Social;
