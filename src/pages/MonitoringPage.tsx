import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const monitoringData = [
  { time: '00:00', cpu: 35, memory: 45, network: 12 },
  { time: '04:00', cpu: 28, memory: 42, network: 8 },
  { time: '08:00', cpu: 52, memory: 58, network: 25 },
  { time: '12:00', cpu: 78, memory: 72, network: 45 },
  { time: '16:00', cpu: 65, memory: 68, network: 38 },
  { time: '20:00', cpu: 42, memory: 55, network: 20 },
  { time: '24:00', cpu: 38, memory: 48, network: 15 },
];

const resourceUsage = [
  { name: 'CPU', value: 65, color: '#3B82F6' },
  { name: 'Memory', value: 72, color: '#8B5CF6' },
  { name: 'Storage', value: 45, color: '#10B981' },
  { name: 'Network', value: 38, color: '#F59E0B' },
];

const alerts = [
  { id: 1, type: 'warning', message: 'High CPU usage detected on server-02', time: '5 min ago' },
  { id: 2, type: 'info', message: 'Memory usage returned to normal', time: '12 min ago' },
  { id: 3, type: 'critical', message: 'Disk space below 20% on db-primary', time: '1 hour ago' },
];

const MonitoringPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Monitoring Dashboard</h1>
          <p className="text-gray-600 mt-2">Real-time system performance and resource utilization</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">CPU & Memory Usage</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monitoringData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="cpu" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="memory" stackId="2" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Network Traffic</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monitoringData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="network" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {resourceUsage.map((resource) => (
            <div key={resource.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700 font-medium">{resource.name}</span>
                <span className="text-2xl font-bold" style={{ color: resource.color }}>
                  {resource.value}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-500"
                  style={{ width: `${resource.value}%`, backgroundColor: resource.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  alert.type === 'critical'
                    ? 'bg-red-50 border border-red-200'
                    : alert.type === 'warning'
                    ? 'bg-yellow-50 border border-yellow-200'
                    : 'bg-blue-50 border border-blue-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      alert.type === 'critical'
                        ? 'bg-red-500'
                        : alert.type === 'warning'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                    }`}
                  />
                  <span className="text-gray-700">{alert.message}</span>
                </div>
                <span className="text-sm text-gray-500">{alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringPage;
