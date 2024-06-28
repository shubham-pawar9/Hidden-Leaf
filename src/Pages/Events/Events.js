import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Booking from "../../Component/Booking/Booking";

const Styles = {
  menusBox: {
    padding: "0 60px",
    marginTop: "60px",
    "@media (max-width: 700px)": {
      padding: "0 20px",
    },
  },
  menuHeading: {
    marginBottom: "40px",
    textAlign: "left",
    fontSize: "35px",
    fontWeight: 600,
    fontFamily: "Inter",
  },
  bannerImage: {
    height: "90%",
  },
  bannerBox: {
    height: "400px",
    padding: "15px",
    boxShadow: "0px 0px 8px 0px #00000040",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bannerMainBox: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",

    gap: "50px",
  },
  eventText: {
    fontSize: "22px",
    fontFamily: "Inter",
    fontWeight: 500,
  },
  eventBox: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
  },
  day: {
    fontSize: "90px",
    fontFamily: "Inter",
    fontWeight: 600,
    textShadow: "-1px -5px 6px #010101db",
    color: "#ffffff",
  },
  month: {
    fontSize: "22px",
    fontFamily: "Inter",
    fontWeight: 600,
    textShadow: "-1px -5px 6px #010101db",
    color: "#ffffff",
  },
  year: {
    fontSize: "18px",
    fontFamily: "Inter",
    fontWeight: 600,
    textShadow: "-1px -5px 6px #010101db",
    color: "#ffffff",
  },
  box1: {
    border: "1px solid #E6E6E6",
    padding: "10px 36px",
    boxShadow: "8px 8px 4px 0px #00000040",
    borderRadius: "10px",
    color: "rgba(0, 0, 0, 0.87)",
    backgroundImage: "linear-gradient(90deg, #205a18, #c4ed70)",
  },
  name: {
    fontSize: "20px",
    fontFamily: "Inter",
    fontWeight: 600,
  },
  details: {
    fontSize: "18px",
    fontFamily: "Inter",
    fontWeight: 600,
  },
  size: {
    fontSize: "18px",
    fontFamily: "Inter",
    fontWeight: 600,
  },
  time: {
    fontSize: "18px",
    fontFamily: "Inter",
    fontWeight: 600,
  },
  box2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
    border: "1px solid #E6E6E6",
    padding: "10px 36px",
    boxShadow: "8px 8px 4px 0px #00000040",
    borderRadius: "10px",
    color: "rgba(0, 0, 0, 0.87)",
    backgroundImage: "linear-gradient(90deg, #a7c960, #c4ed7085)",
  },
};

const Events = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const menuData = await fetch(process.env.PUBLIC_URL + "/events.json");
      const response = await menuData.json();
      setEvents(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <Box sx={Styles.menusBox}>
        <Typography variant="h4" sx={Styles.menuHeading}>
          Hidden-leaf’s Upcoming Events
        </Typography>
        <Box sx={Styles.bannerMainBox}>
          <Box sx={Styles.bannerBox}>
            <img
              src={process.env.PUBLIC_URL + "/images/events/banner1.png"}
              alt=""
              style={Styles.bannerImage}
            />
            <Typography sx={Styles.eventText}>
              Event on 22nd January 2024
            </Typography>
          </Box>
          <Box sx={Styles.bannerBox}>
            <img
              src={process.env.PUBLIC_URL + "/images/events/banner2.png"}
              alt=""
              style={Styles.bannerImage}
            />
            <Typography sx={Styles.eventText}>
              Event on 29nd January 2024
            </Typography>
          </Box>
          <Box sx={Styles.bannerBox}>
            <img
              src={process.env.PUBLIC_URL + "/images/events/banner3.png"}
              alt=""
              style={Styles.bannerImage}
            />
            <Typography sx={Styles.eventText}>
              Event on 3rd February 2024
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={Styles.menusBox}>
        <Typography variant="h4" sx={Styles.menuHeading}>
          Upcoming Booked Events
        </Typography>
        <Box sx={Styles.bannerMainBox}>
          {events &&
            events.map((item) => {
              const monthArray = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
              let day = item.date.split("-")[0];
              let month = monthArray[item.date.split("-")[1] - 1];
              let year = item.date.split("-")[2];
              return (
                <Box sx={Styles.eventBox}>
                  <Box sx={Styles.box1}>
                    <Typography sx={Styles.day}>{day}</Typography>
                    <Typography sx={Styles.month}>{month}</Typography>
                    <Typography sx={Styles.year}>{year}</Typography>
                  </Box>
                  <Box sx={Styles.box2}>
                    <Typography sx={Styles.name}>{item.eventName}</Typography>
                    <Typography sx={Styles.details}>{item.details}</Typography>
                    <Typography sx={Styles.size}>Size - {item.size}</Typography>
                    <Typography sx={Styles.time}>Time - {item.time}</Typography>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
      <Booking />
    </>
  );
};

export default Events;
