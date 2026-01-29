import React from 'react';
import Sidebar from './components/Sidebar';
import Monitoring from './pages/Monitoring';

const App: React.FC = () => {
  const renderCurrentPage = () => {
    const path = window.location.pathname;
    
    switch (path) {
      case '/monitoring':
        return <Monitoring />;
      case '/analytics':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-2">Analytics dashboard content</p>
          </div>
        );
      case '/logs':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Logs</h1>
            <p className="text-gray-600 mt-2">Logs dashboard content</p>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900">Welcome to ACE Dashboard</h1>
            <p className="text-gray-600 mt-2">Select a menu item to get started</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {renderCurrentPage()}
      </main>
    </div>
  );
};

export default App;