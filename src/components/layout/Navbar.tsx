"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ModeToggle } from "../ui/mode-toggle";
import useScrollToSection from "@/hooks/useScroll";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const { scrollToSection } = useScrollToSection();
  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky max-w-screen top-0 left-0 right-0 z-50 py-4 bg-background/10 backdrop-blur-md border-b ">
      <div className="container w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold">Hazem Azzam</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MenuIcon className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                side="bottom"
                className="bg-background border rounded-md"
              >
                {navItems.map((item, index) => (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground w-[50vw] py-5 hover:bg-secondary"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
