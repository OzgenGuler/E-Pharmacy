import { useSelector } from "react-redux";
import { selectProduct } from "../../../redux/pharmacy/selectors";
import { useState } from "react";
import * as s from "./TabsContainer.styled";
import sprite from "../../../assets/icons/sprite.svg";
import { useMediaQuery } from "react-responsive";

const TabsContainer = () => {
  const { description, reviews } = useSelector(selectProduct);
  const [showDescription, setShowDescription] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleDescription = () => {
    setShowDescription(true);
    setShowReviews(false);
  };

  const handleReviews = () => {
    setShowReviews(true);
    setShowDescription(false);
  };

  return (
    <s.Wrapper>
      <s.BtnWrapper>
        <s.Button
          type="button"
          onClick={handleDescription}
          $active={showDescription ? true : false}
        >
          Description
        </s.Button>
        <s.Button
          type="button"
          onClick={handleReviews}
          $active={showReviews ? true : false}
        >
          Reviews
        </s.Button>
      </s.BtnWrapper>
      {showDescription && (
        <s.Container>
          <s.Main>{description.main}</s.Main>
          {description.prescription.map((item) => (
            <s.Prescription key={item.title}>
              <span>{item.title}</span> {item.text}
            </s.Prescription>
          ))}
        </s.Container>
      )}
      {showReviews && (
        <s.Reviews>
          {reviews.map((review) => (
            <s.Review key={review.photo}>
              <s.Profile>
                <s.Photo
                  src={review.photo}
                  alt={`photo ${review.reviewer}`}
                  loading="lazy"
                />
                <s.Name>
                  <s.Reviewer>{review.reviewer}</s.Reviewer>
                  <s.Date>{review.date}</s.Date>
                </s.Name>
              </s.Profile>
              <s.Rating>
                {mobile ? (
                  <s.Star width={16} height={16}>
                    <use href={`${sprite}#star`} />
                  </s.Star>
                ) : (
                  [...Array(5)].map((_, index) => (
                    <s.StarTablet
                      key={index}
                      width={16}
                      height={16}
                      $active={index < review.rating}
                    >
                      <use href={`${sprite}#star`} />
                    </s.StarTablet>
                  ))
                )}
                <p>{review.rating}</p>
              </s.Rating>
              <s.Comment>{review.comment}</s.Comment>
            </s.Review>
          ))}
        </s.Reviews>
      )}
    </s.Wrapper>
  );
};

export default TabsContainer;
