import React from 'react';
import { Activity, Server, Database, Wifi } from 'lucide-react';

const Monitoring: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Monitoring</h1>
        <p className="text-gray-600 mt-2">Real-time system monitoring and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Server className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">System Status</h3>
              <p className="text-sm text-gray-500">All systems operational</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="ml-2 text-sm text-green-600 font-medium">Online</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Database</h3>
              <p className="text-sm text-gray-500">PostgreSQL & Redis</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="ml-2 text-sm text-green-600 font-medium">Connected</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Wifi className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">API Services</h3>
              <p className="text-sm text-gray-500">Backend & Gateway</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="ml-2 text-sm text-green-600 font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Performance Metrics</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">245ms</div>
              <div className="text-sm text-gray-500">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1.2k</div>
              <div className="text-sm text-gray-500">Requests/min</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">0.1%</div>
              <div className="text-sm text-gray-500">Error Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;