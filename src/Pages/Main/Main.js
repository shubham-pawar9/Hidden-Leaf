import { useState } from "react";
import Banner from "../../Component/Banner/Banner";
import Booking from "../../Component/Booking/Booking";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Menus from "../../Component/Menus/Menus";
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";
import MenuCard from "../MenuCard/MenuCard";
import { APP_THEME_COLORS, IS_DARK_THEME } from "../../constants/theme";

const Main = () => {
  const [activeOption, setActiveOption] = useState("Home");

  const scrollToBookingSection = () => {
    const bookingElement = document.getElementById("booking-section");
    bookingElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ backgroundColor: IS_DARK_THEME ? APP_THEME_COLORS.background : "#fff" }}>
      <Header activeOption={activeOption} setActiveOption={setActiveOption} />
      {activeOption === "Menus" && <MenuCard />}
      {activeOption === "Home" && (
        <>
          <Heading onBookTableClick={scrollToBookingSection} />
          <SubHeading />
          <Menus />
          <Banner />
          <Booking />
        </>
      )}
      <Footer />
    </div>
  );
};
export default Main;
