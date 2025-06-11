import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Settings: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="mb-4">
        <span className="font-semibold mr-2">Theme:</span>
        <ThemeToggle />
      </div>
      <div className="mb-4">
        <span className="font-semibold">Daily Reminder:</span>
        <span className="ml-2 text-gray-500">(Coming soon)</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold">Audio Preferences:</span>
        <span className="ml-2 text-gray-500">(Coming soon)</span>
      </div>
    </div>
  );
};

export default Settings; 