'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  FileText,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleCTA = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleNewsletterSignup = () => {
    // Simulate newsletter signup
    alert('Thank you for subscribing to Acme Invoicing updates!');
  };

  const footerSections = [
    {
      title: 'Invoice Solutions',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Invoice Templates', href: '/templates' },
        { name: 'Payment Processing', href: '/payments' },
        { name: 'API Integration', href: '/api' },
        { name: 'Developer Docs', href: '/docs' },
      ],
    },
    {
      title: 'Business',
      links: [
        { name: 'About Acme', href: '#about' },
        { name: 'Invoice Blog', href: '/blog' },
        { name: 'Join Our Team', href: '/careers' },
        { name: 'Press Kit', href: '/press' },
        { name: 'Partner Program', href: '/partners' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Support Hub',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'User Community', href: '/community' },
        { name: 'Invoice Tutorials', href: '/tutorials' },
        { name: 'Training Webinars', href: '/webinars' },
        { name: 'Success Stories', href: '/case-studies' },
        { name: 'System Status', href: '/status' },
      ],
    },
    {
      title: 'Compliance',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Data Security', href: '/security' },
        { name: 'Tax Compliance', href: '/compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/acmeinvoicing' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/acmeinvoicing' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/acmeinvoicing' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/acmeinvoicing' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/acmeinvoicing' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <FileText className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Acme Invoicing</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Streamline your billing process with professional invoicing software trusted by over
                50,000 businesses worldwide. Create, send, and track invoices with ease while
                getting paid faster.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">billing@acmeinvoicing.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (800) INVOICE</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">456 Finance Plaza, Business District</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Invoice Insights Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get invoicing tips, tax updates, and business insights. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Acme Invoicing. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-primary fill-current" /> for businesses
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Settings
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
