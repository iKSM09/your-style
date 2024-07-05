"use client";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductListSection from "@/components/ProductListSection";

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

      <ProductListSection title="Best Selling"></ProductListSection>
    </div>
  );
}
