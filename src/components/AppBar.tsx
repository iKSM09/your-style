import {
  CirclePlus,
  CircleUser,
  House,
  Search,
  ShoppingCart,
} from "lucide-react";
import React from "react";

const ICON_SIZE = 28;

const AppBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 m-3 lg:hidden">
      <div className="flex items-center justify-between max-w-xl p-4 m-auto sm:justify-around bg-secondary text-secondary-foreground rounded-xl">
        <House size={ICON_SIZE} className="hover:text-primary" />
        <Search size={ICON_SIZE} className="hover:text-primary" />
        <CirclePlus size={ICON_SIZE} className="hover:text-primary" />
        <ShoppingCart size={ICON_SIZE} className="hover:text-primary" />
        <CircleUser size={ICON_SIZE} className="hover:text-primary" />
      </div>
    </div>
  );
};

export default AppBar;
