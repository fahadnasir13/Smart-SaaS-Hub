"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  {
    id: 1,
    user: "Alice Johnson",
    avatar: "/avatar1.png",
    action: "upgraded to Pro plan",
    time: "2 minutes ago",
    type: "billing",
  },
  {
    id: 2,
    user: "Bob Smith",
    avatar: "/avatar2.png",
    action: "created new webhook endpoint",
    time: "5 minutes ago",
    type: "webhook",
  },
  {
    id: 3,
    user: "Carol Davis",
    avatar: "/avatar3.png",
    action: "invited team member",
    time: "10 minutes ago",
    type: "user",
  },
  {
    id: 4,
    user: "David Wilson",
    avatar: "/avatar4.png",
    action: "payment failed",
    time: "15 minutes ago",
    type: "error",
  },
  {
    id: 5,
    user: "Eva Martinez",
    avatar: "/avatar5.png",
    action: "updated API permissions",
    time: "1 hour ago",
    type: "security",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "billing":
      return "default";
    case "webhook":
      return "secondary";
    case "user":
      return "outline";
    case "error":
      return "destructive";
    case "security":
      return "default";
    default:
      return "secondary";
  }
};

export function RecentActivity() {
  console.log("RecentActivity rendered with", activities.length, "activities");

  return (
    <Card className="bg-glass border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest actions and events in your dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.avatar} alt={activity.user} />
                  <AvatarFallback className="text-xs">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">
                      {activity.user}
                    </p>
                    <Badge variant={getTypeColor(activity.type)} className="text-xs">
                      {activity.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}