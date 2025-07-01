// ✅ app/dashboard/page.tsx (Full Restored Version — Without Auth)

"use client";

import { StatsCard } from "@/components/dashboard/stats-card";
import { OverviewChart } from "@/components/dashboard/overview-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  DollarSign,
  Activity,
  CreditCard,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  console.log("Dashboard page rendered");

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your SaaS.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <TrendingUp className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button>
            <CheckCircle className="mr-2 h-4 w-4" />
            Quick Actions
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1%"
          changeType="positive"
          icon={DollarSign}
        />
        <StatsCard
          title="Active Users"
          value="2,350"
          change="+180"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="Conversion Rate"
          value="12.5%"
          change="+2.5%"
          changeType="positive"
          icon={Activity}
        />
        <StatsCard
          title="Churn Rate"
          value="3.2%"
          change="-0.8%"
          changeType="positive"
          icon={CreditCard}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Chart */}
        <div className="col-span-4">
          <OverviewChart />
        </div>

        {/* Recent Activity */}
        <div className="col-span-3">
          <RecentActivity />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* System Health */}
        <Card className="bg-glass border-border/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-4 w-4" />
              System Health
            </CardTitle>
            <CardDescription>
              Real-time system performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">API Response Time</span>
                <Badge variant="default">98ms</Badge>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Server Uptime</span>
                <Badge variant="default">99.9%</Badge>
              </div>
              <Progress value={99.9} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Database Health</span>
                <Badge variant="default">Optimal</Badge>
              </div>
              <Progress value={95} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="bg-glass border-border/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Alerts & Notifications
            </CardTitle>
            <CardDescription>
              Important system alerts and warnings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-warning/10 border border-warning/20">
              <div className="h-2 w-2 rounded-full bg-warning animate-pulse" />
              <div className="flex-1">
                <p className="text-sm font-medium">High API Usage</p>
                <p className="text-xs text-muted-foreground">85% of monthly quota used</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <div className="flex-1">
                <p className="text-sm font-medium">Payment Processed</p>
                <p className="text-xs text-muted-foreground">$1,234.56 received</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/10 border border-muted/20">
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-medium">Maintenance Scheduled</p>
                <p className="text-xs text-muted-foreground">Tomorrow at 2:00 AM UTC</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-glass border-border/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              Quick Stats
            </CardTitle>
            <CardDescription>
              Key metrics at a glance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Webhooks Sent</span>
              <span className="font-semibold">1,247</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Failed Payments</span>
              <span className="font-semibold">23</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">New Signups</span>
              <span className="font-semibold">89</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Support Tickets</span>
              <span className="font-semibold">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">API Calls</span>
              <span className="font-semibold">45.2K</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
