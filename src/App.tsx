import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Activity, 
  Server, 
  Bell, 
  Settings, 
  Search, 
  Users, 
  Database, 
  Shield as ShieldIcon,
  Clock,
  HardDrive,
  Network,
  Cloud,
  Lock,
  UserCog,
  Bell as BellIcon,
  Webhook,
  LineChart,
  BarChart,
  PieChart,
  Map
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const threats = [
    { id: 1, type: 'Ransomware', severity: 'High', source: '192.168.1.105', timestamp: '2024-03-15 14:23:45' },
    { id: 2, type: 'Suspicious Login', severity: 'Medium', source: '10.0.0.15', timestamp: '2024-03-15 14:20:30' },
    { id: 3, type: 'Port Scan', severity: 'Low', source: '172.16.0.100', timestamp: '2024-03-15 14:15:22' },
  ];

  const stats = [
    { title: 'Threats Detected', value: '47', change: '+12%', icon: AlertTriangle },
    { title: 'System Health', value: '98%', change: '-1%', icon: Activity },
    { title: 'Active Users', value: '156', change: '+5%', icon: Users },
    { title: 'Network Load', value: '76%', change: '+8%', icon: Server },
  ];

  const alerts = [
    { id: 1, title: 'Critical System Failure', type: 'critical', time: '2 minutes ago', description: 'Database server unresponsive' },
    { id: 2, title: 'New Device Connected', type: 'warning', time: '5 minutes ago', description: 'Unknown device on network' },
    { id: 3, title: 'Backup Completed', type: 'success', time: '10 minutes ago', description: 'Daily backup successful' },
    { id: 4, title: 'Failed Login Attempts', type: 'warning', time: '15 minutes ago', description: 'Multiple failed login attempts detected' },
  ];

  const assets = [
    { id: 1, name: 'Web Server', type: 'Server', status: 'Online', lastUpdated: '2024-03-15 14:00:00', ip: '192.168.1.100' },
    { id: 2, name: 'Database Server', type: 'Database', status: 'Online', lastUpdated: '2024-03-15 14:00:00', ip: '192.168.1.101' },
    { id: 3, name: 'Load Balancer', type: 'Network', status: 'Online', lastUpdated: '2024-03-15 14:00:00', ip: '192.168.1.102' },
    { id: 4, name: 'Storage Server', type: 'Storage', status: 'Maintenance', lastUpdated: '2024-03-15 14:00:00', ip: '192.168.1.103' },
  ];

  const renderDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-6 w-6 text-blue-500" />
              <span className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">Recent Threats</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Severity</th>
                <th className="text-left py-3 px-4">Source</th>
                <th className="text-left py-3 px-4">Timestamp</th>
                <th className="text-left py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {threats.map((threat) => (
                <tr key={threat.id} className="border-b border-gray-100">
                  <td className="py-3 px-4">{threat.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      threat.severity === 'High' ? 'bg-red-100 text-red-800' :
                      threat.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {threat.severity}
                    </span>
                  </td>
                  <td className="py-3 px-4">{threat.source}</td>
                  <td className="py-3 px-4">{threat.timestamp}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      Investigate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const renderAlerts = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Alert Center</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
              Mark All Read
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Configure Alerts
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className={`p-2 rounded-full ${
                alert.type === 'critical' ? 'bg-red-100 text-red-600' :
                alert.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                'bg-green-100 text-green-600'
              }`}>
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{alert.title}</h3>
                  <span className="text-sm text-gray-500">{alert.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <LineChart className="h-5 w-5 text-blue-500" />
            Threat Detection Trends
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            [Threat Detection Chart]
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <PieChart className="h-5 w-5 text-blue-500" />
            Alert Distribution
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            [Alert Distribution Chart]
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Map className="h-5 w-5 text-blue-500" />
          Geographic Attack Origin
        </h3>
        <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
          [Geographic Map]
        </div>
      </div>
    </div>
  );

  const renderAssets = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Asset Inventory</h2>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Add New Asset
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">IP Address</th>
                <th className="text-left py-3 px-4">Last Updated</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} className="border-b border-gray-100">
                  <td className="py-3 px-4">{asset.name}</td>
                  <td className="py-3 px-4">{asset.type}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      asset.status === 'Online' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{asset.ip}</td>
                  <td className="py-3 px-4">{asset.lastUpdated}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold mb-6">System Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-500" />
              Security Settings
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                Enable Two-Factor Authentication
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                Auto-block Suspicious IPs
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                Real-time Threat Detection
              </label>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BellIcon className="h-5 w-5 text-blue-500" />
              Notification Settings
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                Email Notifications
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                SMS Alerts
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-blue-600" />
                Slack Integration
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Webhook className="h-5 w-5 text-blue-500" />
          API Configuration
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              API Key
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                value="************************"
                readOnly
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2"
              />
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Regenerate
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Webhook URL
            </label>
            <input
              type="text"
              placeholder="https://your-webhook-url.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'alerts':
        return renderAlerts();
      case 'analytics':
        return renderAnalytics();
      case 'assets':
        return renderAssets();
      case 'settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-4">
        <div className="flex items-center gap-2 mb-8">
          <Shield className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">SentinelForge</span>
        </div>
        
        <nav className="space-y-2">
          {[
            { name: 'Dashboard', icon: ShieldIcon },
            { name: 'Alerts', icon: Bell },
            { name: 'Analytics', icon: Activity },
            { name: 'Assets', icon: Database },
            { name: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name.toLowerCase())}
              className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
                activeTab === item.name.toLowerCase()
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

export default App;