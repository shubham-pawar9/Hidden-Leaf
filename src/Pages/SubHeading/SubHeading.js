import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import useInView from "../../Component/useInView";

const Styles = {
  banner1Box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 60px",
    "@media (max-width: 700px)": {
      flexDirection: "column",
      gap: "30px",
      "& img": {
        height: "200px !important",
      },
    },
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
    "@media (max-width: 700px)": {
      width: "290px",
    },
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
    "@media (max-width: 700px)": {
      flexDirection: "column",
      padding: "0 20px",
      gap: "30px",
      "& img": {
        height: "200px !important",
      },
    },
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
    "@media (max-width: 700px)": {
      width: "300px",
      fontSize: "30px",
    },
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
    "@media (max-width: 700px)": {
      width: "300px",
      fontSize: "30px",
    },
  },
  bannerTextBox1: {
    position: "relative",
    left: "10px",
    "@media (max-width: 700px)": {
      left: "0px",
    },
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
        <Grid sx={Styles.banner1Box}>
          <Box sx={{ ...Styles.bannerTextBox, ...Styles.bannerTextBox1 }}>
            <Typography sx={Styles.bannerText}>EXCLUSIVELY FOR YOU</Typography>
            <Typography sx={Styles.bannerSubText}>
              Enjoy delicious cuisine while watching live IPL matches at our
              hotel. Experience the thrill of the game with every bite!
            </Typography>
          </Box>
          <Box>
            <img
              src={process.env.PUBLIC_URL + "/images/banner1.png"}
              alt=""
              style={Styles.bannerImage}
            />
          </Box>
        </Grid>
      </motion.div>
      <motion.div
        ref={setRef2}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
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
            <img
              src={process.env.PUBLIC_URL + "/images/banner2.png"}
              alt=""
              style={Styles.bannerImage}
            />
          </Box>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default SubHeading;
