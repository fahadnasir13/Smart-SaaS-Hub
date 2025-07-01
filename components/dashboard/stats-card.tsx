"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  className,
}: StatsCardProps) {
  console.log("StatsCard rendered:", title, value);

  return (
    <Card className={cn("bg-glass border-border/50 backdrop-blur-sm", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className="flex items-center space-x-2 mt-2">
            <Badge
              variant={
                changeType === "positive"
                  ? "default"
                  : changeType === "negative"
                  ? "destructive"
                  : "secondary"
              }
              className="text-xs"
            >
              {change}
            </Badge>
            <p className="text-xs text-muted-foreground">from last month</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}