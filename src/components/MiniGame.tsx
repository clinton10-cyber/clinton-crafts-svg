import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MiniGameProps {
  title: string;
  icon: string;
  color: string;
  description: string;
  gameComponent: React.ReactNode;
}

export const MiniGame = ({ title, icon, color, description, gameComponent }: MiniGameProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className={`p-6 gradient-card border-border/50 hover-float transition-smooth hover-glow group cursor-pointer ${color}`}>
      <div className="text-center">
        <div className="text-4xl mb-4 group-hover:animate-pulse-glow transition-smooth">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        {!isPlaying ? (
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => setIsPlaying(true)}
            className="w-full"
          >
            Play Now
          </Button>
        ) : (
          <div className="space-y-4">
            {gameComponent}
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsPlaying(false)}
              className="w-full"
            >
              Back
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};