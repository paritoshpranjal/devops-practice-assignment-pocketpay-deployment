import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Person from '../../../../public/assets/icons/person.svg';
import Business from '../../../../public/assets/icons/business.svg';
import AccountType from '.';

describe('AccountType tests', () => {
  const mockData = [
    {
      src: Person,
      title: 'Account 1',
      text: 'Account 1 description',
    },
    {
      src: Business,
      title: 'Account 2',
      text: 'Account 2 description',
    },
  ];

  const mockProps = {
    data: mockData,
    title: 'Account Types',
    info: 'Select an account type',
    selectAccount: jest.fn(),
  };

  test('should render the component with correct title and info', () => {
    render(<AccountType {...mockProps}/>);
    
    const title = screen.getByText('Account Types');
    const info = screen.getByText('Select an account type');

    expect(title).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });

  test('should render the account cards with correct data', () => {
    render(<AccountType {...mockProps} />);

    expect(screen.getByText('Account 1')).toBeInTheDocument();
    expect(screen.getByText('Account 1 description')).toBeInTheDocument();
    expect(screen.getByText('Account 2')).toBeInTheDocument();
    expect(screen.getByText('Account 2 description')).toBeInTheDocument();
  });
});
