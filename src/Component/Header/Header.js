import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";

const Styles = {
  headerName: {
    marginLeft: 10,
    fontSize: "26px",
    fontFamily: "Inter",
    fontWeight: 500,
  },
  callIcon: {
    height: "34px",
    width: "34px",
  },
  options: {
    margin: "0 25px",
    fontSize: "20px",
    fontFamily: "Inter",
    fontWeight: 500,
    position: "relative",
    cursor: "pointer",
    padding: "0 10px",
    "&.active": {
      borderBottom: "2px solid black",
    },
  },
  bookingNumber: {
    position: "absolute",
    top: "-17px",
    right: "-23px",
    height: "27px",
    width: "27px",
    background: "black",
    borderRadius: "50%",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    fontFamily: "Inter",
  },
};

const Header = ({ activeOption, setActiveOption }) => {
  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ padding: "5px" }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src="./images/logo.png"
            alt="Hidden Leaf"
            style={{ width: 70, height: 70, borderRadius: "50%" }}
          />
          <Typography
            variant="h6"
            color="textPrimary"
            style={Styles.headerName}
          >
            Hidden-Leaf
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <Box display="flex" alignItems="center">
          <IconButton edge="end" color="inherit" sx={{ marginRight: 2 }}>
            <img src="./images/call.png" alt="" style={Styles.callIcon} />
          </IconButton>
          {["Menus", "Events", "Bookings", "About Us"].map((option) => (
            <Typography
              key={option}
              variant="body1"
              color="textPrimary"
              sx={{
                ...Styles.options,
                ...(activeOption === option && Styles.options["&.active"]),
              }}
              onClick={() => handleOptionClick(option)}
            >
              {option}
              {option === "Bookings" && (
                <Box>
                  <Typography
                    variant="v6"
                    color="textPrimary"
                    sx={Styles.bookingNumber}
                  >
                    3
                  </Typography>
                </Box>
              )}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
