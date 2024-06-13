"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import Icon from "../ui/icon";

const routes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "gauge",
  },
  {
    name: "Central de vendas",
    href: "/central-de-vendas",
    icon: "badge-dollar-sign",
  },
  {
    name: "Central de produtos",
    href: "/produtos",
    icon: "shopping-basket",
  },
  {
    name: "Financeiro",
    href: "/financeiro",
    icon: "wallet",
  },
];
export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full fixed">
    <div className="h-14 px-4 relative flex items-center justify-between bg-background border-b">
      <div className="flex gap-10">
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side={"left"} className="w-64">
            <div className="border-b">
              <SheetHeader className="justify-center items-start pl-6 h-14">
                <SheetTitle>GANKYO</SheetTitle>
              </SheetHeader>
            </div>
            <div className="pt-6">
              {routes.map((item, index) => (
                <SheetClose asChild  key={index}>
                  <Link href={item.href}>
                    <Button
                      variant={"ghost"}
                      className="w-full gap-2 justify-start text-base px-8"
                    >
                      {item.name}
                    </Button>
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <span className="font-bold ">GANKYO</span>
        <nav className="hidden md:flex">
          <NavigationMenu className=" justify-start">
            <NavigationMenuList className="gap-4">
              {routes.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={` 
                        font-sans text-sm`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>

      <div className="flex row items-center">
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant={"ghost"}
          size={"icon"}
          aria-label="toggle theme"
          className="mr-6"
        >
          <Sun className="h-6 w-6 rotate-0 scale-100  transition-all dark:rotate-90 dark:scale-0 dark:hidden " />
          <Moon className="h-6 w-6 rotate-90 scale-0 hidden transition-all dark:rotate-0 dark:scale-100 dark:flex" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    </div>
  );
}
