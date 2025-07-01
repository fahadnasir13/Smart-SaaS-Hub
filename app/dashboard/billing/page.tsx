"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Download,
  CheckCircle,
  XCircle,
  Clock,
  Crown,
  Zap,
  Star,
  ArrowUpRight,
  Calendar
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Up to 1,000 API calls", "Basic analytics", "Email support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    features: ["Up to 100,000 API calls", "Advanced analytics", "Priority support", "Webhooks"],
    current: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "per month",
    features: ["Unlimited API calls", "Custom integrations", "24/7 support", "SLA guarantee"],
    current: false,
  },
];

const invoices = [
  {
    id: "INV-001",
    date: "2024-06-01",
    amount: "$49.00",
    status: "paid",
    plan: "Pro",
    period: "June 2024",
  },
  {
    id: "INV-002",
    date: "2024-05-01",
    amount: "$49.00",
    status: "paid",
    plan: "Pro",
    period: "May 2024",
  },
  {
    id: "INV-003",
    date: "2024-04-01",
    amount: "$49.00",
    status: "paid",
    plan: "Pro",
    period: "April 2024",
  },
  {
    id: "INV-004",
    date: "2024-03-01",
    amount: "$29.00",
    status: "failed",
    plan: "Starter",
    period: "March 2024",
  },
];

const usageData = [
  { metric: "API Calls", used: "45,200", limit: "100,000", percentage: 45.2 },
  { metric: "Webhooks", used: "12", limit: "50", percentage: 24 },
  { metric: "Storage", used: "2.3 GB", limit: "10 GB", percentage: 23 },
  { metric: "Team Members", used: "3", limit: "10", percentage: 30 },
];

export default function BillingPage() {
  console.log("Billing page rendered");

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Billing & Subscription</h1>
          <p className="text-muted-foreground">
            Manage your subscription, usage, and billing information
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Invoice
        </Button>
      </div>

      {/* Current Plan */}
      <Card className="bg-glass border-border/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                <Crown className="mr-2 h-5 w-5 text-yellow-500" />
                Current Plan: Pro
              </CardTitle>
              <CardDescription>
                Your subscription renews on July 1, 2024
              </CardDescription>
            </div>
            <Badge variant="default" className="bg-primary/20 text-primary">
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold">$49</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">23</div>
              <div className="text-sm text-muted-foreground">days remaining</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100K</div>
              <div className="text-sm text-muted-foreground">API calls included</div>
            </div>
            <div className="flex items-center justify-center">
              <Button variant="outline">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Upgrade Plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Stats */}
      <Card className="bg-glass border-border/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Usage Overview</CardTitle>
          <CardDescription>Current month usage across all services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {usageData.map((item) => (
              <div key={item.metric} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.metric}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.used} / {item.limit}
                  </span>
                </div>
                <Progress value={item.percentage} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  {item.percentage}% of quota used
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="plans" className="space-y-4">
        <TabsList>
          <TabsTrigger value="plans">Plans & Pricing</TabsTrigger>
          <TabsTrigger value="invoices">Billing History</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        {/* Plans Tab */}
        <TabsContent value="plans">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`bg-glass border-border/50 backdrop-blur-sm relative ${
                  plan.current ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.current && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Current Plan
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center">
                    {plan.name === "Free" && <Zap className="mr-2 h-5 w-5" />}
                    {plan.name === "Pro" && <Star className="mr-2 h-5 w-5" />}
                    {plan.name === "Enterprise" && <Crown className="mr-2 h-5 w-5" />}
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.period}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.current ? "secondary" : "default"}
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : `Choose ${plan.name}`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Invoices Tab */}
        <TabsContent value="invoices">
          <Card className="bg-glass border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download your invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Period</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-mono">{invoice.id}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.plan}</TableCell>
                      <TableCell>{invoice.period}</TableCell>
                      <TableCell className="font-semibold">{invoice.amount}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            invoice.status === "paid" 
                              ? "default" 
                              : invoice.status === "failed" 
                              ? "destructive" 
                              : "secondary"
                          }
                        >
                          {invoice.status === "paid" && <CheckCircle className="mr-1 h-3 w-3" />}
                          {invoice.status === "failed" && <XCircle className="mr-1 h-3 w-3" />}
                          {invoice.status === "pending" && <Clock className="mr-1 h-3 w-3" />}
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Methods Tab */}
        <TabsContent value="payment">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-glass border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <div className="font-medium">•••• •••• •••• 4242</div>
                        <div className="text-sm text-muted-foreground">Expires 12/26</div>
                      </div>
                    </div>
                    <Badge variant="default">Primary</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-glass border-border/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Billing Address</CardTitle>
                <CardDescription>Update your billing information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>Acme Corporation</div>
                  <div>123 Business St</div>
                  <div>San Francisco, CA 94105</div>
                  <div>United States</div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Update Address
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}