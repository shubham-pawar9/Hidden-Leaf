import { Box, Typography, Grid } from "@mui/material";

const Styles = {
  menusBox: {
    padding: "0 60px",
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
  },
};

const Banner = () => {
  return (
    <Box sx={Styles.menusBox}>
      <Typography variant="h4" sx={Styles.menuHeading}>
        Dine & Delivery
      </Typography>
      <Box>
        <img src="./images/main-banner.png" alt="" style={Styles.bannerImage} />
      </Box>
    </Box>
  );
};

export default Banner;
