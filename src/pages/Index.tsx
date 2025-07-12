
import { Button } from "@/components/ui/button";
import { Lock, ShoppingBag, Mail } from "lucide-react";
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Button 
            onClick={() => navigate("/shopify-setup")}
            variant="default"
            className="gap-2 w-full sm:w-auto"
          >
            <ShoppingBag className="w-4 h-4" />
            Shopify Setup
          </Button>
          <Button 
            onClick={() => navigate("/newsletter-guide")}
            variant="secondary"
            className="gap-2 w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            Newsletter Guide
          </Button>
          <Button 
            onClick={handleMembersOnly}
            variant="outline"
            className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors w-full sm:w-auto"
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
