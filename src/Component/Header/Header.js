import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Styles = {
  headerName: {
    marginLeft: 10,
    fontSize: "26px",
    fontFamily: "Inter",
    fontWeight: 500,
    "@media (max-width: 700px)": {
      fontSize: "18px",
    },
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
    "@media (max-width: 700px)": {
      top: "8px",
    },
  },
  drawerPaper: {
    width: 250,
  },
  logoIcon: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
  },
};

const Header = ({ activeOption, setActiveOption }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuOptions = ["Menus", "Events", "Bookings", "Home"];

  const drawerContent = (
    <Box
      sx={Styles.drawerPaper}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuOptions.map((option) => (
          <ListItem
            button
            key={option}
            sx={{ width: "max-content" }}
            onClick={() => handleOptionClick(option)}
          >
            <ListItemText primary={option} />
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
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="Hidden Leaf"
            style={Styles.logoIcon}
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
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box display="flex" alignItems="center">
            <IconButton edge="end" color="inherit" sx={{ marginRight: 2 }}>
              <img
                src={process.env.PUBLIC_URL + "/images/call.png"}
                alt=""
                style={Styles.callIcon}
              />
            </IconButton>
            {menuOptions.map((option) => (
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
