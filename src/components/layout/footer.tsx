import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-foreground/60 text-sm text-center sm:text-left">
            &copy; 2025 Orbiveda. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://instagram.com/orbiveda" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/60 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
