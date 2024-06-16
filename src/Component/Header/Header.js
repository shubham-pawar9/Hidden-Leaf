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
    marginRight: 20,
  },
  options: {
    marginRight: "20px",
    fontSize: "20px",
    fontFamily: "Inter",
    fontWeight: 500,
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
          <IconButton edge="end" color="inherit">
            <img src="./images/call.png" alt="" style={Styles.callIcon} />
          </IconButton>
          <Typography variant="body1" color="textPrimary" sx={Styles.options}>
            Menus
          </Typography>
          <Typography variant="body1" color="textPrimary" sx={Styles.options}>
            Events
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <BookmarksIcon />
            </Badge>
          </IconButton>
          <Typography variant="body1" color="textPrimary" sx={Styles.options}>
            Bookings
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
