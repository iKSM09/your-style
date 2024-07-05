import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default ProductCard;
