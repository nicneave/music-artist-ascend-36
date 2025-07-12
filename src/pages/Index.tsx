
import { Button } from "@/components/ui/button";
import { Lock, ShoppingBag, Mail, Star } from "lucide-react";
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
      
      {/* Navigation Buttons */}
      <div className="py-8 px-4 text-center bg-muted/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center max-w-4xl mx-auto">
          <Button 
            onClick={() => navigate("/shopify-setup")}
            variant="default"
            className="gap-2 w-full"
          >
            <ShoppingBag className="w-4 h-4" />
            Shopify Setup
          </Button>
          <Button 
            onClick={() => navigate("/newsletter-guide")}
            variant="secondary"
            className="gap-2 w-full"
          >
            <Mail className="w-4 h-4" />
            Newsletter Guide
          </Button>
          <Button 
            onClick={() => navigate("/artist-blueprint")}
            variant="secondary"
            className="gap-2 w-full"
          >
            <Star className="w-4 h-4" />
            Artist Blueprint
          </Button>
          <Button 
            onClick={handleMembersOnly}
            variant="outline"
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors w-full"
          >
            <Lock className="w-4 h-4" />
            Members Only
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
