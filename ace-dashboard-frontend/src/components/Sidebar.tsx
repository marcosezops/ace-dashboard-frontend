import React from 'react';
import { Activity, BarChart3, FileText, Monitor } from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, children, isActive = false }) => {
  return (
    <a
      href={to}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <span className="mr-3">{icon}</span>
      {children}
    </a>
  );
};

const Sidebar: React.FC = () => {
  const currentPath = window.location.pathname;

  const isActiveLink = (path: string) => {
    return currentPath === path;
  };

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-full">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">ACE Dashboard</h1>
      </div>
      
      <nav className="mt-6">
        <div className="px-3">
          <SidebarLink
            to="/analytics"
            icon={<BarChart3 size={20} />}
            isActive={isActiveLink('/analytics')}
          >
            Analytics
          </SidebarLink>
          
          <SidebarLink
            to="/logs"
            icon={<FileText size={20} />}
            isActive={isActiveLink('/logs')}
          >
            Logs
          </SidebarLink>
          
          <SidebarLink
            to="/monitoring"
            icon={<Monitor size={20} />}
            isActive={isActiveLink('/monitoring')}
          >
            Monitoring
          </SidebarLink>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;