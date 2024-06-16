import { Button } from "@/components/ui/button";
import InputLabel from "@/components/ui/input-label";
import { producs } from "@/lib/data";
import { EllipsisVertical, Search } from "lucide-react";

export default function ProductDetails({ params }: any) {
  const data = producs.find((product) => product.id === +params.id);
  return (
    <div className="px-8 pt-6 w-full">
      <div className="flex flex-row w-full sm:w-max items-center justify-between">
        <h1 className="xl:text-2xl font-sans font-bold">Detalhes</h1>
      </div>
      <div className="pt-6">
        <InputLabel
          label="Id"
          value={data?.id}
          disabled
          className="w-24  mb-2 "
        />
        <InputLabel
          label="Produto"
          value={data?.produto}
          className="w-96 mb-2"
        />
        <InputLabel
          label="Descrição"
          value={data?.descricao}
          className=" w-96 mb-2"
        />
        <InputLabel label="Preço" value={data?.preco} className=" w-96 mb-2" />
      </div>
    </div>
  );
}
