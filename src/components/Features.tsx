
import { Cloud, Server, Network, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Effortless GitOps Workflows",
    description: "Spin up environments and manage GitOps workflows through natural conversations.",
    icon: Cloud,
  },
  {
    title: "Simplified Deployment",
    description: "Deploy and manage applications without writing endless YAMLs or navigating complex UIs.",
    icon: Server,
  },
  {
    title: "Unified Management",
    description: "Operate across clusters, clouds, and services through a unified, AI-driven mesh.",
    icon: Network,
  },
  {
    title: "No Lock-in",
    description: "Maintain full control using your GitHub, GitOps tooling, and preferred cloud providers.",
    icon: Lock,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Transform Your Infrastructure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
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

