import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Stack,
  Link,
} from "@mui/material";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import { APP_THEME_COLORS, IS_DARK_THEME } from "../../constants/theme";

const CONTACT_NUMBER = "+917030092200";

const Styles = {
  headerName: {
    marginLeft: 1,
    fontSize: { xs: "18px", sm: "24px", md: "26px" },
    fontFamily: "Inter",
    fontWeight: 500,
  },
  options: {
    margin: { xs: "0", sm: "0 10px", md: "0 18px" },
    fontSize: { xs: "15px", sm: "17px", md: "20px" },
    fontFamily: "Inter",
    fontWeight: 500,
    position: "relative",
    cursor: "pointer",
    padding: { xs: "0 4px", sm: "0 8px", md: "0 10px" },
    "&.active": {
      borderBottom: `2px solid ${IS_DARK_THEME ? APP_THEME_COLORS.accent : "black"}`,
    },
  },
};

const Header = ({ activeOption, setActiveOption }) => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        px: { xs: 1, md: 2 },
        py: 0.8,
        backgroundColor: IS_DARK_THEME ? APP_THEME_COLORS.surface : "transparent",
        borderBottom: IS_DARK_THEME ? `1px solid ${APP_THEME_COLORS.border}` : "none",
      }}
    >
      <Toolbar disableGutters sx={{ minHeight: { xs: "72px", md: "86px" } }}>
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            src="./images/logo.png"
            alt="Hidden Leaf"
            sx={{ width: { xs: 40, sm: 58 }, height: { xs: 40, sm: 58 }, borderRadius: "50%" }}
          />
          <Typography variant="h6" color="textPrimary" sx={Styles.headerName}>
            Hidden-Leaf
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.4, sm: 1.1 }}>
          <IconButton
            edge="end"
            color="inherit"
            component={Link}
            href={`tel:${CONTACT_NUMBER}`}
            aria-label="Call Hidden Leaf"
            sx={{ mr: { xs: 0, sm: 1 }, p: { xs: 0.6, sm: 1 }, color: "primary.main" }}
          >
            <PhoneInTalkRoundedIcon sx={{ fontSize: { xs: 19, sm: 28 } }} />
          </IconButton>
          {[
            "Menus",
            "Home",
          ].map((option) => (
            <Typography
              key={option}
              variant="body1"
              color="textPrimary"
              sx={{
                ...Styles.options,
                ...(activeOption === option && Styles.options["&.active"]),
              }}
              onClick={() => setActiveOption(option)}
            >
              {option}
            </Typography>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
