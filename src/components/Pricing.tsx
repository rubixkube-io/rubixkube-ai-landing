import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free (Dev)",
    price: "0",
    description: "Perfect for indie developers",
    features: [
      "100 prompt actions/month",
      "1 environment",
      "CLI/Web UI access",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "25",
    description: "For growing teams with advanced needs",
    features: [
      "1000+ prompt actions",
      "Multi-env support (dev + stage)",
      "Slack integration",
      "RCA docs",
      "Reusable prompt workflows",
    ],
  },
  {
    name: "Team",
    price: "99",
    description: "Ideal for platform/SRE teams",
    features: [
      "Multi-user, multi-cluster operations",
      "Access control",
      "RCA reports",
      "Daily insights",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For high-scale organizations",
    features: [
      "On-prem agent hosting",
      "SOC2/ISO compliance",
      "RBAC, SCIM, SSO",
      "24/7 support",
      "Audit-ready operations",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${plan.name === 'Pro' ? 'border-4 border-primary scale-105 z-10' : ''}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">
                  {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                </span>
                {plan.price !== "Custom" && <span className="text-muted-foreground">/mo/user</span>}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
