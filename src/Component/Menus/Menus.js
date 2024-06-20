import { Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";

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
    width: "400px",
  },
  menusBox: {
    padding: "0 60px",
    marginTop: "60px",
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
};

const Menus = () => {
  const [menu, setMenu] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);

  const fetchMenus = async () => {
    try {
      const menuData = await fetch("menus.json");
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
    setVisibleItems((prev) => prev + 6);
  };

  return (
    <Box sx={Styles.menusBox}>
      <Typography variant="h4" sx={Styles.menuHeading}>
        Our Highest-Rated Exquisite Menus
      </Typography>
      <Grid container spacing={4}>
        {menu.slice(0, visibleItems).map((item) => (
          <Grid item xs={6} key={item.id} sx={Styles.itemBox}>
            <img
              src={`./images/menus/${item.image}`}
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
