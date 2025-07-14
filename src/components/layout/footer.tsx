import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
                 <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4">
                    <Sparkles className="w-7 h-7"/>
                    Orbiveda
                </Link>
                <p className="text-muted-foreground max-w-xs">Innovation Meets Soul. Crafting the future of technology with wisdom and elegance.</p>
            </div>
            <div className="md:justify-self-center">
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <nav className="flex flex-col space-y-2">
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                    <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
                    <Link href="/feedback" className="text-muted-foreground hover:text-primary transition-colors">Feedback</Link>
                </nav>
            </div>
            <div className="md:justify-self-end">
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex justify-center md:justify-start items-center space-x-6">
                    <a href="https://instagram.com/orbiveda" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-transform hover:scale-125">
                    <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-transform hover:scale-125">
                    <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-transform hover:scale-125">
                    <Linkedin className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
             <p>&copy; {currentYear} Orbiveda. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
