
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
