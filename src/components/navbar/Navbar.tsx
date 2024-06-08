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

const routes = [
  {
    name: "Dashboard",
    href: "/dashboad",
  },
  {
    name: "Central de vendas",
    href: "/central-de-vendas",
  },
  {
    name: "Central de produtos",
    href: "/central-de-produtos",
  },
  {
    name: "Financeiro",
    href: "/financeiro",
  },
];
export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="h-14 px-4 flex items-center justify-between bg-background border-b">
      <div className="flex gap-10">
        <Sheet>
          <SheetTrigger className="md:hidden"><Menu className="h-6 w-6" /></SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <span className="text-foreground font-bold text">GANKYO</span>
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
  );
}
