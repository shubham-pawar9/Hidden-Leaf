import { Box, Button, Typography } from "@mui/material";
import FlatwareIcon from "@mui/icons-material/Flatware";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { motion } from "framer-motion";

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
    color: "#828282",
    width: { xs: "100%", md: "600px" },
    fontFamily: "Inter",
    zIndex: 2,
  },
  bookTableBtn: {
    backgroundColor: "black",
    padding: "12px 22px",
    marginTop: "25px",
    zIndex: 2,
    "&:hover": {
      backgroundColor: "black",
    },
  },
  floatingIcon: {
    position: "absolute",
    color: "rgba(0, 0, 0, 0.1)",
    zIndex: 1,
  },
};

const floatingIcons = [
  { Icon: FlatwareIcon, left: "8%", top: "18%", size: 52, duration: 5.5 },
  {
    Icon: DinnerDiningIcon,
    left: "82%",
    top: "26%",
    size: 58,
    duration: 6.5,
  },
  {
    Icon: RestaurantMenuIcon,
    left: "14%",
    top: "72%",
    size: 48,
    duration: 5.8,
  },
  { Icon: FlatwareIcon, left: "88%", top: "68%", size: 44, duration: 7.1 },
];

const Heading = () => {
  return (
    <Box sx={Styles.headingBox}>
      {floatingIcons.map(({ Icon, left, top, size, duration }, index) => (
        <motion.div
          key={`${left}-${top}-${index}`}
          style={{ ...Styles.floatingIcon, left, top }}
          animate={{ y: [0, -15, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon sx={{ fontSize: size }} />
        </motion.div>
      ))}
      <Typography sx={Styles.heading}>Hidden-Leaf</Typography>
      <Typography sx={Styles.subHeading}>
        Embark on a journey of serenity at Hidden Leaf Resort, where luxury
        meets natural beauty. Find your perfect escape at our tranquil haven
      </Typography>
      <Button variant="contained" sx={Styles.bookTableBtn}>
        Book Your table
      </Button>
    </Box>
  );
};
export default Heading;
