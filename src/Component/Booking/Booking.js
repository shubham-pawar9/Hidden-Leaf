import { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  Chip,
  Stack,
} from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const SAVED_EVENTS = [
  { date: "2026-03-06", title: "Private Music Concert" },
  { date: "2026-03-11", title: "Corporate Dinner Meetup" },
  { date: "2026-03-18", title: "Wedding Celebration" },
  { date: "2026-03-23", title: "Food Festival Booking" },
  { date: "2026-04-04", title: "Birthday Theme Party" },
];

const Styles = {
  menusBox: {
    px: { xs: 2.5, md: 7 },
    mt: 7,
    pb: 4,
  },
  menuHeading: {
    mb: 4,
    textAlign: "left",
    fontSize: { xs: "30px", md: "36px" },
    fontWeight: 700,
    fontFamily: "Inter",
  },
  bookingCard: {
    boxShadow: "0px 12px 35px 0px #0000001f",
    borderRadius: "18px",
    p: { xs: 2.5, md: 4 },
    background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: 600,
    textAlign: "left",
    mb: 2,
  },
  inputStyle: {
    width: "100%",
    "& .MuiInputBase-root": {
      borderRadius: "10px",
      backgroundColor: "#ffffff",
    },
  },
  label: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#1f2937",
    textAlign: "left",
  },
  submitBtn: {
    mt: 1,
    backgroundColor: "#111827",
    px: 4.5,
    py: 1.4,
    borderRadius: "10px",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#030712",
    },
  },
};

