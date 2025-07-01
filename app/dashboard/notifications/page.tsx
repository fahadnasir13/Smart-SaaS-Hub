import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NotificationsPage() {
  const notifications = [
    { title: "New user signed up", date: "2025-06-25", status: "info" },
    { title: "Subscription expired", date: "2025-06-24", status: "warning" },
    { title: "Server downtime reported", date: "2025-06-23", status: "error" },
  ];

  const statusColor = {
    info: "bg-blue-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Notifications</h1>
      <div className="space-y-3">
        {notifications.map((item, idx) => (
          <Card key={idx}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
              <Badge className={`${statusColor[item.status as keyof typeof statusColor]} text-white`}>
                {item.status.toUpperCase()}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
