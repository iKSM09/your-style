"use client";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductCard = () => {
  return (
    <Card>
      <CardContent className="p-0">
        <AspectRatio ratio={2 / 3} className="rounded-lg bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1536625979259-edbae645c7c3?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Photo by Drew Beamer"
            fill
            className="object-cover rounded-md"
          />
        </AspectRatio>
      </CardContent>
      <CardFooter className="flex justify-between px-4 py-4">
        <h3 className="font-normal">Product Title</h3>
        <p>Rs. 999</p>
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  return (
    <div>
      <div className="mx-auto grid justify-center max-w-5xl grid-cols-3 gap-4 p-8">
        <div className="col-span-2 row-span-2">
          <AspectRatio
            ratio={16 / 9}
            className="rounded-2xl bg-muted"
          ></AspectRatio>
        </div>
        <AspectRatio
          ratio={16 / 9}
          className="rounded-2xl bg-muted"
        ></AspectRatio>
        <AspectRatio
          ratio={16 / 9}
          className="rounded-2xl bg-muted"
        ></AspectRatio>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold ">Best Selling</h2>

        <div className="grid items-end gap-4 my-6 grid-cols-productList">
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
    </div>
  );
}
