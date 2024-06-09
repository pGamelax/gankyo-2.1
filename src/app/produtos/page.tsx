import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EllipsisVertical, Search } from "lucide-react";

export default function Produtos() {
  return (
    <div className="px-8 pt-6">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
        <div className="flex flex-row w-full sm:w-max items-center justify-between">
          <h1 className="text-2xl font-sans font-bold">Produtos</h1>
          <EllipsisVertical className="w-4 h-4 sm:hidden md:hidden lg:hidden xl:hidden" />
        </div>

        <div className="flex flex-row flex-wrap gap-2 md:p-0 justify-center">
          <Input type="text" placeholder="Produto" className="w-64" />
          <Button variant="default" className="">
            <Search className="w-6 h-6" />
          </Button>
          <Button variant="default" className="hidden sm:flex">
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
}
