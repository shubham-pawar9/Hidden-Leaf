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
  socialIcon: {
    height: "18px",
  },
  footerStyle: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "40px",
  },
  contactStyle: {
    display: "flex",
    flexDirection: "row",
  },
  contactBox: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  socialBox: {
    display: "flex",
    flexDirection: "row",
    gap: "22px",
  },
  address: {
    width: "335px",
    textAlign: "left",
    fontSize: "16px",
    fontWeight: 500,
    color: "#828282",
    lineHeight: "26px",
  },
  addressbox: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
  detailsBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    "& .MuiTypography-root": {
      fontSize: "16px",
      fontWeight: 500,
      fontFamily: "Inter",
      color: "#454545",
    },
  },
  contact: {
    color: "#6E6E6E",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "20px",
  },
  mob: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "20px",
  },
  addressHead: {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 500,
  },
};

const Footer = () => {
  return (
    <Box sx={Styles.menusBox}>
      <Typography variant="h4" sx={Styles.menuHeading}>
        Hidden-leaf Family Resort
      </Typography>
      <Box sx={Styles.footerStyle}>
        <Box sx={Styles.contactBox}>
          <Grid sx={Styles.contactStyle}>
            <Typography sx={Styles.mob}>Mob -</Typography>
            <Typography sx={Styles.contact}>7030092200</Typography>
          </Grid>
          <Grid sx={Styles.contactStyle}>
            <Typography sx={Styles.mob}>Mob -</Typography>
            <Typography sx={Styles.contact}>7030092200</Typography>
          </Grid>
          <Grid sx={Styles.socialBox}>
            <img
              style={Styles.socialIcon}
              src="./images/social/facebook.png"
              alt=""
            />
            <img
              style={Styles.socialIcon}
              src="./images/social/linkedin.png"
              alt=""
            />
            <img
              style={Styles.socialIcon}
              src="./images/social/youtube.png"
              alt=""
            />
            <img
              style={Styles.socialIcon}
              src="./images/social/instagram.png"
              alt=""
            />
          </Grid>
        </Box>
        <Box>
          <Grid sx={Styles.detailsBox}>
            <Typography>Customer reviews</Typography>
            <Typography>Booking Tables</Typography>
            <Typography>Contact Us</Typography>
          </Grid>
        </Box>
        <Box>
          <Grid sx={Styles.addressbox}>
            <Typography sx={Styles.addressHead}>Address</Typography>
            <Typography sx={Styles.address}>
              PX67+X5W, Kondhve Khind, At Post - Kondhve, beside Shahupuri
              Kondhve Road, Satara, Maharashtra 415002
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
