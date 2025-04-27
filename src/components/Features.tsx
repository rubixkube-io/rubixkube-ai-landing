
import { Cloud, Server, Network, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Effortless GitOps Workflows",
    description: "Spin up environments and manage GitOps workflows through natural conversations.",
    icon: Cloud,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Simplified Deployment",
    description: "Deploy and manage applications without writing endless YAMLs or navigating complex UIs.",
    icon: Server,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Unified Management",
    description: "Operate across clusters, clouds, and services through a unified, AI-driven mesh.",
    icon: Network,
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "No Lock-in",
    description: "Maintain full control using your GitHub, GitOps tooling, and preferred cloud providers.",
    icon: Lock,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Transform Your Infrastructure
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Experience the future of infrastructure management with our powerful features
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
