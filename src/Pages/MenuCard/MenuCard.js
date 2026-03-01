import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { APP_THEME_COLORS, IS_DARK_THEME } from "../../constants/theme";

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
    position: "relative",
    left: 0,
  },
  menuHeading: {
    marginBottom: "40px",
    textAlign: "left",
    fontSize: "35px",
    fontWeight: 600,
    fontFamily: "Inter",
  },
  menuCardMainBox: {
    padding: { xs: "0 16px", sm: "0 24px", md: "0 60px" },
    marginTop: "60px",
    color: IS_DARK_THEME ? APP_THEME_COLORS.textPrimary : "inherit",
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
    gap: { xs: "15px 20px", md: "15px 60px" },
    justifyContent: "flex-start",
    width: "calc(100% - 30px)",
  },
  heading: {
    fontSize: { xs: "24px", md: "30px" },
    fontWeight: 700,
    fontFamily: "Inter",
  },
  subHeading: {
    color: "#F2DE2E",
    fontSize: { xs: "22px", md: "27px" },
    fontWeight: 700,
    fontFamily: "Inter",
    marginLeft: { xs: 0, md: "40px" },
  },
  foodName: {
    fontWeight: 600,
    fontFamily: "Inter",
    fontSize: { xs: "18px", md: "20px" },
  },
  foodDesc: {
    color: IS_DARK_THEME ? APP_THEME_COLORS.textSecondary : "#8A8080",
    fontWeight: 500,
    fontFamily: "Inter",
    fontSize: { xs: "14px", md: "16px" },
    textAlign: "left",
  },
  menuBannerBox: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
    gap: "12px",
    marginBottom: "20px",
  },
  menuBannerImage: {
    width: "100%",
    height: { xs: "180px", md: "220px" },
    objectFit: "cover",
    borderRadius: "6px",
    border: IS_DARK_THEME ? `1px solid ${APP_THEME_COLORS.border}` : "none",
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
      <Box sx={Styles.menuBannerBox}>
        <img src="./images/menus/menu-banner1.jpg" alt="" style={Styles.menuBannerImage} />
        <img src="./images/menus/menu-banner2.jpg" alt="" style={Styles.menuBannerImage} />
        <img src="./images/menus/menu-banner3.jpg" alt="" style={Styles.menuBannerImage} />
        <img src="./images/menus/menu-banner4.jpg" alt="" style={Styles.menuBannerImage} />
      </Box>
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
