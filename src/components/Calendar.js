import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";

export const Calendar = () => {
  const formatEvents = (props) => {
    return props?.appointments?.map((appointment) => {
      const { title, end, start } = appointment;

      let startTime = new Date(start);
      let endTime = new Date(end);

      return {
        title,
        start: startTime,
        end: endTime,
        extendedProps: { ...appointment },
      };
    });
  };

  const handleEventClick = ({ event, openAppointment }) => {
    openAppointment(event.extendedProps);
  };

  const handleEventDrop = (info, { updateAppointment }) => {
    if (window.confirm("Are you sure you want to change the event date?")) {
      console.log("change confirmed");

      updateAppointment({
        ...info.event.extendedProps,
        start: info.event.start,
        end: info.event.end,
      });
    } else {
      console.log("change aborted");
    }
  };

  return (
    <FullCalendar
      locales={[frLocale]}
      locale="fr"
      firstDay={1}
      themeSystem="bootstrap"
      nowIndicator
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      allDaySlot={false}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      eventDrop={handleEventDrop}
      eventClick={handleEventClick}
      events={formatEvents}
    />
  );
};
