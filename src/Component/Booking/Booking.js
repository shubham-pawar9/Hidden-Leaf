import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";

const Styles = {
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
  bannerImage: {
    width: "100%",
  },
  submitBtn: {
    backgroundColor: "black",
    padding: "12px 42px",
    marginTop: "15px",
    "&:hover": {
      backgroundColor: "black",
    },
    alignSelf: "flex-start",
    "@media (max-width: 700px)": {
      alignSelf: "center",
    },
  },
  inputStyle: {
    width: "344px",
    "& .MuiSelect-select": {
      textAlign: "left",
    },
    "@media (max-width: 700px)": {
      width: "300px",
    },
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
  },
  inputGroup: {
    display: "flex",
    justifyContent: "flex-start",
    gap: "30px",
    flexWrap: "wrap",
    "@media (max-width: 700px)": {
      justifyContent: "center",
    },
  },
  bookingForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  inputName: {
    fontSize: "20px",
    fontWeight: 500,
    fontFamily: "Inter",
    "@media (max-width: 700px)": {
      fontSize: "16px",
    },
  },
  booktableBox: {
    boxShadow: "0px 0px 9px 0px #00000040",
    borderRadius: "10px",
    padding: "40px 0 20px 0",
    display: "flex",
    justifyContent: "center",
  },
  inputCustom: {
    alignSelf: "flex-start",
    "@media (max-width: 700px)": {
      alignSelf: "unset",
    },
  },
};

const Booking = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectGuest, setSelectGuest] = useState(10);
  const handleTableChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  const handleDataChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleGuestChange = (event) => {
    setSelectGuest(event.target.value);
  };
  return (
    <Box sx={Styles.menusBox}>
      <Typography variant="h4" sx={Styles.menuHeading}>
        Book Your Table
      </Typography>
      <Box sx={Styles.booktableBox}>
        <Box sx={Styles.bookingForm}>
          <Grid sx={Styles.inputGroup}>
            <Box sx={Styles.inputBox}>
              <Typography sx={Styles.inputName}>Name</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={Styles.inputStyle}
                placeholder="Your name"
              />
            </Box>
            <Box sx={Styles.inputBox}>
              <Typography sx={Styles.inputName}>Mobile</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={Styles.inputStyle}
                placeholder="Mobile number"
              />
            </Box>
            <Box sx={Styles.inputBox}>
              <Typography sx={Styles.inputName}>Tables Count</Typography>
              <Select
                labelId="number-select-label"
                id="number-select"
                value={selectedNumber}
                onChange={handleTableChange}
                sx={Styles.inputStyle}
                displayEmpty
              >
                {[...Array(8)].map((_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>
          <Grid sx={Styles.inputGroup}>
            <Box sx={Styles.inputBox}>
              <Typography sx={Styles.inputName}>Event Name</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={Styles.inputStyle}
                placeholder="Event name"
              />
            </Box>
            <Box sx={Styles.inputBox}>
              <Typography sx={Styles.inputName}>Date & Time</Typography>

              <TextField
                id="date-select"
                type="date"
                value={selectedDate}
                sx={Styles.inputStyle}
                onChange={handleDataChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box sx={Styles.inputBox}>
              <Typography sx={Styles.inputName}>Guest Count</Typography>
              <Select
                labelId="number-select-label"
                id="number-select"
                value={selectGuest}
                onChange={handleGuestChange}
                sx={Styles.inputStyle}
                displayEmpty
              >
                {[...Array(50)].map((_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>
          <Grid sx={{ ...Styles.inputGroup, ...Styles.inputCustom }}>
            <Box sx={Styles.inputBox}>
              <Typography sx={Styles.inputName}>
                Add your custome Requirements
              </Typography>

              <TextField
                id="outlined-multiline-static"
                multiline
                rows={2}
                sx={Styles.inputStyle}
                placeholder="Customization"
              />
            </Box>
          </Grid>
          <Button variant="contained" sx={Styles.submitBtn}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Booking;
