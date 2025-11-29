import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Wrench, 
  FileText, 
  MessageSquare, 
  Users, 
  TrendingUp,
  Plus
} from "lucide-react";

const Admin = () => {
  const stats = [
    { title: "Total Products", value: "124", icon: Package, change: "+12%" },
    { title: "Active Services", value: "8", icon: Wrench, change: "+2" },
    { title: "Blog Posts", value: "47", icon: FileText, change: "+8%" },
    { title: "Quote Requests", value: "23", icon: MessageSquare, change: "+15%" },
    { title: "Total Users", value: "1,234", icon: Users, change: "+23%" },
    { title: "Revenue", value: "$45.2K", icon: TrendingUp, change: "+18%" }
  ];

  const recentQuotes = [
    { id: "Q001", company: "TechCorp Inc", service: "Manufacturing", date: "2025-01-15", status: "Pending" },
    { id: "Q002", company: "Innovate Ltd", service: "Consulting", date: "2025-01-14", status: "Approved" },
    { id: "Q003", company: "Global Industries", service: "Automation", date: "2025-01-13", status: "In Review" }
  ];

  const recentContacts = [
    { id: "C001", name: "John Doe", subject: "Product Inquiry", date: "2025-01-15", status: "Unread" },
    { id: "C002", name: "Jane Smith", subject: "Service Request", date: "2025-01-14", status: "Read" },
    { id: "C003", name: "Bob Johnson", subject: "Partnership", date: "2025-01-13", status: "Replied" }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your AGK Trading Company Private Limited website</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border hover:shadow-hover transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-secondary mt-1">{stat.change}</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="quotes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:inline-grid lg:grid-cols-4">
            <TabsTrigger value="quotes">Quote Requests</TabsTrigger>
            <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Quote Requests Tab */}
          <TabsContent value="quotes">
            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Quote Requests</CardTitle>
                <Button variant="secondary" size="sm">
                  <Plus size={16} className="mr-2" />
                  New Quote
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Company</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Service</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentQuotes.map((quote) => (
                        <tr key={quote.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 text-foreground">{quote.id}</td>
                          <td className="py-3 px-4 text-foreground">{quote.company}</td>
                          <td className="py-3 px-4 text-muted-foreground">{quote.service}</td>
                          <td className="py-3 px-4 text-muted-foreground">{quote.date}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              quote.status === 'Approved' ? 'bg-secondary/10 text-secondary' :
                              quote.status === 'Pending' ? 'bg-accent/10 text-accent' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {quote.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Messages Tab */}
          <TabsContent value="contacts">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Recent Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Subject</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentContacts.map((contact) => (
                        <tr key={contact.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 text-foreground">{contact.id}</td>
                          <td className="py-3 px-4 text-foreground">{contact.name}</td>
                          <td className="py-3 px-4 text-muted-foreground">{contact.subject}</td>
                          <td className="py-3 px-4 text-muted-foreground">{contact.date}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              contact.status === 'Replied' ? 'bg-secondary/10 text-secondary' :
                              contact.status === 'Unread' ? 'bg-accent/10 text-accent' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {contact.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Product Management</CardTitle>
                <Button variant="secondary" size="sm">
                  <Plus size={16} className="mr-2" />
                  Add Product
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Product management interface would be here. Add, edit, and delete products with ease.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Site Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/50 rounded-lg">
                    <p className="text-muted-foreground">Analytics chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Page Views</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-center justify-center bg-muted/50 rounded-lg">
                      <p className="text-muted-foreground">Page views chart</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>User Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 flex items-center justify-center bg-muted/50 rounded-lg">
                      <p className="text-muted-foreground">User activity chart</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
