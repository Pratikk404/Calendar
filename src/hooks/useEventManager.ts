import { useState } from 'react';

// Placeholder interface for events
interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  description?: string;
}

export const useEventManager = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  return { events, setEvents };
};
