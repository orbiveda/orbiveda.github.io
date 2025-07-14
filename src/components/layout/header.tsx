/*
 * © 2025 Orbiveda™. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import AppSidebar from './sidebar';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/innovation", label: "Innovation" },
  { href: "/blog", label: "Blog" },
  { href: "/feedback", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={cn(
      "sticky top-0 left-0 w-full z-30 bg-background/80 backdrop-blur-lg border-b border-border"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary transition-transform hover:scale-105">
              <Image src="/img/orbiveda-logo.png" alt="Orbiveda Logo" width={176} height={40} data-ai-hint="logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                  "text-base font-medium text-muted-foreground transition-colors hover:text-primary",
                  pathname === link.href && "text-primary"
                  )}
              >
                  {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 pt-8">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <AppSidebar />
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
