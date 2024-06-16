import React, { useEffect, useState } from "react";
import naturalSort from "natural-sort";
import {
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  PencilLine,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function Table2({ children, itens, className }: any) {
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
    setData(itens);
  }, [itens]);

  return (
    <table className={className}>
      <thead>
        <tr className="">
          {React.Children.map(children, (child: any) => {
            return (
              <th
                className={child.props.className}
                onClick={() => handleSort(child.props.column)}
                key={child.props.column}
              >
                <span className={` flex flex-row gap-4 justify-between `}>
                  {child.props.name}
                </span>
              </th>
            );
          })}
          <th className="w-8 text-center border p-2">Editar</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data: any) => {
          return (
            <tr key={data.id}>
              {React.Children.map(children, (child: any, index) => {
                return (
                  <td className={child.props.className}>
                    {data[child.props.column]}
                  </td>
                );
              })}
              <td className=" items-center flex justify-center border-r border-t p-2">
                <Link href={`/produtos/${data.id}`}>
                <Button variant="link">
                  <PencilLine className="w-6 h-6 text-center " />
                </Button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export function ColunmTable(props: any) {
  return (
    <div className={props.className}>
      <h3>{props.name}</h3>
    </div>
  );
}

export default [Table2, ColunmTable];
