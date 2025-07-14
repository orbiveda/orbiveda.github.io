"use client"

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar"
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

const navLinks = [
  { href: "/about", label: "About Us", icon: Info },
  { href: "/products", label: "Products", icon: Users },
  { href: "/innovation", label: "Innovation", icon: Lightbulb },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/feedback", label: "Contact", icon: MessageSquare },
]

export default function AppSidebar() {
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()

  return (
    <Sidebar>
      <SidebarHeader>
        {/* You could add a logo or title here if needed */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/"}
              onClick={() => setOpenMobile(false)}
            >
              <Link href="/">
                <Home />
                Home
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(link.href)}
                  onClick={() => setOpenMobile(false)}
                >
                  <Link href={link.href}>
                    <Icon />
                    {link.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
