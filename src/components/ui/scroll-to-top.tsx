/*
 * © 2025 Orbiveda. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="default"
      size="icon"
      onClick={scrollToTop}
      aria-label="Go to top"
      className={cn(
        "fixed bottom-8 right-8 rounded-full shadow-lg transition-all duration-300 z-50",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
      )}
    >
      <ArrowUp />
    </Button>
  );
}
