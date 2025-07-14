import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { PageTransition } from "@/components/layout/page-transition"
import ScrollToTop from "@/components/ui/scroll-to-top"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
