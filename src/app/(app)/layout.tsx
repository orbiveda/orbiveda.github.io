import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { PageTransition } from "@/components/layout/page-transition"
import ScrollToTop from "@/components/ui/scroll-to-top"
import AppSidebar from "@/components/layout/sidebar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}
