"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Webhook, 
  Plus, 
  MoreHorizontal, 
  CheckCircle, 
  XCircle, 
  Clock,
  Activity,
  Send,
  Settings,
  Trash2,
  Copy,
  RefreshCw
} from "lucide-react";

const webhooks = [
  {
    id: 1,
    name: "Payment Notifications",
    url: "https://api.example.com/webhooks/payment",
    events: ["payment.succeeded", "payment.failed", "subscription.updated"],
    status: "active",
    lastDelivery: "2 minutes ago",
    successRate: 98.5,
    totalDeliveries: 1247,
  },
  {
    id: 2,
    name: "User Events",
    url: "https://api.example.com/webhooks/users",
    events: ["user.created", "user.updated", "user.deleted"],
    status: "active",
    lastDelivery: "5 minutes ago",
    successRate: 100,
    totalDeliveries: 89,
  },
  {
    id: 3,
    name: "System Alerts",
    url: "https://api.example.com/webhooks/alerts",
    events: ["system.error", "system.warning"],
    status: "inactive",
    lastDelivery: "1 day ago",
    successRate: 85.2,
    totalDeliveries: 456,
  },
];

const recentDeliveries = [
  {
    id: 1,
    webhook: "Payment Notifications",
    event: "payment.succeeded",
    status: "success",
    timestamp: "2 minutes ago",
    responseTime: "145ms",
  },
  {
    id: 2,
    webhook: "User Events",
    event: "user.created",
    status: "success",
    timestamp: "5 minutes ago",
    responseTime: "98ms",
  },
  {
    id: 3,
    webhook: "Payment Notifications",
    event: "payment.failed",
    status: "failed",
    timestamp: "8 minutes ago",
    responseTime: "timeout",
  },
  {
    id: 4,
    webhook: "System Alerts",
    event: "system.warning",
    status: "retry",
    timestamp: "12 minutes ago",
    responseTime: "2.3s",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "default";
    case "inactive":
      return "secondary";
    case "error":
      return "destructive";
    default:
      return "secondary";
  }
};

const getDeliveryStatusColor = (status: string) => {
  switch (status) {
    case "success":
      return "default";
    case "failed":
      return "destructive";
    case "retry":
      return "secondary";
    default:
      return "secondary";
  }
};

export default function WebhooksPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  console.log("Webhooks page rendered, total webhooks:", webhooks.length);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Webhooks</h1>
          <p className="text-muted-foreground">
            Manage webhook endpoints and event deliveries
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Webhook
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Webhook</DialogTitle>
              <DialogDescription>
                Add a new webhook endpoint to receive event notifications
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="webhook-name">Name</Label>
                <Input id="webhook-name" placeholder="Enter webhook name" />
              </div>
              <div>
                <Label htmlFor="webhook-url">Endpoint URL</Label>
                <Input id="webhook-url" placeholder="https://api.example.com/webhooks" />
              </div>
              <div>
                <Label htmlFor="webhook-description">Description</Label>
                <Textarea id="webhook-description" placeholder="Describe what this webhook does..." />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="webhook-active" />
                <Label htmlFor="webhook-active">Active</Label>
              </div>
              <Button className="w-full" onClick={() => setIsCreateDialogOpen(false)}>
                Create Webhook
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-glass border-border/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Webhooks</CardTitle>
            <Webhook className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{webhooks.length}</div>
            <p className="text-xs text-muted-foreground">2 active endpoints</p>
          </CardContent>
        </Card>
        <Card className="bg-glass border-border/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.8%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
        <Card className="bg-glass border-border/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Deliveries</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,792</div>
            <p className="text-xs text-muted-foreground">+127 this month</p>
          </CardContent>
        </Card>
        <Card className="bg-glass border-border/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Deliveries</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58</div>
            <p className="text-xs text-muted-foreground">3.2% failure rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="endpoints" className="space-y-4">
        <TabsList>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="deliveries">Recent Deliveries</TabsTrigger>
          <TabsTrigger value="events">Event Types</TabsTrigger>
        </TabsList>

        {/* Endpoints Tab */}
        <TabsContent value="endpoints">
          <Card className="bg-glass border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Webhook Endpoints</CardTitle>
              <CardDescription>Manage your webhook endpoints and their configurations</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>URL</TableHead>
                    <TableHead>Events</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Success Rate</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {webhooks.map((webhook) => (
                    <TableRow key={webhook.id}>
                      <TableCell className="font-medium">{webhook.name}</TableCell>
                      <TableCell className="font-mono text-sm">{webhook.url}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {webhook.events.slice(0, 2).map((event) => (
                            <Badge key={event} variant="outline" className="text-xs">
                              {event}
                            </Badge>
                          ))}
                          {webhook.events.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{webhook.events.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(webhook.status)}>
                          {webhook.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">{webhook.successRate}%</span>
                          <span className="text-xs text-muted-foreground">
                            ({webhook.totalDeliveries} total)
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Settings className="mr-2 h-4 w-4" />
                              Edit Webhook
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Send className="mr-2 h-4 w-4" />
                              Test Delivery
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              Copy URL
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Webhook
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recent Deliveries Tab */}
        <TabsContent value="deliveries">
          <Card className="bg-glass border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Deliveries</CardTitle>
              <CardDescription>Monitor webhook delivery attempts and their outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Webhook</TableHead>
                    <TableHead>Event</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Response Time</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDeliveries.map((delivery) => (
                    <TableRow key={delivery.id}>
                      <TableCell className="font-medium">{delivery.webhook}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-mono text-xs">
                          {delivery.event}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getDeliveryStatusColor(delivery.status)}>
                          {delivery.status === "success" && <CheckCircle className="mr-1 h-3 w-3" />}
                          {delivery.status === "failed" && <XCircle className="mr-1 h-3 w-3" />}
                          {delivery.status === "retry" && <RefreshCw className="mr-1 h-3 w-3" />}
                          {delivery.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-sm">{delivery.responseTime}</TableCell>
                      <TableCell className="text-muted-foreground">{delivery.timestamp}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Event Types Tab */}
        <TabsContent value="events">
          <Card className="bg-glass border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Available Event Types</CardTitle>
              <CardDescription>Configure which events trigger webhook deliveries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium">Payment Events</h4>
                  <div className="space-y-2">
                    {["payment.succeeded", "payment.failed", "payment.processing"].map((event) => (
                      <div key={event} className="flex items-center space-x-2">
                        <Switch id={event} />
                        <Label htmlFor={event} className="font-mono text-sm">{event}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">User Events</h4>
                  <div className="space-y-2">
                    {["user.created", "user.updated", "user.deleted"].map((event) => (
                      <div key={event} className="flex items-center space-x-2">
                        <Switch id={event} />
                        <Label htmlFor={event} className="font-mono text-sm">{event}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}