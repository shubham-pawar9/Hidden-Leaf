import { Box, Typography, Grid } from "@mui/material";

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
        <img
          src={process.env.PUBLIC_URL + "/images/main-banner.png"}
          alt=""
          style={Styles.bannerImage}
        />
      </Box>
    </Box>
  );
};

export default Banner;
