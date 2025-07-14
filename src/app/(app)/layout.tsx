import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AppSidebar from "@/components/layout/sidebar"
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from "@/components/ui/sidebar"
import { PageTransition } from "@/components/layout/page-transition"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen bg-background">
        <AppSidebar />
        <SidebarInset>
          <Header />
          <main className="flex-grow">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
