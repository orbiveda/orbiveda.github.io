"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useSidebar } from '@/components/ui/sidebar';
import AppSidebar from './sidebar';

export default function Header() {
  const { toggleSidebar } = useSidebar();
  
  return (
    <header className={cn(
      "sticky top-0 left-0 w-full z-30 bg-background/80 backdrop-blur-lg border-b border-border"
    )}>
      <AppSidebar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary transition-transform hover:scale-105">
            <Image key="header-logo" src="/img/orbiveda-foot.png" alt="Orbiveda Logo" width={180} height={70} />
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