const toYMD = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = `${dateObj.getMonth() + 1}`.padStart(2, "0");
  const day = `${dateObj.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const startOfDay = (dateObj) => new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());

const Booking = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectGuest, setSelectGuest] = useState(10);
  const [visibleMonth, setVisibleMonth] = useState(() => startOfDay(new Date()));

  const today = useMemo(() => startOfDay(new Date()), []);

  const savedEventMap = useMemo(
    () => new Map(SAVED_EVENTS.map((event) => [event.date, event.title])),
    []
  );

  const monthLabel = visibleMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const daysInMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() + 1,
    0
  ).getDate();

  const monthStartDay = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1
  ).getDay();

  const calendarCells = [
    ...Array(monthStartDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const value = new Date(
        visibleMonth.getFullYear(),
        visibleMonth.getMonth(),
        index + 1
      );
      const formattedDate = toYMD(value);
      const isPast = value < today;
      const isBlocked = savedEventMap.has(formattedDate);

      return {
        day: index + 1,
        value,
        formattedDate,
        isPast,
        isBlocked,
      };
    }),
  ];

  const canMovePreviousMonth =
    visibleMonth.getFullYear() > today.getFullYear() ||
    (visibleMonth.getFullYear() === today.getFullYear() &&
      visibleMonth.getMonth() > today.getMonth());

  const selectedEventTitle = savedEventMap.get(selectedDate);

  const handleDateSelect = (dateInfo) => {
    if (dateInfo.isPast || dateInfo.isBlocked) return;
    setSelectedDate(dateInfo.formattedDate);
  };

  const handleInputDateChange = (event) => {
    const value = event.target.value;
    if (!value) {
      setSelectedDate("");
      return;
    }

    if (savedEventMap.has(value)) return;

    const parsedDate = startOfDay(new Date(value));
    if (parsedDate < today) return;

    setSelectedDate(value);
    setVisibleMonth(parsedDate);
  };

  return (
    <Box sx={Styles.menusBox}>
      <Typography variant="h4" sx={Styles.menuHeading}>
        Book Your Event
      </Typography>

      <Grid container spacing={3} sx={Styles.bookingCard}>
        <Grid item xs={12} lg={7}>
          <Typography sx={Styles.sectionTitle}>Event Booking Details</Typography>
          <Grid container spacing={2.2}>
            <Grid item xs={12} sm={6}>
              <Typography sx={Styles.label}>Name</Typography>
              <TextField variant="outlined" sx={Styles.inputStyle} placeholder="Your name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={Styles.label}>Mobile</Typography>
              <TextField
                variant="outlined"
                sx={Styles.inputStyle}
                placeholder="Mobile number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={Styles.label}>Tables Count</Typography>
              <Select
                value={selectedNumber}
                onChange={(event) => setSelectedNumber(event.target.value)}
                sx={Styles.inputStyle}
              >
                {[...Array(8)].map((_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={Styles.label}>Event Name</Typography>
              <TextField variant="outlined" sx={Styles.inputStyle} placeholder="Event name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={Styles.label}>Guest Count</Typography>
              <Select
                value={selectGuest}
                onChange={(event) => setSelectGuest(event.target.value)}
                sx={Styles.inputStyle}
              >
                {[...Array(250)].map((_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={Styles.label}>Selected Date</Typography>
              <TextField
                type="date"
                value={selectedDate}
                onChange={handleInputDateChange}
                inputProps={{ min: toYMD(today) }}
                sx={Styles.inputStyle}
              />
              {selectedEventTitle && (
                <Typography sx={{ color: "#dc2626", fontSize: "12px", mt: 0.8, textAlign: "left" }}>
                  This day is already blocked: {selectedEventTitle}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography sx={Styles.label}>Special Requirements</Typography>
              <TextField
                multiline
                rows={3}
                sx={Styles.inputStyle}
                placeholder="Decoration theme, cuisine preference, timing notes..."
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={Styles.submitBtn}>
                Submit Booking Request
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Typography sx={Styles.sectionTitle}>Availability Calendar</Typography>
          <Box
            sx={{
              p: 2,
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
              backgroundColor: "#fff",
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1.5}>
              <Button
                onClick={() =>
                  canMovePreviousMonth &&
                  setVisibleMonth(
                    new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1)
                  )
                }
                disabled={!canMovePreviousMonth}
                sx={{ minWidth: "38px", p: 0.6 }}
              >
                <ChevronLeftRoundedIcon />
              </Button>
              <Typography sx={{ fontWeight: 700 }}>{monthLabel}</Typography>
              <Button
                onClick={() =>
                  setVisibleMonth(
                    new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1)
                  )
                }
                sx={{ minWidth: "38px", p: 0.6 }}
              >
                <ChevronRightRoundedIcon />
              </Button>
            </Stack>

            <Grid container columns={7} spacing={0.7}>
              {WEEK_DAYS.map((dayName) => (
                <Grid item xs={1} key={dayName}>
                  <Typography sx={{ fontSize: "11px", color: "#6b7280", fontWeight: 700 }}>
                    {dayName}
                  </Typography>
                </Grid>
              ))}
              {calendarCells.map((cell, index) => (
                <Grid item xs={1} key={`${cell?.formattedDate || "blank"}-${index}`}>
                  {!cell ? (
                    <Box sx={{ height: "38px" }} />
                  ) : (
                    <Button
                      onClick={() => handleDateSelect(cell)}
                      disabled={cell.isPast || cell.isBlocked}
                      sx={{
                        minWidth: "100%",
                        height: "38px",
                        p: 0,
                        borderRadius: "8px",
                        fontWeight: 700,
                        color: cell.formattedDate === selectedDate ? "#fff" : "#111827",
                        bgcolor:
                          cell.formattedDate === selectedDate
                            ? "#111827"
                            : cell.isBlocked
                            ? "#fee2e2"
                            : cell.isPast
                            ? "#f3f4f6"
                            : "transparent",
                        border: cell.isBlocked ? "1px solid #fca5a5" : "1px solid #e5e7eb",
                        "&:hover": {
                          bgcolor:
                            !cell.isPast && !cell.isBlocked && cell.formattedDate !== selectedDate
                              ? "#f9fafb"
                              : undefined,
                        },
                      }}
                    >
                      {cell.day}
                    </Button>
                  )}
                </Grid>
              ))}
            </Grid>

            <Stack direction="row" spacing={1} mt={2} flexWrap="wrap" useFlexGap>
              <Chip icon={<CalendarMonthRoundedIcon />} label="Available" size="small" />
              <Chip label="Past dates blocked" size="small" sx={{ bgcolor: "#f3f4f6" }} />
              <Chip label="Booked dates blocked" size="small" sx={{ bgcolor: "#fee2e2" }} />
            </Stack>

            <Typography sx={{ textAlign: "left", mt: 2, fontWeight: 600, fontSize: "14px" }}>
              Saved events:
            </Typography>
            <Stack spacing={0.8} mt={0.8}>
              {SAVED_EVENTS.map((event) => (
                <Typography key={event.date} sx={{ textAlign: "left", fontSize: "13px", color: "#374151" }}>
                  {event.date} — {event.title}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Booking;
