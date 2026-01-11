'use client';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/data/site';
import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Tại sao chọn?', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span>{siteConfig.name}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" asChild>
              <a href={siteConfig.cta.zalo} target="_blank" rel="noopener noreferrer">
                Nhắn Zalo
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t bg-background/95 backdrop-blur-lg"
        >
          <div className="container px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t flex flex-col gap-2">
              <Button size="sm" asChild className="w-full">
                <a href={siteConfig.cta.zalo} target="_blank" rel="noopener noreferrer">
                  Nhắn Zalo
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild className="w-full">
                <a href={siteConfig.cta.telegram} target="_blank" rel="noopener noreferrer">
                  Nhắn Telegram
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
