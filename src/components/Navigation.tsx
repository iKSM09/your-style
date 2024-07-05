"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronDown,
  CircleUser,
  Heart,
  LogIn,
  Menu,
  Package2,
  Search,
  Settings,
  Settings2,
  ShoppingCart,
} from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeSwitcher from "./ThemeSwitcher";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";

type NavigationProps = {
  loggedIn: boolean;
};

const navLinks = [
  { title: "Create Account", href: "#", target: "customer", type: "auth" },
  { title: "Login", href: "#", target: "customer", type: "auth" },
  { title: "Men", href: "/store/men", target: "customer", type: "products" },
  {
    title: "Women",
    href: "/store/women",
    target: "customer",
    type: "products",
  },
  { title: "Kids", href: "/store/kids", target: "customer", type: "products" },
  { title: "Explore", href: "/explore", target: "customer", type: "products" },
  { title: "Orders", href: "#", target: "customer" },
  { title: "Wishlist", href: "#", target: "customer" },
  { title: "Seller Register", href: "#", target: "vendor", type: "auth" },
  { title: "Dashboard", href: "#", target: "vendor" },
];

const Logo = () => {
  return (
    <Link href="/" className="flex gap-1 pl-1 text-2xl font-bold font-display">
      your <span className="text-primary">Style</span>
      <span className="sr-only">Your Style</span>
    </Link>
  );
};

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-screen pr-0">
        <ScrollArea className="w-full h-screen">
          <nav className="grid gap-6 text-lg font-medium">
            <Logo />
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {link.title}
              </Link>
            ))}

            <Separator />

            <div className="flex items-center gap-2 mb-12">
              <p className="text-muted-foreground">Selected Theme:</p>
              <ThemeSwitcher selector />
            </div>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

const TopNavigation = () => {
  return (
    <div className="justify-between hidden min-w-full px-4 py-1 lg:flex bg-secondary">
      <p className="italic font-extralight">
        This season biggest sale - Up to 60% off
      </p>
      {navLinks
        .filter((link) => link.title == "Seller Register")
        .map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden transition-colors hover:underline md:block text-muted-foreground hover:text-foreground"
          >
            {link.title}
          </Link>
        ))}
    </div>
  );
};

const Navigation = ({ loggedIn }: NavigationProps) => {
  return (
    <>
      <TopNavigation />
      <header className="sticky top-0 z-50 flex items-center h-16 gap-4 px-4 border-b bg-background md:px-6">
        <MobileNavigation />
        <nav className="flex flex-col gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Logo />
          {navLinks
            .filter(
              (link) => link.type == "products" && link.title != "Explore"
            )
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden transition-colors md:block text-muted-foreground hover:text-foreground"
              >
                {link.title}
              </Link>
            ))}
          {navLinks
            .filter((link) => link.title == "Explore")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden transition-colors lg:block text-muted-foreground hover:text-foreground"
              >
                {link.title}
              </Link>
            ))}
        </nav>
        <div className="flex items-center justify-end w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 hidden ml-auto sm:flex-initial lg:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <div className="flex gap-1">
            <Toggle aria-label="Toggle bold" title="Wishlist">
              <Heart size={20} />
            </Toggle>
            <Toggle
              aria-label="Toggle bold"
              title="Wishlist"
              className="hidden lg:block"
            >
              <ShoppingCart size={20} />
            </Toggle>
            <Toggle aria-label="Toggle bold" title="Settings">
              <Settings2 size={20} />
            </Toggle>
          </div>
          <div className="hidden sm:flex">
            <div className="flex items-center rounded-full bg-secondary">
              {!loggedIn && (
                <>
                  <Button variant={"ghost"}>
                    <LogIn className="w-4 h-4 mr-2" /> Login
                  </Button>
                  <Separator
                    orientation="vertical"
                    className="h-6 bg-secondary-foreground"
                  />
                </>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {loggedIn ? (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                    >
                      <CircleUser className="w-5 h-5" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full"
                    >
                      <ChevronDown className="w-5 h-5" />
                      <span className="sr-only">Settings menu</span>
                    </Button>
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {loggedIn ? (
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem>Create Account</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
