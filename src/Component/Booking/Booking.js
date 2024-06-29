import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Styles = {
  menusBox: {
    padding: "0 20px",
    margin: "20px 0",
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
    justifyContent: "center",
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
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  inputCustom: {
    alignSelf: "flex-start",
    width: "100%",
    "@media (max-width: 700px)": {
      alignSelf: "unset",
    },
  },
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  mobile: Yup.string().required("Required"),
  eventName: Yup.string().required("Required"),
  tablesCount: Yup.number().required("Required").min(1).max(8),
  guestCount: Yup.number().required("Required").min(1).max(50),
  customization: Yup.string(),
});

const Booking = ({ selectedDate, onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      eventName: "",
      tablesCount: 1,
      guestCount: 10,
      customization: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const bookingDetails = { ...values, date: selectedDate };
      onSubmit(bookingDetails);
    },
  });

  return (
    <Box sx={Styles.menusBox}>
      <Box sx={Styles.booktableBox}>
        <Box sx={Styles.bookingForm}>
          <form onSubmit={formik.handleSubmit}>
            <Grid sx={Styles.inputGroup}>
              <Box sx={Styles.inputBox}>
                <Typography sx={Styles.inputName}>Name</Typography>
                <TextField
                  id="name"
                  variant="outlined"
                  sx={Styles.inputStyle}
                  placeholder="Your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Box>
              <Box sx={Styles.inputBox}>
                <Typography sx={Styles.inputName}>Mobile</Typography>
                <TextField
                  id="mobile"
                  variant="outlined"
                  sx={Styles.inputStyle}
                  placeholder="Mobile number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </Box>
              <Box sx={Styles.inputBox}>
                <Typography sx={Styles.inputName}>Tables Count</Typography>
                <Select
                  labelId="tables-count-select-label"
                  id="tablesCount"
                  value={formik.values.tablesCount}
                  onChange={formik.handleChange}
                  sx={Styles.inputStyle}
                  displayEmpty
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.tablesCount &&
                    Boolean(formik.errors.tablesCount)
                  }
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
                  id="eventName"
                  variant="outlined"
                  sx={Styles.inputStyle}
                  placeholder="Event name"
                  value={formik.values.eventName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.eventName && Boolean(formik.errors.eventName)
                  }
                  helperText={
                    formik.touched.eventName && formik.errors.eventName
                  }
                />
              </Box>

              <Box sx={Styles.inputBox}>
                <Typography sx={Styles.inputName}>Guest Count</Typography>
                <Select
                  labelId="guest-count-select-label"
                  id="guestCount"
                  value={formik.values.guestCount}
                  onChange={formik.handleChange}
                  sx={Styles.inputStyle}
                  displayEmpty
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.guestCount &&
                    Boolean(formik.errors.guestCount)
                  }
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
                  Add your custom Requirements
                </Typography>
                <TextField
                  id="customization"
                  multiline
                  rows={2}
                  sx={Styles.inputStyle}
                  placeholder="Customization"
                  value={formik.values.customization}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.customization &&
                    Boolean(formik.errors.customization)
                  }
                  helperText={
                    formik.touched.customization && formik.errors.customization
                  }
                />
              </Box>
            </Grid>
            <Button type="submit" variant="contained" sx={Styles.submitBtn}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Booking;
