import ProductListSection from "@/components/ProductListSection";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { ListFilter } from "lucide-react";

type ProductListTypes = {
  params: {
    productList: string;
  };
};

export function FilterCheckbox({ label }: { label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}

const ProductListFilters = () => {
  return (
    <Drawer>
      <DrawerTrigger
        className="bg-secondary hover:text-primary rounded-full size-16 fixed bottom-20 right-0 mx-3 my-1.5 z-20"
        title="Product's filter list"
      >
        <ListFilter size={24} className="m-auto" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
          <Separator />
        </DrawerHeader>

        <div className="p-6 py-2">
          {/* <div className="flex items-center justify-center space-x-2"> */}
          <div className="flex flex-col gap-4 space-x-2">
            <h3 className="text-md font-bold underline">Categories</h3>
            <FilterCheckbox label="Topwear" />
            <FilterCheckbox label="Bottomwear" />
            <FilterCheckbox label="Ethnic wear" />
            <FilterCheckbox label="Footwear" />
          </div>
        </div>

        <DrawerFooter className="flex flex-row">
          <Button className="w-1/2">Apply</Button>
          <DrawerClose className="w-1/2">
            <Button variant="outline" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const ProductList = ({ params }: ProductListTypes) => {
  return (
    <>
      <ProductListFilters />
      <ProductListSection
        title={`Products for ${params.productList.toUpperCase()}`}
      ></ProductListSection>
    </>
  );
};

export default ProductList;
