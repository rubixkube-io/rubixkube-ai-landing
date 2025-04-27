import { MessageSquare, Zap, Users, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Conversational Control",
    description: "Manage clusters, apps, and environments using natural language across Slack, Terminal, or the Web.",
    icon: MessageSquare,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Smart Agent Operations",
    description: "RubixKube's AI agents handle the heavy lifting like incident detection, remediation and RCAs while you focus on what matters.",
    icon: Zap,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Evolving Memory",
    description: "Our AI learns from every deployment, incident, and change, getting smarter over time, by constantly updating its knowledge context.",
    icon: Users,
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Agent Mesh Network",
    description: "RubixKube's proprietary agent mesh dynamically coordinates specialized AI agents across your infrastructure, forming a network of intelligent agents.",
    icon: Cloud,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Key Features
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-lg">
          The future of operations, built with &nbsp;
          <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
             Agentic Intelligence
          </span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardHeader className={`${feature.bgColor} rounded-t-lg transition-colors group-hover:bg-primary/5 flex flex-col items-center`}>
                <feature.icon className={`h-12 w-12 ${feature.iconColor} mb-4 transition-transform group-hover:scale-110`} />
                <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground whitespace-pre-line text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
