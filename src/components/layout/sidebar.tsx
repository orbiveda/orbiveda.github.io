
"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Users,
  Lightbulb,
  Newspaper,
  MessageSquare,
  Info,
  Home,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/products", label: "Products", icon: Users },
  { href: "/innovation", label: "Innovation", icon: Lightbulb },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/feedback", label: "Contact", icon: MessageSquare },
]

interface AppSidebarProps {
  isMobile?: boolean;
}

export default function AppSidebar({ isMobile = false }: AppSidebarProps) {
  const pathname = usePathname()

  if (isMobile) {
    return (
       <div className="flex flex-col h-full">
         <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-8 pl-3">
            <Image key="sidebar-logo" src="/img/orbiveda-foot.png" alt="Orbiveda Logo" width={150} height={60} />
         </Link>
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md p-3 text-lg font-medium transition-colors hover:bg-muted",
                    pathname === link.href ? "bg-muted text-primary" : "text-foreground"
                  )}
                >
                  <Icon className="w-6 h-6" />
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border p-4">
       <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary transition-transform hover:scale-105 mt-4 mb-8">
            <Image key="header-logo" src="/img/orbiveda-foot.png" alt="Orbiveda Logo" width={180} height={70} />
        </Link>
       <nav className="flex flex-col gap-2">
        {navLinks.map((link) => {
            const Icon = link.icon;
            return (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-primary",
                    pathname === link.href && "text-primary bg-muted"
                    )}
                >
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                </Link>
            )
        })}
      </nav>
    </aside>
  )
}
