import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "./icon";

export default function CardDashboard({ title, icon, value, percentage }: any) {
  return (
    <Card className="w-ful">
      <CardHeader className="flex row justify-between items-center" >
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription><Icon name={icon} className="w-4 h-4"/></CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
        <p className="opacity-50 text-sm">+{percentage} from last month</p>
      </CardContent>
    </Card>
  );
}
