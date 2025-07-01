"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  LayoutDashboard,
  Users,
  FileText,
  Webhook,
  CreditCard,
  Settings,
  Shield,
  Activity,
  Bell,
  BarChart3,
  Zap,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const navigation = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
    badge: "Pro",
  },
  {
    name: "User Management",
    icon: Users,
    href: "/dashboard/users",
    badge: "12",
  },
];

const integrations = [
  {
    name: "Webhooks",
    icon: Webhook,
    href: "/dashboard/webhooks",
    badge: "3",
  },
  {
    name: "Billing",
    icon: CreditCard,
    href: "/dashboard/billing",
  },
  {
    name: "Audit Logs",
    icon: FileText,
    href: "/dashboard/audit",
    badge: "New",
  },
];

const settings = [
  {
    name: "Access Control",
    icon: Shield,
    href: "/dashboard/access",
  },
  {
    name: "Notifications",
    icon: Bell,
    href: "/dashboard/notifications",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  console.log("Sidebar render, collapsed:", collapsed, "pathname:", pathname);

  return (
    <div
      className={cn(
        "relative flex flex-col border-r border-border bg-card/50 backdrop-blur-sm transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">SaaS Hub</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              collapsed && "rotate-180"
            )}
          />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-6">
          {/* Main Navigation */}
          <div>
            {!collapsed && (
              <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Main
              </h4>
            )}
            <nav className="space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start h-9",
                      collapsed && "justify-center px-2"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && (
                      <>
                        <span className="ml-2">{item.name}</span>
                        {item.badge && (
                          <Badge
                            variant={item.badge === "Pro" ? "default" : "secondary"}
                            className="ml-auto h-5 px-1.5 text-xs"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          <Separator />

          {/* Integrations */}
          <div>
            {!collapsed && (
              <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Integrations
              </h4>
            )}
            <nav className="space-y-1">
              {integrations.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start h-9",
                      collapsed && "justify-center px-2"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && (
                      <>
                        <span className="ml-2">{item.name}</span>
                        {item.badge && (
                          <Badge
                            variant={item.badge === "New" ? "default" : "secondary"}
                            className="ml-auto h-5 px-1.5 text-xs"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>

          <Separator />

          {/* Settings */}
          <div>
            {!collapsed && (
              <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Settings
              </h4>
            )}
            <nav className="space-y-1">
              {settings.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start h-9",
                      collapsed && "justify-center px-2"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span className="ml-2">{item.name}</span>}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          {!collapsed && (
            <span className="text-xs text-muted-foreground">System Online</span>
          )}
        </div>
      </div>
    </div>
  );
}