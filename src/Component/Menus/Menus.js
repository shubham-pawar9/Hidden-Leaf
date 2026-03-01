import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Styles = {
  imageWrapper: {
    width: { xs: "100%", sm: "150px" },
    height: { xs: "220px", sm: "140px" },
    borderRadius: "6px",
    overflow: "hidden",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      boxShadow: { xs: "inset 0 0 28px rgba(0, 0, 0, 0.32)", sm: "none" },
      pointerEvents: "none",
      borderRadius: "inherit",
    },
  },
  imageItem: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  itemBox: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "15px",
  },
  itemTextBox: {
    width: "100%",
    textAlign: "left",
  },
  itemName: {
    textAlign: "left",
    fontSize: "18px",
    fontWeight: 600,
  },
  itemDesc: {
    color: "#828282",
    fontSize: "14px",
    textAlign: "left",
    width: "100%",
  },
  menusBox: {
    padding: { xs: "0 16px", sm: "0 24px", md: "0 60px" },
    marginTop: "60px",
  },
  menuHeading: {
    marginBottom: "28px",
    textAlign: "left",
    fontSize: { xs: "28px", md: "35px" },
    fontWeight: 600,
    fontFamily: "Inter",
  },
  menuLoading: {
    marginTop: "30px",
    fontSize: "16px",
    color: "#828282",
    cursor: "pointer",
    textAlign: "left",
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const Menus = () => {
  const [menu, setMenu] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const menuData = await fetch("menus.json");
        const response = await menuData.json();
        setMenu(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <Box sx={Styles.menusBox}>
      <Typography variant="h4" sx={Styles.menuHeading}>
        Our Highest-Rated Exquisite Menus
      </Typography>
      <Grid container spacing={3}>
        {menu.slice(0, visibleItems).map((item, index) => (
          <Grid item xs={12} md={6} key={item.id} sx={Styles.itemBox}>
            <motion.div
              variants={itemAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
              style={{ width: "100%" }}
            >
              <Box sx={Styles.imageWrapper}>
                <Box
                  component="img"
                  src={`./images/menus/${item.image}`}
                  alt={item.name}
                  sx={Styles.imageItem}
                />
              </Box>
            </motion.div>
            <Box sx={Styles.itemTextBox}>
              <motion.div
                variants={itemAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.45, delay: index * 0.04 + 0.08, ease: "easeOut" }}
              >
                <Typography sx={Styles.itemName}>{item.name}</Typography>
                <Typography sx={Styles.itemDesc}>{item.description}</Typography>
              </motion.div>
            </Box>
          </Grid>
        ))}
      </Grid>
      {visibleItems < menu.length && (
        <Typography
          variant="h6"
          sx={Styles.menuLoading}
          onClick={() => setVisibleItems((prev) => prev + 4)}
        >
          Load More...
        </Typography>
      )}
    </Box>
  );
};

export default Menus;
