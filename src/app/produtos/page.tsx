"use client";
import { Table } from "@/components/table/table";
import { ColunmTable, Table2 } from "@/components/table/table2";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EllipsisVertical, Search } from "lucide-react";
import { useState } from "react";

export default function Produtos() {
  const [search, setSearch] = useState("");
  const row = [
    {
      id: 1,
      produto: "Camiseta",
      quantidade: 10,
      descricao: "Camiseta de algodão",
      preco: 20.99,
    },
    {
      id: 2,
      produto: "Calça Jeans",
      quantidade: 5,
      descricao: "Calça jeans masculina",
      preco: 39.99,
    },
    {
      id: 3,
      produto: "Tênis",
      quantidade: 8,
      descricao: "Tênis esportivo",
      preco: 59.99,
    },
    {
      id: 4,
      produto: "Boné",
      quantidade: 15,
      descricao: "Boné com aba curva",
      preco: 9.99,
    },
    {
      id: 5,
      produto: "Óculos de Sol",
      quantidade: 3,
      descricao: "Óculos de sol polarizado",
      preco: 29.99,
    },
    {
      id: 6,
      produto: "Relógio",
      quantidade: 12,
      descricao: "Relógio analógico",
      preco: 49.99,
    },
    {
      id: 7,
      produto: "Bolsa",
      quantidade: 7,
      descricao: "Bolsa feminina",
      preco: 34.99,
    },
    {
      id: 8,
      produto: "Chapéu",
      quantidade: 20,
      descricao: "Chapéu de palha",
      preco: 14.99,
    },
    {
      id: 9,
      produto: "Cinto",
      quantidade: 9,
      descricao: "Cinto de couro",
      preco: 19.99,
    },
    {
      id: 10,
      produto: "Moletom",
      quantidade: 6,
      descricao: "Moletom com capuz",
      preco: 29.99,
    },
    {
      id: 11,
      produto: "Sapato",
      quantidade: 4,
      descricao: "Sapato social masculino",
      preco: 69.99,
    },
    {
      id: 12,
      produto: "Saia",
      quantidade: 11,
      descricao: "Saia estampada",
      preco: 24.99,
    },
    {
      id: 13,
      produto: "Shorts",
      quantidade: 18,
      descricao: "Shorts jeans",
      preco: 17.99,
    },
    {
      id: 14,
      produto: "Blusa",
      quantidade: 13,
      descricao: "Blusa manga longa",
      preco: 22.99,
    },
    {
      id: 15,
      produto: "Jaqueta",
      quantidade: 7,
      descricao: "Jaqueta corta-vento",
      preco: 39.99,
    },
    {
      id: 16,
      produto: "Mochila",
      quantidade: 8,
      descricao: "Mochila escolar",
      preco: 27.99,
    },
    {
      id: 17,
      produto: "Vestido",
      quantidade: 14,
      descricao: "Vestido de festa",
      preco: 49.99,
    },
    {
      id: 18,
      produto: "Gravata",
      quantidade: 10,
      descricao: "Gravata clássica",
      preco: 12.99,
    },
    {
      id: 19,
      produto: "Luvas",
      quantidade: 5,
      descricao: "Luvas de couro",
      preco: 9.99,
    },
    {
      id: 20,
      produto: "Meias",
      quantidade: 22,
      descricao: "Meias esportivas",
      preco: 5.99,
    },
    {
      id: 21,
      produto: "Carteira",
      quantidade: 17,
      descricao: "Carteira de couro",
      preco: 14.99,
    },
    {
      id: 22,
      produto: "Blazer",
      quantidade: 3,
      descricao: "Blazer masculino",
      preco: 79.99,
    },
    {
      id: 23,
      produto: "Lenço",
      quantidade: 9,
      descricao: "Lenço estampado",
      preco: 7.99,
    },
    {
      id: 24,
      produto: "Colar",
      quantidade: 6,
      descricao: "Colar de pérolas",
      preco: 19.99,
    },
    {
      id: 25,
      produto: "Anel",
      quantidade: 12,
      descricao: "Anel de prata",
      preco: 29.99,
    },
    {
      id: 26,
      produto: "Brinco",
      quantidade: 15,
      descricao: "Brinco de ouro",
      preco: 39.99,
    },
    {
      id: 27,
      produto: "Pulseira",
      quantidade: 8,
      descricao: "Pulseira de couro",
      preco: 24.99,
    },
    {
      id: 28,
      produto: "Relógio Inteligente",
      quantidade: 4,
      descricao: "Relógio smartwatch",
      preco: 99.99,
    },
    {
      id: 29,
      produto: "Perfume",
      quantidade: 10,
      descricao: "Perfume masculino",
      preco: 49.99,
    },
    {
      id: 30,
      produto: "Creme Facial",
      quantidade: 7,
      descricao: "Creme hidratante",
      preco: 19.99,
    },
  ];

  const [data, setData] = useState(row);

  const handleSearch = (e: any) => {
    e.preventDefault();
    const filteredProducts = row.filter(
      (product) =>
        product.produto.toLowerCase().includes(search.toLowerCase()) ||
        product.descricao.toLowerCase().includes(search.toLowerCase()) ||
        product.id.toString().includes(search)
    );
    console.log(filteredProducts);
    setData(filteredProducts);
  };
  return (
    <div className="px-8 pt-6">
      <div className="flex mt-14 flex-col gap-2 md:flex-row items-center justify-between">
        <div className="flex flex-row w-full sm:w-max items-center justify-between">
          <h1 className="xl:text-2xl font-sans font-bold">Produtos</h1>
          <EllipsisVertical className="w-4 h-4 sm:hidden md:hidden lg:hidden xl:hidden" />
        </div>

        <div className="flex flex-row  w-full  sm:w-max flex-wrap gap-2 md:p-0 justify-center">
          <form className="flex flex-row gap-2">
            <Input
              type="text"
              placeholder="Produto"
              className="w-64"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              variant="ghost"
              className="w-min h-min p-2"
              type="submit"
              onClick={(e) => handleSearch(e)}
            >
              <Search className="w-6 h-6" />
            </Button>
          </form>
          <Button variant="default" className="hidden sm:flex">
            Cadastrar
          </Button>
        </div>
      </div>
      <div className="pt-6">
        <div>
          {data.map((product) => {
            return (
              <Card className="sm:hidden my-2" key={product.id}>
                <CardHeader className="flex flex-row justify-between  items-center">
                  <CardTitle>{product.produto}</CardTitle>
                  <CardTitle>R$ {product.preco}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row justify-between">
                  <p>Id: {product.id}</p>
                  <p>Estoque: {product.quantidade}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="overflow-x-auto h-[calc(100vh-160px)]">
          <Table2 itens={data} className="w-full hidden sm:table">
            <ColunmTable
              name="Id"
              column="id"
              className=" w-20 text-center border p-2"
            />

            <ColunmTable
              name="Produto"
              column="produto"
              className=" w-72 text-start p-2 border"
            />

            <ColunmTable
              name="Descricao"
              column="descricao"
              className=" border p-2 w-96"
            />
            <ColunmTable
              name="Quantidade"
              column="quantidade"
              className="w-20 items-center border p-2"
            />
            <ColunmTable
              name="Preco"
              column="preco"
              className="border p-2 w-24"
            />
          </Table2>
        </div>
      </div>
    </div>
  );
}
