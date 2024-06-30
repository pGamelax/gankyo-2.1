"use client";
import { Table } from "@/components/table/table";
import { ColunmTable, Table2 } from "@/components/table/table2";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { EllipsisVertical, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


export interface ProductProps {
  id: number,
	produto: string,
	descricao: string
	quantidade: number,
	preco: number,
  custo: number
}


export default function Produtos() {
  const [search, setSearch] = useState("");
  const [select, setSelected] = useState({}) as any;
  const [row, setRow] = useState([])

  const [data, setData] = useState(row);

  const handleSearch = (e: any) => {
    e.preventDefault();
    const filteredProducts = row.filter(
      (product: ProductProps) =>
        product.produto.toLowerCase().includes(search.toLowerCase()) ||
        product.descricao.toLowerCase().includes(search.toLowerCase()) ||
        product.id.toString().includes(search)
    );
    setData(filteredProducts);
  };

  useEffect(() => {
    axios
      .get("https://gankyo-server.onrender.com/product")
      .then((response) => {setRow(response.data)
        setData(response.data)
      });

      

    
  }, []);

  return (
    <div className="px-8 pt-6">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
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
            <Link href={"/produtos/cadastrar"}>Cadastrar</Link>
          </Button>
          <Button
            variant="default"
            className="hidden sm:flex"
            disabled={select.id == undefined}
          >
            <Link href={`/produtos/${select.id} `}>Atualizar</Link>
          </Button>
        </div>
      </div>
      <div className="pt-6">
        <div>
          {data.map((product: ProductProps) => {
            return (
              <Card
                className={`sm:hidden my-2 ${
                  select.id == product.id ? "bg-foreground text-background" : ""
                }`}
                key={product.id}
                onClick={() => setSelected(product)}
              >
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
        <div className="overflow-x-auto h-[calc(100vh-160 px)]">
          <Table2
            itens={data}
            select={select}
            setSelected={setSelected}
            className="w-full hidden sm:table"
          >
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
