import { useState, useCallback } from 'react';

interface CalendarState {
  currentDate: Date;
  view: 'month' | 'week';
  selectedDate: Date | null;
}

export const useCalendar = (initialDate: Date = new Date()) => {
  const [state, setState] = useState<CalendarState>({
    currentDate: initialDate,
    view: 'month',
    selectedDate: null,
  });

  const goToNextMonth = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentDate: new Date(prev.currentDate.getFullYear(), prev.currentDate.getMonth() + 1, 1),
    }));
  }, []);

  const goToPreviousMonth = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentDate: new Date(prev.currentDate.getFullYear(), prev.currentDate.getMonth() - 1, 1),
    }));
  }, []);

  const goToToday = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentDate: new Date(),
    }));
  }, []);

  return { ...state, goToNextMonth, goToPreviousMonth, goToToday, setState };
};
