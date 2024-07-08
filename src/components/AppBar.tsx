import Link from "next/link";

import {
  CirclePlus,
  CircleUser,
  House,
  Search,
  ShoppingCart,
} from "lucide-react";
import CartDrawer from "./CartDrawer";

const ICON_SIZE = 28;

const AppBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 m-3 lg:hidden">
      <div className="flex items-center justify-between max-w-xl p-4 m-auto sm:justify-around bg-secondary text-secondary-foreground rounded-xl">
        <Link href="/">
          <House size={ICON_SIZE} className="hover:text-primary" />
        </Link>
        <Link href="explore">
          <Search size={ICON_SIZE} className="hover:text-primary" />
        </Link>
        <Link href="add-post">
          <CirclePlus size={ICON_SIZE} className="hover:text-primary" />
        </Link>
        <CartDrawer>
          <ShoppingCart size={ICON_SIZE} className="hover:text-primary" />
        </CartDrawer>
        <Link href="feed">
          <CircleUser size={ICON_SIZE} className="hover:text-primary" />
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
