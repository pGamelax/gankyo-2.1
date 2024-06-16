import { Button } from "@/components/ui/button";
import CardDashboard from "@/components/ui/card-dashboard";
import { DatePickerWithRange } from "@/components/ui/data-range-picker";

export default function Dashboard() {
  return (
    <div className="px-8 pt-6">
      <div className="flex mt-14 flex-col gap-2 md:flex-row items-center justify-between">
        <h1 className="xl:text-2xl font-sans font-bold">Dashboard</h1>

        <div className="flex flex-wrap gap-2 justify-center">
          <DatePickerWithRange />
          <Button variant="default">Download</Button>
        </div>
      </div>

      <div className="pt-6 grid xl:grid-cols-4 sm:grid-cols-2  gap-2">
      <CardDashboard title="Vendas do mes"  icon="dollar-sign" value="$1,200" percentage="10%" />
      <CardDashboard title="Vendas da semana" icon="dollar-sign" value="$1,200" percentage="10%" />
      <CardDashboard title="Vendas do dia" icon="dollar-sign" value="$1,200" percentage="10%" />
      <CardDashboard title="Ultima venda" icon="dollar-sign" value="$1,200" percentage="10%" />
      </div>
      
    </div>
  );
}
