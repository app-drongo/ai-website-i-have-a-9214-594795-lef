'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Calculator, Building2, Rocket, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleBusinessPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for freelancers and solo entrepreneurs',
      monthlyPrice: 0,
      annualPrice: 0,
      badge: null,
      icon: Calculator,
      features: [
        'Up to 25 invoices per month',
        'Basic invoice templates',
        'Payment tracking',
        'Client management (up to 10)',
        'Email support',
        'Mobile app access',
        'Basic reporting',
      ],
      cta: 'Start Free Forever',
      popular: false,
      action: handleStarterPlan,
    },
    {
      name: 'Professional',
      description: 'Ideal for small businesses and growing teams',
      monthlyPrice: 29,
      annualPrice: 22,
      badge: 'Most Popular',
      icon: Building2,
      features: [
        'Unlimited invoices & estimates',
        'Premium invoice templates',
        'Automated payment reminders',
        'Unlimited clients & projects',
        'Expense tracking & receipts',
        'Time tracking integration',
        'Advanced reporting & analytics',
        'Priority email support',
        'Custom branding',
        'Multi-currency support',
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
      action: handleProfessionalPlan,
    },
    {
      name: 'Business',
      description: 'Advanced features for established businesses',
      monthlyPrice: 59,
      annualPrice: 44,
      badge: 'Best Value',
      icon: Rocket,
      features: [
        'Everything in Professional',
        'Team collaboration (up to 10 users)',
        'Advanced automation workflows',
        'Inventory management',
        'Purchase order creation',
        'Tax compliance tools',
        'API access & integrations',
        'Custom fields & workflows',
        'Phone & chat support',
        'Advanced user permissions',
        'White-label options',
      ],
      cta: 'Upgrade to Business',
      popular: false,
      action: handleBusinessPlan,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large organizations',
      monthlyPrice: null,
      annualPrice: null,
      badge: 'Custom',
      icon: Crown,
      features: [
        'Everything in Business',
        'Unlimited team members',
        'Advanced security & compliance',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 priority support',
        'Custom training & onboarding',
        'SLA guarantees',
        'Advanced audit trails',
        'Custom reporting dashboards',
        'Multi-entity management',
      ],
      cta: 'Contact Sales Team',
      popular: false,
      action: handleEnterprisePlan,
    },
  ];

  const calculateSavings = (monthly: number) => {
    if (!monthly) return 0;
    const annualTotal = monthly * 12;
    const discountedAnnual = monthly * 0.75 * 12;
    return Math.round(annualTotal - discountedAnnual);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            <Zap className="size-3 mr-2" />
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Automate Your Invoicing,
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan to streamline your invoicing and accounting processes. Start
            free, upgrade anytime, and watch your business grow.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                !isAnnual
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2',
                isAnnual
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const savings = isAnnual && plan.monthlyPrice ? calculateSavings(plan.monthlyPrice) : 0;

            return (
              <Card
                key={index}
                className={cn(
                  'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                  plan.popular
                    ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105 bg-gradient-to-br from-primary/5 via-background to-accent/5'
                    : 'border-border/50 hover:border-primary/20'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="size-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="relative text-center pb-6">
                  {plan.badge && !plan.popular && (
                    <Badge
                      variant="outline"
                      className="mb-4 mx-auto w-fit bg-accent/10 text-accent border-accent/20"
                    >
                      {plan.badge}
                    </Badge>
                  )}

                  <div className="size-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>

                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-sm mb-6 min-h-[40px]">
                    {plan.description}
                  </CardDescription>

                  <div className="flex flex-col items-center gap-2">
                    {currentPrice !== null ? (
                      <>
                        <div className="flex items-end justify-center gap-1">
                          <span className="text-3xl font-bold">${currentPrice}</span>
                          <span className="text-muted-foreground mb-1">
                            /{isAnnual ? 'month' : 'month'}
                          </span>
                        </div>
                        {isAnnual && savings > 0 && (
                          <Badge variant="secondary" className="text-xs bg-accent/10 text-accent">
                            Save ${savings}/year
                          </Badge>
                        )}
                        {isAnnual && currentPrice > 0 && (
                          <p className="text-xs text-muted-foreground">
                            Billed annually (${currentPrice * 12})
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-2xl font-bold">Custom</div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="size-2.5 text-primary" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={plan.action}
                    className={cn(
                      'w-full text-sm py-5',
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : plan.name === 'Enterprise'
                          ? 'bg-accent hover:bg-accent/90'
                          : ''
                    )}
                    variant={plan.popular || plan.name === 'Enterprise' ? 'default' : 'outline'}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    {plan.cta}
                  </Button>

                  {plan.name === 'Professional' && (
                    <p className="text-center text-xs text-muted-foreground">
                      14-day free trial • No credit card required
                    </p>
                  )}

                  {plan.name === 'Starter' && (
                    <p className="text-center text-xs text-muted-foreground">
                      No credit card required • Upgrade anytime
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-card border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We work with enterprises and growing businesses to create tailored invoicing and
              accounting automation solutions. Get dedicated support, custom integrations, and
              enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleScheduleDemo}
                size="lg"
                className="bg-accent hover:bg-accent/90"
              >
                Schedule a Demo
              </Button>
              <Button variant="outline" size="lg">
                View All Features
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <Check className="size-4 text-primary" />
              Free migration support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
