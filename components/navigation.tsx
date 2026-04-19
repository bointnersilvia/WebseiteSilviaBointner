"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Über mich", href: "/about" },
  { name: "Angebote", href: "/services" },
  { name: "Kontakt", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/1.1._logo_zu_startseite_(1).png"
              alt="Silvia Bointner"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold">Silvia Bointner</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full p-0">
            <div className="flex flex-col h-full bg-background">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                    <Image
                      src="/1.1._logo_zu_startseite_(1).png"
                      alt="Silvia Bointner"
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                    />
                    <span className="font-bold">Silvia Bointner</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <nav className="flex-1 p-4">
                <ul className="space-y-4">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block py-4 text-lg font-medium transition-colors hover:text-primary text-center hover-scale",
                          pathname === item.href
                            ? "text-primary"
                            : "text-foreground/60"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}