"use client";

import { Button } from "@/components/ui/button";
import InputLabel from "@/components/ui/input-label";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ArrowLeft, X } from "lucide-react";
import { ProductProps } from "../page";
import Link from "next/link";

export default function ProductDetails({ params }: any) {
  const [product, setProduct] = useState<ProductProps>();
  const [updateDisabled, setUpdateDisabled] = useState(true);
  const { register, handleSubmit, setValue } = useForm({});

  const handleSave = async (data: any) => {
    axios.patch(`https://gankyo-server.onrender.com/product/${data.id}`, {
      produto: data.product,
      descricao: data.descricao,
      preco: +data.preco,
      quantidade: +data.quantidade,
    });

    setUpdateDisabled(true)
  };

  const handleCancel = () => {
    setValue("id", product?.id);
    setValue("product", product?.produto);
    setValue("descricao", product?.descricao);
    setValue("preco",product?.preco);
    setValue("quantidade", product?.quantidade);

    setUpdateDisabled(true)
  }
  useEffect(() => {
    axios.get(`https://gankyo-server.onrender.com/product/${params.id}`).then((response) => {
      setValue("id", response.data.id);
      setValue("product", response.data.produto);
      setValue("descricao", response.data.descricao);
      setValue("preco", response.data.preco);
      setValue("quantidade", response.data.quantidade);

      setProduct(response.data);
    });
  }, []);
  return (
    <div className="px-8 pt-6 w-full">
      <form
        onSubmit={handleSubmit((data) => handleSave(data))}
        className=""
      >
        <div className="flex flex-row w-full items-center justify-between pb-6">
        <div className="flex flex-row gap-2 items-center">
            <Button variant="ghost">
              <Link href="/produtos">
                <ArrowLeft />
              </Link>
            </Button>
            <h1 className="xl:text-2xl text-xl font-sans font-bold">
              Detalhes
            </h1>
          </div>
          <div className="flex gap-2">
            <Button disabled={updateDisabled} type="submit">
              Confirmar
            </Button>
            <Button onClick={() => handleCancel()}  disabled={updateDisabled}>
              <X />
            </Button>
          </div>
        </div>

        <InputLabel
          label="Id"
          register={register("id")}
         
          disabled
          className="w-24  mb-2 "
        />
        <InputLabel
          label="Produto"
          register={register("product", {onChange: () => setUpdateDisabled(false)})}
          className="w-96 mb-2"
        />
        <InputLabel
          label="Descrição"
          register={register("descricao", {onChange: () => setUpdateDisabled(false)})}
          className=" w-96 mb-2"
        />
        <InputLabel
          label="Preço"
          register={register("preco", {onChange: () => setUpdateDisabled(false)})}
          className=" w-96 mb-2"
        />
      </form>
    </div>
  );
}
