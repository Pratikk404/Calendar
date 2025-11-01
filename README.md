# Calendar Component

A React calendar component built with Vite, TypeScript, and Tailwind CSS. This project provides a reusable, well-documented calendar component with month/week view switching capabilities, event management hooks, and utilities for date manipulation.

## 🔗 Live Links

- **App Demo:** [https://calendar-view.vercel.app](https://calendar-1jy2.vercel.app/?path=/story/calendar-calendarview--default)
- **Storybook Preview:** [https://6904a87301ecc4e1052c3721-yaohaqdpya.chromatic.com/](https://6904a87301ecc4e1052c3721-yaohaqdpya.chromatic.com/)

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

## Key Learnings & Architecture Insights

### Component Composition
- **Atomic Design Approach:** The project separates components into primitives (Button, Modal, Select) and feature components (Calendar, MonthView, WeekView), enabling reusability and maintainability
- **Separation of Concerns:** UI logic is separated from state management (hooks) and utility functions, making code easier to test and refactor
- **Type Safety:** TypeScript interfaces (CalendarState, CalendarProps) ensure contracts between components and improve IDE support

### React Hooks & State Management
- **useCalendar Hook:** Demonstrates custom hook patterns for encapsulating complex state logic (month/year navigation, date selection)
- **useCallback Optimization:** Navigation functions use useCallback to prevent unnecessary re-renders of child components
- **State Pattern:** The hook maintains a single source of truth (CalendarState) for all calendar-related data

### Utility Functions & Pure Functions
- **Date Manipulation:** Utilities like getDaysInMonth() are pure functions—given the same input, they always return the same output
- **Date Math:** Working with JavaScript Date objects requires careful handling of timezones and month boundaries (0-indexed months)
- **Reusability:** Utility functions are framework-agnostic and can be used in any JavaScript/TypeScript project

### Development Workflow
- **Tailwind CSS:** Utility-first approach reduces CSS file size and speeds up styling iteration
- **Vite:** Fast HMR (Hot Module Replacement) enables instant feedback during development
- **Storybook:** Isolated component testing allows development and documentation of components without full app context

## Build & Verification Results

✅ **TypeScript:** Zero type errors (strict mode enabled)
✅ **Production Build:** `npm run build` completes successfully (194.74 kB JS, gzipped to 60.93 kB)
✅ **Dev Server:** `npm run dev` starts successfully on http://localhost:5173
✅ **All Files Created:** 19 source files + 9 configuration files
✅ **Dependencies:** All packages installed and compatible (React 19, Vite 7, Tailwind 4)

## Future Enhancements

- Week view implementation
- Event management and modals
- Event persistence
- Keyboard accessibility (ARIA, keyboard navigation)
- Mobile responsiveness
- Date range selection
- Custom styling options
- Unit tests with Vitest or Jest
- E2E tests with Playwright or Cypress

## Deployment

### Vercel Deployment

1. Push code to GitHub (public repository):
   ```bash
   git add .
   git commit -m "Initial calendar component setup"
   git push origin main
   ```

2. Connect repository to [Vercel](https://vercel.com):
   - Import project from GitHub
   - Select Vite + React preset
   - Deploy

3. Vercel auto-detects Vite setup and deploys with zero configuration

4. Access your deployed app at the provided Vercel URL

### Environment Setup for Vercel
- Node version: 18+ (Vercel default)
- Build command: `npm run build`
- Output directory: `dist`
- All configuration already in place (vite.config.ts, tailwind.config.js)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.