import { useState } from "react";
import Banner from "../../Component/Banner/Banner";
import Booking from "../../Component/Booking/Booking";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Menus from "../../Component/Menus/Menus";
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";
import MenuCard from "../MenuCard/MenuCard";

const Main = () => {
  const [activeOption, setActiveOption] = useState("Home");

  const scrollToBookingSection = () => {
    const bookingElement = document.getElementById("booking-section");
    bookingElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
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
    </>
  );
};
export default Main;
