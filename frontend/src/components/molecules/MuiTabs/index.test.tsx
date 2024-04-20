import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TabsComponent from '.';

test('renders TabsComponent without errors', () => {
  render(<TabsComponent tabs={[{label: 'Tab 1'},{label:'Tab 2'}]} />);
});
test('renders tabs with correct labels', async () => {
    const { getByText } = render(<TabsComponent tabs={[{label: 'Tab 1'},{label:'Tab 2'}]} tabGap={true} />);
    const tabs = screen.getAllByRole("tab");
    fireEvent.click(tabs[1]);
    
    expect(getByText('Tab 1')).toBeInTheDocument();
    expect(getByText('Tab 2')).toBeInTheDocument();
  });

  
  
