/*
 * © 2025 Orbiveda. All Rights Reserved.
 * Unauthorized copying, distribution, or modification of this code is strictly prohibited.
 */

import { Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start col-span-1 md:col-span-2">
                 <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
                    <Image src="/img/orbiveda-logo.png" alt="Orbiveda Logo" width={180} height={70} />
                </Link>
                <p className="text-muted-foreground max-w-xs">Shaping the future with purpose by blending cutting-edge technology with timeless wisdom.</p>
            </div>
            
            <div className="md:justify-self-center">
                <h4 className="font-semibold text-lg mb-4">Company</h4>
                <nav className="flex flex-col space-y-2">
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                    <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
                    <Link href="/innovation" className="text-muted-foreground hover:text-primary transition-colors">Innovation</Link>
                    <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                    <Link href="/feedback" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
                </nav>
            </div>
            <div className="md:justify-self-center">
                <h4 className="font-semibold text-lg mb-4">Legal</h4>
                <nav className="flex flex-col space-y-2">
                     <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                     <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                </nav>
                 <h4 className="font-semibold text-lg mb-4 mt-6">Follow Us</h4>
                <div className="flex justify-center md:justify-start items-center space-x-6">
                    <a href="https://instagram.com/orbiveda" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-transform hover:scale-125">
                    <Instagram className="h-6 w-6" />
                    </a>
                    <a href="https://twitter.com/orbiveda" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-transform hover:scale-125">
                    <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-transform hover:scale-125">
                    <Linkedin className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
             <p>© 2025 Orbiveda. All Rights Reserved. Unauthorized use or reproduction is strictly prohibited.</p>
        </div>
      </div>
    </footer>
  );
}
