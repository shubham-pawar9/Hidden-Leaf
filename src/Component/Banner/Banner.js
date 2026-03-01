import { Box, Typography } from "@mui/material";
import { APP_THEME_COLORS, IS_DARK_THEME } from "../../constants/theme";

const Styles = {
  menusBox: {
    padding: { xs: "0 24px", sm: "0 24px", md: "0 60px" },
    marginTop: "60px",
  },
  menuHeading: {
    marginBottom: "40px",
    textAlign: "left",
    fontSize: "35px",
    fontWeight: 600,
    fontFamily: "Inter",
  },
  bannerImage: {
    width: "100%",
    borderRadius: "8px",
    border: IS_DARK_THEME ? `1px solid ${APP_THEME_COLORS.border}` : "none",
  },
};

const Banner = () => {
  return (
    <Box sx={Styles.menusBox}>
      <Typography variant="h4" sx={Styles.menuHeading}>
        Dine & Delivery
      </Typography>
      <Box>
        <img src="./images/main-banner.jpeg" alt="" style={Styles.bannerImage} />
      </Box>
    </Box>
  );
};

export default Banner;
