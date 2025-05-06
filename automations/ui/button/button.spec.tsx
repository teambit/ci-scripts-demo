import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button.js';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('primary');

    rerender(<Button variant="secondary">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('secondary');

    rerender(<Button variant="outline">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('outline');

    rerender(<Button variant="danger">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('danger');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="small">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('small');

    rerender(<Button size="medium">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('medium');

    rerender(<Button size="large">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('large');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });

  it('shows loading state correctly', () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('loading');
    expect(button).toBeDisabled();
    expect(screen.getByRole('button')).toContainElement(screen.getByTestId('spinner'));
  });

  it('renders icon correctly', () => {
    const icon = <span data-testid="test-icon">🚀</span>;
    render(<Button icon={icon}>Click me</Button>);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders iconAfter correctly', () => {
    const icon = <span data-testid="test-icon">→</span>;
    render(<Button iconAfter={icon}>Click me</Button>);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('hides icons when in loading state', () => {
    const icon = <span data-testid="test-icon">🚀</span>;
    render(<Button loading icon={icon}>Click me</Button>);
    expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
  });

  it('applies data-testid correctly', () => {
    render(<Button data-testid="test-button">Click me</Button>);
    expect(screen.getByTestId('test-button')).toBeInTheDocument();
  });
});
