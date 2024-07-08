"use client";

import Link from "next/link";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Container from "@/components/Container";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const ProductPage = ({ params }: ProductPageProps) => {
  return (
    <div className="mt-6 mb-20">
      <Container>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/store/men">Men</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/store/men?categories=ethinic-wear">
                  Ethnic Wear
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/store/men?categories=ethinic-wear&subcategory=kurta-sets">
                  Kurta Sets
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-2xl font-bold mt-3">
          KALKI FASHION Black Pathani Suit In Cotton With & Thread Embroidered
          (Set of 2)
        </h1>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 my-2">
            <Avatar className="size-8">
              <AvatarImage src="#" />
              <AvatarFallback className="text-xs">FP</AvatarFallback>
            </Avatar>
            <small className="text-accent-foreground">products@fake.com</small>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="bg-muted py-2 px-3.5 rounded-full text-muted-foreground flex gap-1.5 items-center">
                  <Star size={16} />
                  <small>3.7</small>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>6363 Ratings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="mt-2">
          <AspectRatio ratio={4 / 5}>
            <Image
              src="https://images.unsplash.com/photo-1536625979259-edbae645c7c3?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Photo by Drew Beamer"
              fill
              className="object-cover rounded-md"
            />
          </AspectRatio>
        </div>

        <div className="bg-muted text-muted-foreground rounded-xl px-4 py-3 mt-3">
          <p>
            Black pathani suit in cotton with mirror and thread embroidered
            buttis and heavy placket design.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex mt-4 gap-1.5 items-center">
            <p className="text-xl font-bold">₹299</p>
            <p className="text-muted-foreground line-through">MRP ₹13,391</p>
            <small className="text-green-500">(80% off)</small>
          </div>

          <div>
            <h2 className="font-bold">SELECT SIZE:</h2>
            <div className="flex gap-2 m-2">
              <Toggle
                aria-label="Size small"
                variant="outline"
                className="size-12"
              >
                S
              </Toggle>
              <Toggle
                aria-label="Size medium"
                variant="outline"
                className="size-12"
              >
                M
              </Toggle>
              <Toggle
                aria-label="Size large"
                variant="outline"
                className="size-12"
              >
                L
              </Toggle>
              <Toggle
                aria-label="Size extra large"
                variant="outline"
                className="size-12"
              >
                XL
              </Toggle>
              <Toggle
                aria-label="Size extra extra large"
                variant="outline"
                className="size-12"
              >
                2XL
              </Toggle>
            </div>
          </div>

          <div>
            <h2 className="font-bold">SELECT COLOR:</h2>
            <div className="flex gap-2 m-2">
              <Toggle
                aria-label="Size extra extra large"
                variant="outline"
                className="rounded-full size-10 p-1 hover:border-red-500"
              >
                <span className="bg-red-500 size-6 rounded-full hover:size-7" />
              </Toggle>
              <Toggle
                aria-label="Size extra extra large"
                variant="outline"
                className="rounded-full size-10 p-1 hover:border-green-500"
              >
                <span className="bg-green-500 size-6 rounded-full hover:size-7" />
              </Toggle>
              <Toggle
                aria-label="Size extra extra large"
                variant="outline"
                className="rounded-full size-10 p-1 hover:border-blue-500"
              >
                <span className="bg-blue-500 size-6 rounded-full hover:size-7" />
              </Toggle>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-3">
          <Button className="w-1/2 gap-1">
            <ShoppingBag size={18} /> ADD TO CART
          </Button>
          <Button
            className="w-1/2 gap-1 text-muted-foreground"
            variant="outline"
          >
            <Heart size={18} /> Wishlist
          </Button>
        </div>

        <Separator className="mt-4" />

        <div className="bg-muted text-muted-foreground rounded-xl px-4 py-3 mt-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-1 font-bold">
              <Star size={14} />
              <small>
                3.7<span className="font-normal">/5</span>
              </small>
              <small>| 6363 Ratings</small>
            </div>
            <small className="font-bold">344 Reviews</small>
          </div>
          {/* <Separator className="my-3 bg-muted-foreground" />
          <div className="flex gap-0.5 items-center">
            <p className="font-bold text-lg">Your Rating:</p>
            <Star size={22} />
            <Star size={22} />
            <Star size={22} />
            <Star size={22} />
            <Star size={22} />
          </div>

          <p className="font-bold text-lg">Your Comment:</p>
          <div className="grid w-full gap-2">
            <Textarea placeholder="Type your comment here." />
            <Button>Submit comment</Button>
          </div> */}
        </div>

        <Separator className="my-3" />

        <h2 className="text-xl font-bold">Posts by users</h2>
      </Container>
    </div>
  );
};

export default ProductPage;
