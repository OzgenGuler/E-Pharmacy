import MainBanner from "../../components/MainBanner/MainBanner";
import NearestStores from "../../components/NearestStores/NearestStores";
import PharmacyPromo from "../../components/PharmacyPromo/PharmacyPromo";
import PromoBanners from "../../components/PromoBanners/PromoBanners";
import Reviews from "../../components/Reviews/Reviews";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <NearestStores />
      <PharmacyPromo />
      <Reviews />
    </>
  );
};

export default HomePage;
