import { useState } from "react";
import Banner from "../../Component/Banner/Banner";
import Booking from "../../Component/Booking/Booking";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Menus from "../../Component/Menus/Menus";
import Heading from "../Heading/Heading";
import SubHeading from "../SubHeading/SubHeading";
import MenuCard from "../MenuCard/MenuCard";
import Events from "../Events/Events";
import Bookings from "../Bookings/Bookings";

const Main = () => {
  const [activeOption, setActiveOption] = useState("Home");
  const [bookingData, setBookingData] = useState("");
  return (
    <>
      <Header activeOption={activeOption} setActiveOption={setActiveOption} />
      {activeOption == "Menus" && <MenuCard />}
      {activeOption == "Home" && (
        <>
          <Heading />
          <SubHeading />
          <Menus />
          <Banner />
        </>
      )}
      {activeOption == "Events" && <Events />}
      {activeOption == "Bookings" && (
        <Bookings bookingData={bookingData} setBookingData={setBookingData} />
      )}
      <Footer />
    </>
  );
};
export default Main;
