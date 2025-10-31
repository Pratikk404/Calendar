import type { Meta, StoryObj } from '@storybook/react';
import { CalendarView } from './CalendarView';

const meta: Meta<typeof CalendarView> = {
  title: 'Calendar/CalendarView',
  component: CalendarView,
};

export default meta;
type Story = StoryObj<typeof CalendarView>;

export const Default: Story = {
  render: () => <CalendarView />,
};
