import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link = "/services" }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border bg-card h-full flex flex-col">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="mb-4 p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors w-fit">
          <Icon className="h-10 w-10 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <Button asChild variant="link" className="text-secondary p-0 h-auto justify-start">
          <Link to={link}>Learn More →</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
