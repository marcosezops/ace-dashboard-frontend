import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../src/components/Sidebar';

describe('Menu Navigation', () => {
  const mockOnNavigate = jest.fn();

  beforeEach(() => {
    mockOnNavigate.mockClear();
  });

  it('renders all menu items', () => {
    render(<Sidebar currentPage="dashboard" onNavigate={mockOnNavigate} />);
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Monitoring')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('calls onNavigate with correct page id when clicked', () => {
    render(<Sidebar currentPage="dashboard" onNavigate={mockOnNavigate} />);
    
    fireEvent.click(screen.getByText('Monitoring'));
    expect(mockOnNavigate).toHaveBeenCalledWith('monitoring');
    
    fireEvent.click(screen.getByText('Infrastructure'));
    expect(mockOnNavigate).toHaveBeenCalledWith('infrastructure');
  });

  it('highlights the current page', () => {
    render(<Sidebar currentPage="monitoring" onNavigate={mockOnNavigate} />);
    
    const monitoringButton = screen.getByText('Monitoring').closest('button');
    expect(monitoringButton).toHaveClass('bg-blue-600');
  });
});
