'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Calculator,
  FileText,
  CreditCard,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // Could redirect to success page or show confirmation
  };

  const handleSecondaryAction = () => {
    router.push('/');
  };

  const handleDemoRequest = () => {
    setFormData(prev => ({
      ...prev,
      message:
        "I'd like to schedule a demo of Acme Invoicing to see how it can help automate our billing processes.",
    }));
  };

  const handleSupportContact = () => {
    setFormData(prev => ({
      ...prev,
      message:
        'I need help with invoice automation and would like to speak with your team about our accounting needs.',
    }));
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePrimaryAction();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help with invoicing questions',
      contact: 'support@acmeinvoicing.com',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Sales Hotline',
      description: 'Speak with our billing experts',
      contact: '+1 (555) 234-5678',
      action: 'Call Sales',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant help with your account',
      contact: 'Available 9 AM - 6 PM EST',
      action: 'Start Chat',
    },
  ];

  const offices = [
    {
      city: 'New York HQ',
      address: '450 Financial District, Suite 2100',
      timezone: 'EST (UTC-5)',
    },
    {
      city: 'Austin Office',
      address: '789 Tech Ridge Blvd, Floor 12',
      timezone: 'CST (UTC-6)',
    },
    {
      city: 'Toronto Branch',
      address: '321 Business Center, Unit 800',
      timezone: 'EST (UTC-5)',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Calculator className="size-3 mr-2" />
            Contact Acme Invoicing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Automate Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Invoicing Process?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join 15,000+ businesses already using Acme Invoicing. Get personalized help setting up
            your automated billing system and start saving time today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Get Started with Acme Invoicing
              </CardTitle>
              <CardDescription>
                Tell us about your invoicing needs and we'll help you choose the perfect plan. Our
                team responds within 2 hours during business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@yourcompany.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your Business Name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    How can we help with your invoicing? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your current invoicing challenges, monthly invoice volume, and what features interest you most..."
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleDemoRequest}
                    className="flex-1"
                  >
                    <FileText className="mr-2 size-4" />
                    Request Demo
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSupportContact}
                    className="flex-1"
                  >
                    <CreditCard className="mr-2 size-4" />
                    Billing Help
                  </Button>
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Send Message & Get Free Consultation
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Talk to Our Invoicing Experts
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Acme Invoicing Locations
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    24/7 priority support for Business & Enterprise plans
                  </p>
                </div>
                <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent font-medium">
                    Average response time: 2 hours • 98% customer satisfaction
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
