
import { MessageSquare, Zap, Users, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Conversational Control Plane",
    description: "Manage clusters, apps, and environments with natural language — through Slack, Terminal, or Web UI. No manual configs. No complex portals.",
    icon: MessageSquare,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Agentic Infrastructure Operations",
    description: "RubixKube deploys specialized AI agents that handle deployments, debugging, scaling, RCA documentation, and continuous optimization.",
    icon: Zap,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Evolving Contextual Memory",
    description: "Our AI learns from your infrastructure events, operations, and incidents — getting smarter over time to reduce toil, cost, and failure risks.",
    icon: Users,
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Infra-Agnostic Foundation",
    description: "Built for Kubernetes today — but designed to expand across VMs, cloud services, serverless, databases, and more.",
    icon: Cloud,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Key Features
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Experience the future of infrastructure management with our powerful AI-driven platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardHeader className={`${feature.bgColor} rounded-t-lg transition-colors group-hover:bg-primary/5`}>
                <feature.icon className={`h-12 w-12 ${feature.iconColor} mb-4 transition-transform group-hover:scale-110`} />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
