"use client";
import React, { ReactNode } from "react";

import ProductCard from "./ProductCard";

type ProductListProps = {
  title: string;
  children?: ReactNode;
};

const ProductListSection = ({ title, children }: ProductListProps) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{title}</h2>

      <div className="grid items-end gap-4 my-6 grid-cols-productList">
        {children}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductListSection;
