import React from 'react';
import { useCalendar } from '@/hooks/useCalendar';
import { getDaysInMonth } from '@/utils/date.utils';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarView: React.FC = () => {
  const { currentDate, goToNextMonth, goToPreviousMonth, goToToday } = useCalendar();
  const daysInMonth = getDaysInMonth(currentDate);

  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const startingDayOfWeek = firstDay.getDay();
  const emptyDays = Array.from({ length: startingDayOfWeek });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="space-x-2">
          <button
            onClick={goToPreviousMonth}
            className="px-2 py-1 bg-neutral-200 rounded hover:bg-neutral-300 transition"
          >
            Prev
          </button>
          <button
            onClick={goToToday}
            className="px-2 py-1 bg-primary-500 text-white rounded hover:bg-primary-600 transition"
          >
            Today
          </button>
          <button
            onClick={goToNextMonth}
            className="px-2 py-1 bg-neutral-200 rounded hover:bg-neutral-300 transition"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-center text-sm font-semibold text-neutral-600">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 border-t border-l border-neutral-300">
        {emptyDays.map((_, index) => (
          <div
            key={`empty-${index}`}
            className="aspect-square border-r border-b border-neutral-300 bg-neutral-50"
          />
        ))}

        {daysInMonth.map((day) => (
          <div
            key={day.toISOString()}
            className="aspect-square border-r border-b border-neutral-300 p-1 text-sm hover:bg-primary-50 transition cursor-pointer"
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};
