"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ThemeToggle } from "../theme-toggle";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/#home" },
    // { label: "About", href: "/#about" },
    // { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    // { label: "Experience", href: "/#experience" },
    // { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky max-w-screen top-0 left-0 right-0 z-50 py-4 bg-background/10 backdrop-blur-md border-b ">
      <div className="container w-full flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">Hazem Azzam</h1>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                // onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-105 active:scale-95"
                >
                  <MenuIcon className="w-4 h-4 transition-transform duration-200" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                side="bottom"
                className="w-56 bg-background border rounded-md shadow-lg "
              >
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link
                      href={item.href}
                      // onClick={() => scrollToSection(item.href)}
                      className="flex w-full text-foreground py-3 px-4 hover:bg-secondary focus:bg-secondary focus:outline-none transition-colors duration-200 ease-in-out"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
