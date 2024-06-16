import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

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
const Header = () => {
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
          <Typography variant="body1" color="textPrimary" sx={Styles.options}>
            Menus
          </Typography>
          <Typography variant="body1" color="textPrimary" sx={Styles.options}>
            Events
          </Typography>

          <Typography variant="body1" color="textPrimary" sx={Styles.options}>
            Bookings
            <Box>
              <Typography
                variant="v6"
                color="textPrimary"
                sx={Styles.bookingNumber}
              >
                3
              </Typography>
            </Box>
          </Typography>
          <Typography variant="body1" color="textPrimary" sx={Styles.options}>
            About Us
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
