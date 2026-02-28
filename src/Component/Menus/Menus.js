import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useInView from "../../Component/useInView";

const Styles = {
  imageItem: {
    width: { xs: "100%", sm: "150px" },
    height: { xs: "170px", sm: "140px" },
    borderRadius: "4px",
    objectFit: "cover",
  },
  itemBox: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "15px",
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

const Menus = () => {
  const [menu, setMenu] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4);
  const [setRef1, inView1] = useInView({ threshold: 0.1 });
  const [setRef2, inView2] = useInView({ threshold: 0.1 });

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
        {menu.slice(0, visibleItems).map((item) => (
          <Grid item xs={12} md={6} key={item.id} sx={Styles.itemBox}>
            <motion.div
              ref={setRef1}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src={`./images/menus/${item.image}`}
                alt={item.name}
                sx={Styles.imageItem}
              />
            </motion.div>
            <Box>
              <motion.div
                ref={setRef2}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 0.5 }}
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
