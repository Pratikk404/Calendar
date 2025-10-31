import CalendarView from "./CalendarView";

export default {
  title: "Calendar/CalendarView",
  component: CalendarView,
};

const sampleEvents = [
  {
    id: "1",
    title: "Meeting with Team",
    startDate: new Date(2025, 9, 27),
    endDate: new Date(2025, 9, 27),
    color: "#0ea5e9",
  },
  {
    id: "2",
    title: "Design Review",
    startDate: new Date(2025, 9, 28),
    endDate: new Date(2025, 9, 28),
    color: "#10b981",
  },
];

export const Default = () => <CalendarView events={sampleEvents} />;
export const Empty = () => <CalendarView events={[]} />;
