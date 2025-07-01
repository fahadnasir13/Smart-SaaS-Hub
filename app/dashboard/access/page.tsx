import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function AccessPage() {
  const roles = [
    { role: "Admin", users: 2, permissions: ["Full Access"], color: "bg-red-500" },
    { role: "Editor", users: 4, permissions: ["Edit Content", "View Reports"], color: "bg-yellow-500" },
    { role: "Viewer", users: 8, permissions: ["View Only"], color: "bg-green-500" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Access Management</h1>
      <Card>
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      {item.role}
                    </div>
                  </TableCell>
                  <TableCell>{item.users}</TableCell>
                  <TableCell>
                    {item.permissions.map((perm, i) => (
                      <Badge key={i} variant="secondary" className="mr-1">{perm}</Badge>
                    ))}
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">Manage</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
