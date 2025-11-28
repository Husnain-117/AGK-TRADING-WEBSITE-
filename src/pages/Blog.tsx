import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={aboutTeam}
            alt="AGK Blog & Insights"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            Industry Insights & Updates
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Blog & Resources
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Thought leadership, best practices, and practical guidance from the AGK team to help you run safer, more efficient plants.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden rounded-2xl border-2 border-[#e1e6e2] shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto bg-[#f5f7f6]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123326]/60 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#b8892e] text-white font-semibold px-3 py-1 rounded-full">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                <Badge className="w-fit mb-4 bg-[#1f5a45]/10 text-[#1f5a45] font-semibold tracking-wide uppercase">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
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
                <Button size="lg" className="w-fit bg-[#1f5a45] hover:bg-[#184635] text-white shadow-md px-6">
                  Read More
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-b from-[#f5f7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-2 block">
              Latest Articles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326]">
              Insights from Our Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group bg-white rounded-2xl border-2 border-[#e1e6e2] shadow-sm hover:shadow-xl hover:border-[#1f5a45]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1f5a45]/10 to-[#b8892e]/15">
                  <Badge className="absolute top-3 left-3 bg-white/90 text-[#1f5a45] border border-[#1f5a45]/20 font-semibold">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#123326] mb-3 group-hover:text-[#1f5a45] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
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
                  <Button
                    variant="link"
                    className="p-0 h-auto justify-start text-[#b8892e] hover:text-[#a57926] font-semibold"
                  >
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
          <Card className="relative overflow-hidden bg-gradient-to-r from-[#1f5a45] via-[#2d7a5e] to-[#1f5a45] text-white border-0 rounded-2xl shadow-xl">
            <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
              <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full border-2 border-white/40" />
              <div className="absolute right-10 bottom-0 w-32 h-32 bg-[#b8892e]/40 rounded-full blur-xl" />
            </div>
            <CardContent className="relative p-10 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Subscribe for the latest boiler room insights, efficiency tips, and project highlights from AGK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-[#123326] focus:outline-none focus:ring-2 focus:ring-[#b8892e]"
                />
                <Button
                  size="lg"
                  className="bg-white text-[#1f5a45] hover:bg-white/90 font-semibold shadow-md px-6"
                >
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
