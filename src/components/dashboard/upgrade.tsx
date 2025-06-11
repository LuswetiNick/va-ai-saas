import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInput } from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

export function SidebarUpgrade({
  item,
}: {
  item: { title: string; url: string };
}) {
  return (
    <Card className="gap-2 py-4 shadow-none">
      <CardHeader className="px-4">
        <CardTitle className="text-sm">Upgrade Component</CardTitle>
        <CardDescription>Upgrade</CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <Button size="sm" className="w-full" asChild>
          <Link href={item.url}>
            <span>{item.title}</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
