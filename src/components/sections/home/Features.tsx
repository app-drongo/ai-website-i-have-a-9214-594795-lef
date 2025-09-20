'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calculator,
  Shield,
  Smartphone,
  Zap,
  BarChart3,
  FileText,
  CreditCard,
  Clock,
  Users,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Calculator,
      title: 'Automated Invoice Generation',
      description:
        'Create professional invoices in seconds with smart templates and automatic calculations.',
      badge: 'Automation',
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with 256-bit encryption and SOC 2 compliance.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Mobile Invoice Management',
      description:
        'Send invoices, track payments, and manage clients from anywhere with our mobile app.',
      badge: 'Mobile',
    },
    {
      icon: Zap,
      title: 'Real-Time Payment Tracking',
      description:
        'Get instant notifications when invoices are viewed, approved, or paid by clients.',
      badge: 'Real-Time',
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics Dashboard',
      description:
        'Comprehensive insights into cash flow, outstanding payments, and revenue trends.',
      badge: 'Analytics',
    },
    {
      icon: FileText,
      title: 'Smart Expense Categorization',
      description:
        'AI-powered expense tracking that automatically categorizes and organizes receipts.',
      badge: 'AI-Powered',
    },
    {
      icon: CreditCard,
      title: 'Multi-Payment Gateway',
      description: 'Accept payments via credit cards, bank transfers, PayPal, and digital wallets.',
      badge: 'Payments',
    },
    {
      icon: Clock,
      title: 'Automated Payment Reminders',
      description: 'Never chase payments again with customizable automated reminder sequences.',
      badge: 'Automation',
    },
    {
      icon: Users,
      title: 'Team Collaboration Tools',
      description:
        'Multi-user access with role-based permissions for accountants and team members.',
      badge: 'Collaboration',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            Powerful Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Business Needs to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Automate Invoicing & Accounting
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Streamline your financial operations with intelligent automation, real-time insights,
            and seamless payment processing designed for growing businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 border border-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-secondary/50">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to transform your invoicing and accounting workflow?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start 14-Day Free Trial
            </button>
            <button
              onClick={handleViewPricing}
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-all duration-200 text-foreground hover:border-primary/30"
            >
              View Pricing Plans
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Cancel anytime • 99.9% uptime guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
