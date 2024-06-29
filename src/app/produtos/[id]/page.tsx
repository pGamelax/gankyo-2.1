"use client";

import { Button } from "@/components/ui/button";
import InputLabel from "@/components/ui/input-label";
import { producs } from "@/lib/data";
import { useForm, SubmitHandler } from "react-hook-form";

export default function ProductDetails({ params }: any) {
  const productFound = producs.find((product) => product.id === +params.id);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: productFound?.id,
      product: productFound?.produto,
      descricao: productFound?.descricao,
      preco: productFound?.preco,
    },
  });
  return (
    <div className="px-8 pt-6 w-full">
      <div className="flex flex-row w-full sm:w-max items-center justify-between">
        <h1 className="xl:text-2xl font-sans font-bold">Detalhes</h1>
      </div>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="pt-6"
      >
        <InputLabel
          label="Id"
          register={register("id")}
          disabled
          className="w-24  mb-2 "
        />
        <InputLabel
          label="Produto"
          register={register("product")}
          className="w-96 mb-2"
        />
        <InputLabel
          label="Descrição"
          register={register("descricao")}
          className=" w-96 mb-2"
        />
        <InputLabel
          label="Preço"
          register={register("preco")}
          className=" w-96 mb-2"
        />
        <Button type="submit" >Console</Button>
      </form>
    </div>
  );
}
