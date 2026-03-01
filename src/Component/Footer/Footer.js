import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { APP_THEME_COLORS, IS_DARK_THEME } from "../../constants/theme";

const ADDRESS =
  "PX67+X5W, Kondhve Khind, At Post - Kondhve, beside Shahupuri Kondhve Road, Satara, Maharashtra 415002";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=PX67%2BX5W%2C+Kondhve+Khind%2C+At+Post+-+Kondhve%2C+beside+Shahupuri+Kondhve+Road%2C+Satara%2C+Maharashtra+415002";

const Styles = {
  menusBox: {
    padding: { xs: "0 16px", sm: "0 24px", md: "0 60px" },
    marginTop: "60px",
    marginBottom: "30px",
  },
  menuHeading: {
    marginBottom: "28px",
    textAlign: "left",
    fontSize: { xs: "28px", md: "35px" },
    fontWeight: 600,
    fontFamily: "Inter",
  },
  footerStyle: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-around",
    alignItems: { xs: "flex-start", md: "stretch" },
    gap: { xs: 3, md: 1 },
    marginBottom: "40px",
  },
  contactStyle: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
  },
  contactBox: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  socialBox: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
  },
  address: {
    width: { xs: "100%", md: "335px" },
    textAlign: "left",
    fontSize: "16px",
    fontWeight: 500,
    color: IS_DARK_THEME ? APP_THEME_COLORS.textSecondary : "#828282",
    lineHeight: "26px",
  },
  addressbox: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
  contact: {
    color: IS_DARK_THEME ? APP_THEME_COLORS.textSecondary : "#6E6E6E",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "20px",
    textDecoration: "none",
  },
  mob: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "20px",
  },
  addressHead: {
    color: IS_DARK_THEME ? APP_THEME_COLORS.textPrimary : "#000000",
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 500,
  },
  iconButton: {
    color: IS_DARK_THEME ? APP_THEME_COLORS.accent : "#1f1f1f",
    border: IS_DARK_THEME ? `1px solid ${APP_THEME_COLORS.border}` : "1px solid #d8d8d8",
    borderRadius: "50%",
  },
  mapLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: 600,
    color: IS_DARK_THEME ? "#93c5fd" : "#2f5eff",
    textDecoration: "none",
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
            <Link href="tel:+917030092200" sx={Styles.contact}>
              +91 70300 92200
            </Link>
          </Grid>
          <Grid sx={Styles.socialBox}>
            <IconButton
              component={Link}
              href="https://wa.me/917030092200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open WhatsApp"
              sx={Styles.iconButton}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.instagram.com/hiddenleeafresort?igsh=MWh1amRlYmE4a3lkdA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram"
              sx={Styles.iconButton}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.facebook.com/p/Hidden-Leaf-61556696991093/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Facebook"
              sx={Styles.iconButton}
            >
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Box>
        <Box>
          <Grid sx={Styles.addressbox}>
            <Typography sx={Styles.addressHead}>Address</Typography>
            <Typography sx={Styles.address}>{ADDRESS}</Typography>
            <Link
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              sx={Styles.mapLink}
            >
              <LocationOnOutlinedIcon fontSize="small" /> Open on Map
            </Link>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
