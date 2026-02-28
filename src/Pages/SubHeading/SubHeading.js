import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import useInView from "../../Component/useInView";

const Styles = {
  banner1Box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: { xs: "0 16px", sm: "0 24px", md: "0 60px" },
  },
  bannerTextBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: { xs: "100%", md: "auto" },
  },
  bannerSubText: {
    textAlign: "left",
    width: { xs: "100%", md: "350px" },
    color: "#828282",
  },
  bannerImage: {
    width: { xs: "100%", sm: "85%", md: "auto" },
    maxWidth: "420px",
    height: { xs: "220px", sm: "280px", md: "350px" },
    objectFit: "cover",
    boxShadow: "0px 20px 20px 0px #b8b8b873",
  },
  banner2Box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: { xs: "0 16px", sm: "0 24px", md: "0 40px" },
  },
  bannerBox: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "40px", md: "90px" },
  },
  bannerText: {
    fontFamily: "Inter",
    fontSize: { xs: "28px", md: "40px" },
    fontWeight: 600,
    width: { xs: "100%", md: "350px" },
    textAlign: "left",
  },
  bannerTextBox2: {
    position: "relative",
    left: { xs: 0, md: "-10px" },
  },
  bannerText2: {
    fontFamily: "Inter",
    fontSize: { xs: "28px", md: "40px" },
    fontWeight: 600,
    width: { xs: "100%", md: "450px" },
    textAlign: "left",
  },
  bannerTextBox1: {
    position: "relative",
    left: { xs: 0, md: "10px" },
  },
};

const SubHeading = () => {
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });

  return (
    <Box sx={Styles.bannerBox}>
      <motion.div
        ref={setRef1}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <Grid
          sx={{
            ...Styles.banner1Box,
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: { xs: 2.5, md: 0 },
          }}
        >
          <Box sx={{ ...Styles.bannerTextBox, ...Styles.bannerTextBox1 }}>
            <Typography sx={Styles.bannerText}>EXCLUSIVELY FOR YOU</Typography>
            <Typography sx={Styles.bannerSubText}>
              Enjoy delicious cuisine while watching live IPL matches at our
              hotel. Experience the thrill of the game with every bite!
            </Typography>
          </Box>
          <Box component="img" src="./images/banner1.png" alt="Special experience" sx={Styles.bannerImage} />
        </Grid>
      </motion.div>
      <motion.div
        ref={setRef2}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <Grid
          sx={{
            ...Styles.banner2Box,
            flexDirection: { xs: "column-reverse", md: "row-reverse" },
            gap: { xs: 2.5, md: 0 },
          }}
        >
          <Box sx={{ ...Styles.bannerTextBox, ...Styles.bannerTextBox2 }}>
            <Typography sx={{ ...Styles.bannerText, ...Styles.bannerText2 }}>
              PLAN YOUR SPECIAL EVENTS
            </Typography>
            <Typography sx={Styles.bannerSubText}>
              Plan your special events with us on our spacious lawn. Celebrate
              under the open sky with elegance and style!
            </Typography>
          </Box>
          <Box component="img" src="./images/banner2.png" alt="Event planning" sx={Styles.bannerImage} />
        </Grid>
      </motion.div>
    </Box>
  );
};

export default SubHeading;
