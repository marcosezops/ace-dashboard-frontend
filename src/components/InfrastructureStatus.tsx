import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRightIcon,
  ArrowDownLeftIcon,
  Server,
  Database,
  Network,
  HardDrive,
  Cpu,
  Monitor,
  Layers,
  Zap,
  Cloud,
  Shield,
  ServerCog,
  Boxes
} from "lucide-react";

interface StatusCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  status: "healthy" | "warning" | "critical" | "updating";
  trend?: "up" | "down";
  trendValue?: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, icon, value, status, trend, trendValue }) => {
  const getStatusColor = () => {
    switch (status) {
      case "healthy": return "bg-green-500/20 text-green-400 border-green-400";
      case "warning": return "bg-yellow-500/20 text-yellow-400 border-yellow-400";
      case "critical": return "bg-red-500/20 text-red-400 border-red-400";
      case "updating": return "bg-blue-500/20 text-blue-400 border-blue-400";
      default: return "";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "healthy": return <Badge variant="outline" className={getStatusColor()}>Healthy</Badge>;
      case "warning": return <Badge variant="outline" className={getStatusColor()}>Warning</Badge>;
      case "critical": return <Badge variant="outline" className={getStatusColor()}>Critical</Badge>;
      case "updating": return (
        <Badge variant="outline" className={getStatusColor()}>
          <span className="h-3 w-3 mr-1 animate-spin">⟳</span>
          Updating
        </Badge>
      );
      default: return null;
    }
  };

  return (
    <Card data-testid="status-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium" data-testid="card-title">{title}</CardTitle>
        <div data-testid="card-icon">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" data-testid="card-value">{value}</div>
        <div className="flex justify-between mt-2">
          <div data-testid="card-status">{getStatusIcon()}</div>
          {trend && trendValue && (
            <div className={`flex items-center text-xs ${trend === "up" ? "text-green-400" : "text-red-400"}`}> 
              {trend === "up" ? (
                <ArrowUpRightIcon className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDownLeftIcon className="h-3 w-3 mr-1" />
              )}
              {trendValue}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const InfrastructureStatus: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" data-testid="infrastructure-status">
      <StatusCard
        title="EKS Clusters"
        icon={<Server className="h-4 w-4 text-muted-foreground" />}
        value="2/2"
        status="healthy"
        trend="up"
        trendValue="Both active"
      />
      <StatusCard
        title="PostgreSQL DBs"
        icon={<Database className="h-4 w-4 text-muted-foreground" />}
        value="3/3"
        status="healthy"
        trend="up"
        trendValue="All connected"
      />
      <StatusCard
        title="Redis Cache"
        icon={<Cpu className="h-4 w-4 text-muted-foreground" />}
        value="2/2"
        status="healthy"
      />
      <StatusCard
        title="Load Balancers"
        icon={<Network className="h-4 w-4 text-muted-foreground" />}
        value="2/2"
        status="healthy"
      />
      <StatusCard
        title="K8s Deployments"
        icon={<Layers className="h-4 w-4 text-muted-foreground" />}
        value="4 active"
        status="healthy"
        trend="up"
        trendValue="All running"
      />
      <StatusCard
        title="K8s Pods"
        icon={<Monitor className="h-4 w-4 text-muted-foreground" />}
        value="6 running"
        status="healthy"
      />
      <StatusCard
        title="EC2 Instances"
        icon={<Server className="h-4 w-4 text-muted-foreground" />}
        value="2/2"
        status="healthy"
      />
      <StatusCard
        title="Pipeline Status"
        icon={<HardDrive className="h-4 w-4 text-muted-foreground" />}
        value="2 active"
        status="healthy"
      />
      <StatusCard
        title="EzopsCluster[2025-12-23] Cluster"
        icon={<Server className="h-4 w-4 text-muted-foreground" />}
        value="Running"
        status="healthy"
        data-testid="ezops-cluster-box"
      />
    </div>
  );
};

export default InfrastructureStatus;