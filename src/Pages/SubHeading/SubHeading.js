import { Box, Grid, Typography } from "@mui/material";

const Styles = {
  banner1Box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 60px",
  },
  bannerTextBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  bannerSubText: {
    textAlign: "left",
    width: "350px",
    color: "#828282",
  },
  bannerImage: {
    height: "350px",
    boxShadow: "0px 20px 20px 0px #b8b8b873",
  },
  banner2Box: {
    flexDirection: "row-reverse",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
  },
  bannerBox: {
    display: "flex",
    flexDirection: "column",
    gap: "90px",
  },
  bannerText: {
    fontFamily: "Inter",
    fontSize: "40px",
    fontWeight: 600,
    width: "350px",
    textAlign: "left",
  },
  bannerTextBox2: {
    position: "relative",
    left: "-10px",
  },
  bannerText2: {
    fontFamily: "Inter",
    fontSize: "40px",
    fontWeight: 600,
    width: "450px",
    textAlign: "left",
  },
  bannerTextBox1: {
    position: "relative",
    left: "10px",
  },
};
const SubHeading = () => {
  return (
    <Box sx={Styles.bannerBox}>
      <Grid sx={Styles.banner1Box}>
        <Box sx={{ ...Styles.bannerTextBox, ...Styles.bannerTextBox1 }}>
          <Typography sx={Styles.bannerText}>EXCLUSIVELY FOR YOU</Typography>
          <Typography sx={Styles.bannerSubText}>
            Enjoy delicious cuisine while watching live IPL matches at our
            hotel. Experience the thrill of the game with every bite!
          </Typography>
        </Box>
        <Box>
          <img src="./images/banner1.png" alt="" style={Styles.bannerImage} />
        </Box>
      </Grid>
      <Grid sx={Styles.banner2Box}>
        <Box sx={{ ...Styles.bannerTextBox, ...Styles.bannerTextBox2 }}>
          <Typography sx={{ ...Styles.bannerText, ...Styles.bannerText2 }}>
            PLAN YOUR SPECIAL EVENTS
          </Typography>
          <Typography sx={Styles.bannerSubText}>
            Plan your special events with us on our spacious lawn. Celebrate
            under the open sky with elegance and style!
          </Typography>
        </Box>
        <Box>
          <img src="./images/banner2.png" alt="" style={Styles.bannerImage} />
        </Box>
      </Grid>
    </Box>
  );
};
export default SubHeading;
