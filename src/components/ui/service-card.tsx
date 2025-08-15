import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="p-8 gradient-card border-border/50 hover-float transition-smooth hover-glow group cursor-pointer">
      <div className="text-accent mb-6 group-hover:animate-pulse-glow transition-smooth">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
};