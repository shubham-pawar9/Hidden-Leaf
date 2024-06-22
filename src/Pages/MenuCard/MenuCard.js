import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Styles = {
  menuBox: {
    backgroundImage: 'url("./images/menu-background.png")',
    backgroundSize: "cover", // or 'contain' or other values based on your needs
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  menuCardBox: {
    width: "100%", // Set the width of the box
    minHeight: "300px", // Set the minimum height of the box or any desired height
    display: "flex", // Centering content
    flexDirection: "column",
    alignItems: "flex-start", // Centering content
    justifyContent: "center", // Centering content
    color: "#fff", // Ensure the text is visible on the background
    fontSize: "24px",
    padding: "20px",
    paddingLeft: "70px",
  },
  menuHeading: {
    marginBottom: "40px",
    textAlign: "left",
    fontSize: "35px",
    fontWeight: 600,
    fontFamily: "Inter",
  },
  menuCardMainBox: {
    padding: "0 60px",
    marginTop: "60px",
  },
  menuItemBox: {
    marginBottom: "20px",
    textAlign: "left",
  },
  foodItemBox: {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  foodnameBox: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "15px 100px",
    justifyContent: "space-around",
    width: "90%",
  },
  heading: {
    fontSize: "30px",
    fontWeight: 700,
    fontFamily: "Inter",
  },
  subHeading: {
    color: "#F2DE2E",
    fontSize: "27px",
    fontWeight: 700,
    fontFamily: "Inter",
    marginLeft: "40px",
  },
  foodName: {
    fontWeight: 600,
    fontFamily: "Inter",
    fontSize: "20px",
  },
  foodDesc: {
    color: "#8A8080",
    fontWeight: 500,
    fontFamily: "Inter",
    fontSize: "16px",
  },
};

const MenuCard = () => {
  const [menus, setMenus] = useState([]);

  const fetchMenus = async () => {
    try {
      const menuData = await fetch("menucard.json");
      const response = await menuData.json();
      setMenus(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <Box sx={Styles.menuCardMainBox}>
      <Typography variant="h4" sx={Styles.menuHeading}>
        Hidden-Leaf Special Menus
      </Typography>
      <Box sx={Styles.menuBox}>
        {menus.length > 0 ? (
          menus.map((menu, index) => (
            <Box key={index} sx={Styles.menuCardBox}>
              <Box sx={Styles.menuItemBox}>
                <Typography variant="h5" sx={Styles.heading}>
                  {menu.main_course}
                </Typography>
                <Typography variant="subtitle1" sx={Styles.subHeading}>
                  {menu.special}
                </Typography>
              </Box>
              <Box sx={Styles.foodnameBox}>
                {menu.foods.map((food, foodIndex) => (
                  <Box key={foodIndex} sx={Styles.foodItemBox}>
                    <Typography variant="h6" sx={Styles.foodName}>
                      {food.name}
                    </Typography>
                    <Typography variant="body2" sx={Styles.foodDesc}>
                      {food.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))
        ) : (
          <Typography>Loading menus...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default MenuCard;
