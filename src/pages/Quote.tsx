import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, ChevronLeft } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const Quote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    services: [] as string[],
    projectName: "",
    projectDescription: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const services = [
    "Precision Manufacturing",
    "Quality Control & Assurance",
    "Technical Consulting",
    "Supply Chain Management",
    "Process Optimization",
    "Custom Solutions"
  ];

  const nextStep = () => setStep(Math.min(step + 1, 4));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={aboutTeam}
            alt="Request a project quote from AGK"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            Project Consultation
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Request a Quote
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Share your project details and our engineering team will prepare a tailored proposal for your boiler and thermal systems.
          </p>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="py-16 bg-gradient-to-b from-[#f5f7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      num <= step
                        ? "bg-[#1f5a45] text-white shadow-md"
                        : "bg-[#e5e7eb] text-[#6b7280]"
                    }`}
                  >
                    {num}
                  </div>
                  {num < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded-full transition-colors ${
                        num < step ? "bg-[#b8892e]" : "bg-[#e5e7eb]"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Services</span>
              <span>Project Details</span>
              <span>Contact Info</span>
              <span>Review</span>
            </div>
          </div>

          <Card className="border-2 border-[#e1e6e2] rounded-2xl shadow-lg bg-white">
            <CardContent className="p-8 md:p-10">
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-[#123326] mb-2">Select Services</h2>
                  <p className="text-muted-foreground mb-6">Choose the services you're interested in</p>
                  <div className="space-y-4 mb-8">
                    {services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center space-x-3 p-4 border border-[#e1e6e2] rounded-xl hover:border-[#1f5a45]/40 hover:bg-[#f5f7f6] transition-colors cursor-pointer shadow-sm"
                        onClick={() => toggleService(service)}
                      >
                        <Checkbox 
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => toggleService(service)}
                        />
                        <label className="flex-1 cursor-pointer font-medium text-foreground">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-[#123326] mb-2">Project Details</h2>
                  <p className="text-muted-foreground mb-6">Tell us about your project</p>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Name
                      </label>
                      <Input 
                        placeholder="Enter project name"
                        value={formData.projectName}
                        onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Description
                      </label>
                      <Textarea 
                        placeholder="Describe your project requirements..."
                        rows={6}
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Timeline
                        </label>
                        <Select 
                          value={formData.timeline}
                          onValueChange={(value) => setFormData({...formData, timeline: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-3">1-3 months</SelectItem>
                            <SelectItem value="3-6">3-6 months</SelectItem>
                            <SelectItem value="6+">6+ months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Budget Range
                        </label>
                        <Select 
                          value={formData.budget}
                          onValueChange={(value) => setFormData({...formData, budget: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<10k">Less than $10,000</SelectItem>
                            <SelectItem value="10-50k">$10,000 - $50,000</SelectItem>
                            <SelectItem value="50-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k+">$100,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {step === 3 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-[#123326] mb-2">Contact Information</h2>
                  <p className="text-muted-foreground mb-6">How can we reach you?</p>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input 
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input 
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <Input 
                          type="tel"
                          placeholder="+1 (234) 567-8900"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input 
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-[#123326] mb-2">Review Your Request</h2>
                  <p className="text-muted-foreground mb-6">Please review your information before submitting</p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Selected Services</h3>
                      <div className="flex flex-wrap gap-2">
                        {formData.services.map((service) => (
                          <span key={service} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Project Details</h3>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Project Name:</dt>
                          <dd className="font-medium text-foreground">{formData.projectName || 'Not specified'}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Timeline:</dt>
                          <dd className="font-medium text-foreground">{formData.timeline || 'Not specified'}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Budget:</dt>
                          <dd className="font-medium text-foreground">{formData.budget || 'Not specified'}</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Name:</dt>
                          <dd className="font-medium text-foreground">{formData.name || 'Not specified'}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Email:</dt>
                          <dd className="font-medium text-foreground">{formData.email || 'Not specified'}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Phone:</dt>
                          <dd className="font-medium text-foreground">{formData.phone || 'Not specified'}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Company:</dt>
                          <dd className="font-medium text-foreground">{formData.company || 'Not specified'}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-[#e5e7eb]">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 1}
                  className="gap-2 border-[#1f5a45] text-[#1f5a45] hover:bg-[#1f5a45]/5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                  Previous
                </Button>
                {step < 4 ? (
                  <Button
                    onClick={nextStep}
                    className="gap-2 bg-[#1f5a45] hover:bg-[#184635] text-white shadow-md px-6"
                  >
                    Next
                    <ChevronRight size={16} />
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="bg-[#b8892e] hover:bg-[#a57926] text-white shadow-lg px-8"
                  >
                    Submit Request
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Quote;
