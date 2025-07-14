"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AppSidebar from './sidebar';

export default function Header() {
  return (
    <header className={cn(
      "sticky top-0 left-0 w-full z-30 bg-background/80 backdrop-blur-lg border-b border-border"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="md:hidden">
             <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary transition-transform hover:scale-105">
                <Image key="header-logo" src="/img/orbiveda-foot.png" alt="Orbiveda Logo" width={150} height={60} />
            </Link>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                <AppSidebar isMobile />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
