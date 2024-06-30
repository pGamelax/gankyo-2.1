"use client";

import { Button } from "@/components/ui/button";
import InputLabel from "@/components/ui/input-label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ArrowLeft, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import translate from "translate";
import Link from "next/link";
import { z } from "zod";

const inputSchema = z.object({
  produto: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  descricao: z.string({
    required_error: "Descricao is required",
    invalid_type_error: "Descricao must be a string",
  }),
  preco: z
    .string({
      required_error: "Preco is required",
      invalid_type_error: "Preco must be a number",
    })
    .transform(Number),
  custo: z
    .string({
      required_error: "Custo is required",
      invalid_type_error: "Name must be a number",
    })
    .transform(Number),
  quantidade: z
    .string({
      required_error: "Quantidade is required",
      invalid_type_error: "Quantidade must be a number",
    })
    .transform(Number),
});

export default function RegisterPage() {
  const { toast } = useToast();
  const [updateDisabled, setUpdateDisabled] = useState(true);
  const { register, handleSubmit, resetField, formState: { errors } } = useForm({});

  const handleSave = async (data: any) => {

    try {
      axios
        .post(`https://gankyo-server.onrender.com/product`, {
          produto: data?.produto,
          descricao: data?.descricao,
          preco: +data?.preco,
          custo: +data?.custo,
          quantidade: +data?.quantidade,
        })
        .then(() => {
          toast({
            title: "Oba!",
            description: "Produto cadastrado com sucesso",
          });
          setUpdateDisabled(true);
          resetField("produto");
          resetField("descricao");
          resetField("preco");
          resetField("quantidade");
          resetField("custo");
        })
        .catch(async (error) => {
            console.log(error)
          toast({
            variant: "destructive",

            title: "Ops!",
            description: await translate(error.response.data.error, "pt"),
          });
        });
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",

        title: "Ops!",
        description: error.message,
      });
    }
  };

  const handleCancel = () => {
    resetField("produto");
    resetField("descricao"),
    resetField("preco"),
    resetField("quantidade");
    resetField("custo");

    setUpdateDisabled(true);
  };

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
              Cadastrar
            </h1>
          </div>

          <div className="flex gap-2">
            <Button disabled={updateDisabled} type="submit">
              Confirmar
            </Button>
            <Button onClick={() => handleCancel()} disabled={updateDisabled}>
              <X />
            </Button>
          </div>
        </div>

        <InputLabel
          label="Produto"
          register={register("produto", {
            required: true,
            onChange: () => setUpdateDisabled(false),
          })}
          error={errors.produto}
          className="w-96"
        />
        <InputLabel
          label="Descrição"
          register={register("descricao", {
            required: true,
            onChange: () => setUpdateDisabled(false),
          })}
          error={errors.descricao}
          className=" w-96"
        />
        
        <InputLabel
          label="Preço"
          register={register("preco", {
            required: true,
            onChange: () => setUpdateDisabled(false),
          })}
          error={errors.preco}
          className=" w-96"
        />
        <InputLabel
          label="Custo"
          register={register("custo", {
            required: true,
            onChange: () => setUpdateDisabled(false),
          })}
          error={errors.custo}
          className=" w-96"
        />
        <InputLabel
          label="Quantidade"
          register={register("quantidade", {
            required: true,
            onChange: () => setUpdateDisabled(false),
          })}
          error={errors.quantidade}
          className=" w-96"
        />
      </form>
    </div>
  );
}
