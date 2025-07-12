
import { Button } from "@/components/ui/button";
import { Lock, ShoppingBag, Mail, Star, Globe, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const navigate = useNavigate();

  const handleMembersOnly = () => {
    navigate("/members");
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      
      {/* Quick Access Buttons */}
      <div className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Button 
              onClick={() => navigate("/shopify-setup")}
              variant="outline"
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Shopify Setup
            </Button>
            <Button 
              onClick={() => navigate("/newsletter-guide")}
              variant="outline"
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              Newsletter Guide
            </Button>
            <Button 
              onClick={() => navigate("/artist-blueprint")}
              variant="outline"
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Star className="w-4 h-4" />
              Artist Blueprint
            </Button>
            <Button 
              onClick={() => navigate("/artist-website")}
              variant="outline"
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              Artist Website
            </Button>
            <Button 
              onClick={() => navigate("/artist-epk")}
              variant="outline"
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <FileText className="w-4 h-4" />
              Artist EPK
            </Button>
          </div>
        </div>
      </div>
      
      {/* Exclusive Access Section */}
      <div className="py-12 px-4 text-center bg-muted/20">
        <div className="max-w-2xl mx-auto">
          <div className="border-t pt-8">
            <h3 className="text-xl font-semibold mb-4">Exclusive Access</h3>
            <Button 
              onClick={handleMembersOnly}
              variant="outline"
              className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Lock className="w-4 h-4" />
              Members Only
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
