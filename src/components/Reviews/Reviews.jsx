import { useSelector } from "react-redux";
import { selectReviews } from "../../redux/pharmacy/selectors";
import { Container } from "../../styles/GlobalStyles";
import * as s from "./Reviews.styled";
import { useScreenWidth } from "../../hooks/useScreenWidth";

const Reviews = () => {
  const reviews = useSelector(selectReviews);
  const screen = useScreenWidth();

  const displayCount = screen === "mobile" ? 1 : screen === "tablet" ? 2 : 3;

  return (
    <Container>
      <s.Title>Reviews</s.Title>
      <s.Text>Search for Medicine, Filter by your location</s.Text>
      <s.List>
        {reviews.slice(0, displayCount).map((review) => (
          <s.Item key={review._id}>
            <s.Avatar
              src={review.avatar}
              alt={`avatar ${review.name}`}
              loading="lazy"
            />
            <s.Name>{review.name}</s.Name>
            <s.Review>{review.testimonial}</s.Review>
          </s.Item>
        ))}
      </s.List>
    </Container>
  );
};

export default Reviews;
