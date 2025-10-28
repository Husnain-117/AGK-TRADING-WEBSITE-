import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  price?: string;
  image?: string;
}

const ProductCard = ({ name, category, description, price, image }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border bg-card overflow-hidden h-full flex flex-col">
      <div className="relative h-48 bg-muted overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
            <span className="text-4xl font-bold text-primary/40">{name.charAt(0)}</span>
          </div>
        )}
        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
          {category}
        </Badge>
      </div>
      <CardContent className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        {price && (
          <p className="text-xl font-bold text-primary mb-4">{price}</p>
        )}
        <Button variant="default" className="w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
