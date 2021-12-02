import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/fr";
const localizer = momentLocalizer(moment);

const CustomCalendar = ({ events }) => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      messages={{
        next: "Suivant",
        previous: "Précédent",
        today: "Aujourd'hui",
        month: "Mois",
        week: "Semaine",
        day: "Jour",
      }}
      style={{ height: "70vh" }}
    />
  </div>
);

export default CustomCalendar;
