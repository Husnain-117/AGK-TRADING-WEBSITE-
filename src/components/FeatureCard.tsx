import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in">
      <CardContent className="p-6 flex flex-col items-start">
        <div className="mb-4 p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
          <Icon className="h-8 w-8 text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
