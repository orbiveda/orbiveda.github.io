/*
 * © 2025 Orbiveda. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

"use client";

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { PageTransition } from "@/components/layout/page-transition"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
