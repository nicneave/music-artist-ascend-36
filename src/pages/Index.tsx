
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
      
      {/* Other Resources Section */}
      <div className="py-12 px-4 text-center bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Other Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mb-8">
            <Button 
              onClick={() => {
                navigate("/shopify-setup");
                window.scrollTo(0, 0);
              }}
              variant="default"
              className="gap-2 w-full"
            >
              <ShoppingBag className="w-4 h-4" />
              Shopify Setup
            </Button>
            <Button 
              onClick={() => {
                navigate("/newsletter-guide");
                window.scrollTo(0, 0);
              }}
              variant="secondary"
              className="gap-2 w-full"
            >
              <Mail className="w-4 h-4" />
              Newsletter Guide
            </Button>
            <Button 
              onClick={() => {
                navigate("/artist-blueprint");
                window.scrollTo(0, 0);
              }}
              variant="secondary"
              className="gap-2 w-full"
            >
              <Star className="w-4 h-4" />
              Artist Blueprint
            </Button>
          </div>
          
          {/* Members Only Section */}
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
