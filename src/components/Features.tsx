import { useState } from "react";
import { MessageSquare, Zap, Users, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const features = [
  {
    title: "Conversational Control",
    description:
      "Manage clusters, apps, and environments using natural language across Slack, Terminal, or the Web.",
    icon: MessageSquare,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Smart Agent Operations",
    description:
      "RubixKube's AI agents handle the heavy lifting like incident detection, remediation and RCAs while you focus on what matters.",
    icon: Zap,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "Evolving Memory",
    description:
      "Our AI learns from every deployment, incident, and change, getting smarter over time, by constantly updating its knowledge context.",
    icon: Users,
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Agent Mesh Network",
    description:
      "RubixKube's proprietary agent mesh dynamically coordinates specialized AI agents across your infrastructure, forming a network of intelligent agents.",
    icon: Cloud,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
];

const Features = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Features</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-lg">
          The future of operations, built with{" "}
          <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Agentic Intelligence
          </span>.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

        {/* Learn More Button */}
        <div className="flex justify-center">
  <Link to="/product-details">
    <Button className="px-6 py-3 text-white bg-gradient-to-r from-primary to-accent rounded-full hover:scale-105 transition-all duration-300">
      Learn More
    </Button>
  </Link>
</div>


        {/* Dialog Modal */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>About the Product</DialogTitle>
              <DialogDescription className="text-gray-700 mt-4">
                RubixKube is an AI-native SRE automation platform that brings together agentic intelligence, automation, and conversational interfaces to streamline Kubernetes infrastructure management.
                <ul className="list-disc mt-4 space-y-2 pl-5 text-left text-gray-600">
                  <li>Fully autonomous diagnostics and remediation capabilities</li>
                  <li>AI-powered memory that evolves with system events</li>
                  <li>Smart agent mesh for distributed infrastructure intelligence</li>
                  <li>Easy to use across CLI, Web, and ChatOps</li>
                </ul>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Features;
