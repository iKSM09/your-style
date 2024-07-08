"use client";
import React, { ReactNode } from "react";

import ProductCard from "./ProductCard";
import Container from "./Container";

type ProductListProps = {
  title: string;
  children?: ReactNode;
};

const ProductListSection = ({ title, children }: ProductListProps) => {
  return (
    <Container>
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
    </Container>
  );
};

export default ProductListSection;
