# Calendar Component

A React calendar component built with Vite, TypeScript, and Tailwind CSS. This project provides a reusable, well-documented calendar component with month/week view switching capabilities, event management hooks, and utilities for date manipulation.

## Getting Started

### Prerequisites

- Node.js 16+ (npm 7+)
- A modern web browser

### Installation

Install project dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Storybook

View and test the component in isolation:

```bash
npm run storybook
```

Storybook will open at `http://localhost:6006`

### Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Calendar/
│   │   ├── CalendarView.tsx          - Main calendar component
│   │   ├── CalendarView.stories.tsx  - Storybook story
│   │   ├── CalendarView.types.ts     - TypeScript types
│   │   ├── MonthView.tsx             - Month view component (placeholder)
│   │   ├── WeekView.tsx              - Week view component (placeholder)
│   │   ├── CalendarCell.tsx          - Calendar cell component (placeholder)
│   │   └── EventModal.tsx            - Event modal component (placeholder)
│   └── primitives/
│       ├── Button.tsx                - Reusable button component
│       ├── Modal.tsx                 - Reusable modal component
│       └── Select.tsx                - Reusable select component
├── hooks/
│   ├── useCalendar.ts               - Calendar state management hook
│   └── useEventManager.ts           - Event management hook (placeholder)
├── utils/
│   ├── date.utils.ts                - Date utility functions
│   └── event.utils.ts               - Event utility functions (placeholder)
├── styles/
│   └── globals.css                  - Global styles placeholder
├── App.tsx                          - Root component
├── main.tsx                         - Application entry point
└── index.css                        - Tailwind CSS directives
```

## Technology Stack

- **Build Tool:** Vite 7.x - Fast, modern build tool
- **Framework:** React 19 - UI library
- **Language:** TypeScript 5.x - Type-safe JavaScript
- **Styling:** Tailwind CSS 4.x - Utility-first CSS framework
- **Component Showcase:** Storybook 8.x - Component development environment
- **Package Manager:** npm

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run storybook` - Start Storybook development environment
- `npm run build-storybook` - Build Storybook for deployment

## Tailwind CSS

This project uses Tailwind CSS with custom colors configured:

- **Primary Blue:** `primary-500: #3b82f6`, `primary-600: #2563eb`
- **Neutral Grays:** `neutral-200: #e5e7eb`, `neutral-300: #d1d5db`, `neutral-600: #4b5563`

## Core Features

### useCalendar Hook

Manages calendar state and navigation:

```typescript
const { currentDate, view, selectedDate, goToNextMonth, goToPreviousMonth, goToToday } = useCalendar();
```

### Date Utilities

Helper functions for date operations:

- `daysBetween(start, end)` - Calculate days between two dates
- `isSameDay(d1, d2)` - Check if two dates are the same day
- `getDaysInMonth(date)` - Get all days in a month

### CalendarView Component

Main calendar display with:

- Month/year header
- Navigation buttons (Previous, Today, Next)
- 7-column calendar grid
- Interactive month switching

## Future Enhancements

- Week view implementation
- Event management and modals
- Event persistence
- Keyboard accessibility (ARIA, keyboard navigation)
- Mobile responsiveness
- Date range selection
- Custom styling options

## Deployment

### Vercel Deployment

1. Push code to GitHub (public repository)
2. Connect repository to Vercel
3. Vercel auto-detects Vite setup
4. Deploy with default settings
5. Access your deployed app at the provided URL

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.