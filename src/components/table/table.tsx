"use client";

import { useEffect, useState } from "react";
import naturalSort from "natural-sort";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";

export function Table({ head, itens }: any) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [order, setOrder] = useState(null);
  const [data, setData] = useState(itens);


  const handleSort = (field: any) => {
    setOrder(field);
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);

    const _products = [...data].sort((a, b) => {
      return order === "asc"
        ? naturalSort()(a[field], b[field])
        : -naturalSort()(a[field], b[field]);
    });
    setData(_products);
  };

  useEffect(() => {
    setData(itens)
  }, [itens])

  return (
    <table className="w-full">
      <thead>
        <tr className="border bg-foreground  ">
          {head.map((item: any, index: any) => (
            <th className=" px-4" onClick={() => handleSort(item)} key={index}>
              {" "}
              <span className="flex flex-row gap-4 py-4 text-background">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {order == item && (
                  <span>
                    <ArrowUpNarrowWide
                      className={`${
                        sortOrder === "asc" ? "rotate-180" : "hidden"
                      }`}
                    />
                    <ArrowDownNarrowWide
                      className={`${
                        sortOrder === "desc" ? "rotate-180" : "hidden"
                      }`}
                    />
                  </span>
                )}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="items-center">
        {data.map((item: any, index: any) => (
          <tr onClick={() => item} key={index} className="text-center border">
            {head.map((head: any, index: any) => {
              return (
                <td
                  className={` text-start px-4 py-2
              ${head == "produto" ? " w-3/12" : ""}
              ${head == "descricao" ? " w-3/12" : ""}
              ${head == "id" ? "w-1/12" : ""}
              ${head == "preco" ? "w-1/6" : ""}
              ${head == 'quantidade' ? 'w-1/6' : ''}
             `}
                  key={index}
                >
                  {item[head]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
