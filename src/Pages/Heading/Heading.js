import { Box, Button, Typography } from "@mui/material";

const Styles = {
  headingBox: {
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: "75px",
    fontWeight: 700,
    marginBottom: "10px",
    fontFamily: "Inter",
    "@media (max-width: 700px)": {
      fontSize: "58px",
    },
  },
  subHeading: {
    fontSize: "18px",
    color: "#828282",
    width: "600px",
    fontFamily: "Inter",
    "@media (max-width: 700px)": {
      fontSize: "12px",
      width: "350px",
    },
  },
  bookTableBtn: {
    backgroundColor: "black",
    padding: "12px 22px",
    marginTop: "25px",
    "&:hover": {
      backgroundColor: "black",
    },
  },
};
const Heading = () => {
  return (
    <Box sx={Styles.headingBox}>
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
