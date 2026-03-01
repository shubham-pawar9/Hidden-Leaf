import { Box, Button, Typography } from "@mui/material";
import { APP_THEME_COLORS, IS_DARK_THEME } from "../../constants/theme";

const Styles = {
  headingBox: {
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    padding: "0 16px",
  },
  heading: {
    fontSize: { xs: "48px", md: "75px" },
    fontWeight: 700,
    marginBottom: "10px",
    fontFamily: "Inter",
    zIndex: 2,
  },
  subHeading: {
    fontSize: { xs: "16px", md: "18px" },
    color: IS_DARK_THEME ? APP_THEME_COLORS.textSecondary : "#828282",
    width: { xs: "100%", md: "600px" },
    fontFamily: "Inter",
    zIndex: 2,
  },
  bookTableBtn: {
    backgroundColor: IS_DARK_THEME ? APP_THEME_COLORS.accent : "black",
    color: IS_DARK_THEME ? "#0f172a" : "#fff",
    padding: "12px 22px",
    marginTop: "25px",
    zIndex: 2,
    "&:hover": {
      backgroundColor: IS_DARK_THEME ? "#facc15" : "black",
    },
  },
};

const Heading = ({ onBookTableClick }) => {
  return (
    <Box sx={Styles.headingBox}>
      <Typography sx={Styles.heading}>Hidden-Leaf</Typography>
      <Typography sx={Styles.subHeading}>
        Embark on a journey of serenity at Hidden Leaf Resort, where luxury
        meets natural beauty. Find your perfect escape at our tranquil haven
      </Typography>
      <Button variant="contained" sx={Styles.bookTableBtn} onClick={onBookTableClick}>
        Book Your table
      </Button>
    </Box>
  );
};
export default Heading;
