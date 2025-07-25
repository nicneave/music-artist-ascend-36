
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, ShoppingBag, Mail, Star, Globe, FileText, Users, Target, TrendingUp } from "lucide-react";
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
      
      {/* Main Content Tabs */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-16">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="services">Services & Packages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="space-y-16">
              {/* About Section */}
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">About Label Ready</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Label Ready is a modern music marketing and artist development company built for the digital age. 
                  We help independent artists grow real fanbases, build profitable careers, and launch like a label would — without needing one.
                </p>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  We work with artists at every stage, offering both DIY education and done-for-you services to accelerate your growth. 
                  Whether you're just getting started or scaling up, our mission is to turn your music into a brand, your followers into superfans, 
                  and your hobby into a business.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No Fluff. No Scams.</h3>
                    <p className="text-muted-foreground">Real results for real artists.</p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Built by Experts</h3>
                    <p className="text-muted-foreground">Engineers, marketers, and producers who actually work in music.</p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">You Own Everything</h3>
                    <p className="text-muted-foreground">Transparent pricing and low overhead. We just help you build faster.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="space-y-16">
              <ServicesSection />
              <div id="pricing-section">
                <PricingSection />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
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
