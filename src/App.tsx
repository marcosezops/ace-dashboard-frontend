import React from 'react';
import Sidebar from './components/Sidebar';
import MonitoringPage from './pages/MonitoringPage';
import InfrastructureStatus from './components/InfrastructureStatus';

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <InfrastructureStatus />
    </div>
  );
};

const SettingsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
      <p className="text-gray-600">Configure your ACE Dashboard settings here.</p>
    </div>
  );
};

const InfrastructurePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Infrastructure</h1>
      <p className="text-gray-600">View and manage your infrastructure components.</p>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<string>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'monitoring':
        return <MonitoringPage />;
      case 'infrastructure':
        return <InfrastructurePage />;
      case 'settings':
        return <SettingsPage />;
      case 'dashboard':
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
    </div>
  );
};

export default App;
