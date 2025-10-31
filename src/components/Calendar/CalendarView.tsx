import React from 'react';
import { useCalendar } from '@/hooks/useCalendar';

export const CalendarView: React.FC = () => {
  const { currentDate, goToNextMonth, goToPreviousMonth, goToToday } = useCalendar();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="space-x-2">
          <button
            onClick={goToPreviousMonth}
            className="px-2 py-1 bg-neutral-200 rounded"
          >
            Prev
          </button>
          <button
            onClick={goToToday}
            className="px-2 py-1 bg-primary-500 text-white rounded"
          >
            Today
          </button>
          <button
            onClick={goToNextMonth}
            className="px-2 py-1 bg-neutral-200 rounded"
          >
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 border-t border-l border-neutral-300">
        {/* Calendar grid cells will be rendered here in future phases */}
      </div>
    </div>
  );
};
