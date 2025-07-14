
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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/innovation", label: "Innovation" },
  { href: "/blog", label: "Blog" },
  { href: "/feedback", label: "Contact" },
]

const iconMap: { [key: string]: React.ElementType } = {
  "/": Home,
  "/about": Info,
  "/products": Users,
  "/innovation": Lightbulb,
  "/blog": Newspaper,
  "/feedback": MessageSquare,
}

interface AppSidebarProps {
  isMobile?: boolean;
}

export default function AppSidebar({ isMobile = false }: AppSidebarProps) {
  const pathname = usePathname()

  if (isMobile) {
    return (
      <ul className="flex flex-col gap-2">
        {navLinks.map((link) => {
          const Icon = iconMap[link.href];
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
    );
  }

  return (
    <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border p-4">
       <nav className="flex flex-col gap-2 mt-20">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-primary",
              pathname === link.href && "text-primary bg-muted"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
