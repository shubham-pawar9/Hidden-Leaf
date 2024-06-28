import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useInView from "../../Component/useInView";

const Styles = {
  imageItem: {
    height: "140px",
    borderRadius: "4px",
  },
  itemBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "15px",
    "@media (max-width: 700px)": {
      flexDirection: "column",
      maxWidth: "350px",
    },
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
  menuLoading: {
    marginTop: "30px",
    fontSize: "16px",
    color: "#828282",
    cursor: "pointer",
  },
  menuMainBox: {
    "@media (max-width: 700px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
};

const Menus = () => {
  const [menu, setMenu] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4);
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });
  const fetchMenus = async () => {
    try {
      const menuData = await fetch(process.env.PUBLIC_URL + "/menus.json");
      const response = await menuData.json();
      setMenu(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  return (
    <Box sx={Styles.menusBox}>
      <Typography variant="h4" sx={Styles.menuHeading}>
        Our Highest-Rated Exquisite Menus
      </Typography>
      <motion.div
        ref={setRef1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4} sx={Styles.menuMainBox}>
          {menu.slice(0, visibleItems).map((item) => (
            <Grid item xs={6} key={item.id} sx={Styles.itemBox}>
              <img
                src={process.env.PUBLIC_URL + `/images/menus/${item.image}`}
                alt={item.name}
                style={Styles.imageItem}
              />

              <Box>
                <Typography sx={Styles.itemName}>{item.name}</Typography>
                <Typography sx={Styles.itemDesc}>{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
      {visibleItems < menu.length && (
        <Typography
          variant="h6"
          sx={Styles.menuLoading}
          onClick={handleLoadMore}
        >
          Load More...
        </Typography>
      )}
    </Box>
  );
};

export default Menus;
