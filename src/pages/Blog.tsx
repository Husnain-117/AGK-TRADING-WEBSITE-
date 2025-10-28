import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Industrial Automation: Trends to Watch in 2025",
    excerpt: "Discover the latest trends shaping the industrial automation landscape, from AI-powered systems to collaborative robots and smart manufacturing solutions.",
    category: "Technology",
    author: "Sarah Martinez",
    date: "January 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
  };

  const blogPosts = [
    {
      title: "5 Ways to Optimize Your Manufacturing Process",
      excerpt: "Learn practical strategies to improve efficiency, reduce waste, and boost productivity in your manufacturing operations.",
      category: "Manufacturing",
      author: "John Anderson",
      date: "January 12, 2025",
      readTime: "6 min read"
    },
    {
      title: "Quality Assurance Best Practices for B2B",
      excerpt: "Essential quality control measures every B2B manufacturer should implement to maintain high standards and customer satisfaction.",
      category: "Quality",
      author: "Emily Thompson",
      date: "January 10, 2025",
      readTime: "7 min read"
    },
    {
      title: "Supply Chain Resilience in Modern Manufacturing",
      excerpt: "Building robust supply chains that can withstand disruptions and maintain operational continuity in challenging times.",
      category: "Supply Chain",
      author: "Michael Chen",
      date: "January 8, 2025",
      readTime: "9 min read"
    },
    {
      title: "Lean Manufacturing: A Complete Guide",
      excerpt: "Comprehensive overview of lean manufacturing principles and how to implement them in your organization for maximum impact.",
      category: "Strategy",
      author: "Sarah Martinez",
      date: "January 5, 2025",
      readTime: "10 min read"
    },
    {
      title: "IoT Sensors: Transforming Factory Floors",
      excerpt: "Explore how Internet of Things sensors are revolutionizing industrial operations with real-time data and predictive analytics.",
      category: "Technology",
      author: "John Anderson",
      date: "January 3, 2025",
      readTime: "5 min read"
    },
    {
      title: "Sustainable Manufacturing Practices",
      excerpt: "Environmental responsibility meets operational excellence: implementing sustainable practices without compromising productivity.",
      category: "Sustainability",
      author: "Emily Thompson",
      date: "December 28, 2024",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog & Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry insights, best practices, and thought leadership from our experts
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 border-border">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto bg-muted">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-accent/10 text-accent hover:bg-accent/20">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Button variant="secondary" size="lg" className="w-fit">
                  Read More →
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border bg-card overflow-hidden h-full flex flex-col">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Badge className="absolute top-3 left-3 bg-accent/10 text-accent">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {post.date}
                  </div>
                  <Button variant="link" className="p-0 h-auto justify-start text-secondary">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest industry insights, trends, and updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
