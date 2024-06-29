import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Dialog } from "@mui/material";
import Booking from "../../Component/Booking/Booking";
import "./Bookings.css";

const Bookings = ({ bookingData, setBookingData }) => {
  const [events, setEvents] = useState([
    { title: "Baby Shower Event", start: "2024-06-29" },
    { title: "Engagement Event", start: "2024-07-01" },
    { title: "Birthday Event", start: "2024-07-03" },
  ]);

  const [submittedEvents, setSubmittedEvents] = useState([]);

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    const clickedDate = new Date(arg.dateStr);

    // Check if clicked date is in the past
    if (clickedDate < new Date()) {
      // Date is in the past, handle accordingly (e.g., show message)
      console.log("Cannot select past dates.");
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectAllow = (selectInfo) => {
    const today = new Date();
    const selectDate = new Date(selectInfo.startStr);
    return selectDate >= today;
  };

  const handleBookingSubmit = (bookingDetails) => {
    const newEvent = {
      title: bookingDetails.eventName,
      name: bookingDetails.name,
      start: bookingDetails.date,
    };
    setSubmittedEvents([...submittedEvents, newEvent]);
    setEvents([...events, newEvent]);
    setOpen(false);
  };

  const eventRender = ({ event, el }) => {
    if (submittedEvents.some((e) => e.start === event.startStr)) {
      el.style.backgroundColor = "pink";
      el.classList.add("disabled-event");
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventRender={eventRender}
        selectAllow={selectAllow}
      />

      <Dialog open={open} onClose={handleClose}>
        <Booking selectedDate={selectedDate} onSubmit={handleBookingSubmit} />
      </Dialog>
    </div>
  );
};

export default Bookings;
