/*
 * © 2025 Orbiveda. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

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

export default function AppSidebar() {
  const pathname = usePathname()

  return (
      <div className="flex flex-col h-full p-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-8 pl-3">
          <Image src="/img/orbiveda-logo.png" alt="Orbiveda Logo" width={160} height={36} data-ai-hint="logo" />
        </Link>
        <nav>
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
        </nav>
      </div>
  );
}
