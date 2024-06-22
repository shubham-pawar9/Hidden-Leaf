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
  const [menucards, setMenucards] = useState(false);
  return (
    <>
      <Header setMenucards={setMenucards} />
      {menucards && <MenuCard />}
      {!menucards && (
        <>
          <Heading />
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
