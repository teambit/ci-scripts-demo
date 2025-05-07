import React from 'react';
import { Dropdown } from './dropdown.js';

export const BasicDropdown = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Dropdown
        options={options}
        placeholder="Select an option"
        onChange={(value) => console.log('Selected:', value)}
      />
    </div>
  );
};

export const DisabledDropdown = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2', disabled: true },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Dropdown
        options={options}
        placeholder="Select an option"
        disabled
        onChange={(value) => console.log('Selected:', value)}
      />
    </div>
  );
};

export const WithCustomTrigger = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <div style={{ width: '300px' }}>
      <Dropdown
        options={options}
        trigger={<button className="px-4 py-2 bg-blue-500 text-white rounded-md">Custom Trigger</button>}
        onChange={(value) => console.log('Selected:', value)}
      />
    </div>
  );
};
