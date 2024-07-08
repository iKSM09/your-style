import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

import { CircleX, ShoppingCart } from "lucide-react";

type CartDrawerProps = {
  children: ReactNode;
};

const CartDrawer = ({ children }: CartDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart />
              <DrawerTitle>Cart</DrawerTitle>
              <DrawerDescription>(1 item)</DrawerDescription>
            </div>
            <DrawerClose asChild>
              <CircleX />
            </DrawerClose>
          </DrawerHeader>

          <Separator />

          <div className="p-4 pb-2">Items added to cart.</div>

          <Separator />

          <DrawerFooter className="flex flex-row justify-between items-center">
            <p className="text-lg font-bold">₹1899</p>
            <Button>Proceed</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
