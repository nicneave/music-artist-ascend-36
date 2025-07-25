
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Music, TrendingUp, Users, Target, Award, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import spotifyGrowth from "@/assets/spotify-growth.jpg";
import instagramGrowth from "@/assets/instagram-growth.jpg";
import youtubeGrowth from "@/assets/youtube-growth.jpg";

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
            
            <TabsContent value="about" className="space-y-20">
              {/* Problem Section */}
              <section className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">The Music Industry Changed.</h2>
                <p className="text-xl text-muted-foreground mb-4">Most artists are still using outdated strategies.</p>
                <p className="text-lg text-muted-foreground">While labels focus on quick wins, independent artists need real, sustainable growth.</p>
              </section>

              {/* What We Do Section */}
              <section className="bg-muted/30 py-16 px-8 rounded-2xl">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Label Ready Builds Careers, Not Just Campaigns</h2>
                  <p className="text-lg text-muted-foreground mb-8">We help independent artists grow real fanbases and build profitable careers.</p>
                  <p className="text-lg text-muted-foreground">Launch like a label would — without needing one.</p>
                </div>
              </section>

              {/* Results Section */}
              <section className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results for Real Artists</h2>
                  <p className="text-lg text-muted-foreground">Here's what our artists achieve</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-card rounded-lg p-6 border">
                    <img src={spotifyGrowth} alt="Spotify growth from 1K to 50K monthly listeners" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-2">1K → 50K Monthly Listeners</h3>
                    <p className="text-muted-foreground">Spotify growth in 6 months</p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6 border">
                    <img src={instagramGrowth} alt="Instagram growth from 2K to 75K followers" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-2">2K → 75K Followers</h3>
                    <p className="text-muted-foreground">Instagram organic growth</p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6 border">
                    <img src={youtubeGrowth} alt="YouTube growth from 500 to 25K subscribers" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-2">500 → 25K Subscribers</h3>
                    <p className="text-muted-foreground">YouTube channel growth</p>
                  </div>
                </div>
              </section>

              {/* How We Help Section */}
              <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Transform Music Careers</h2>
                  <p className="text-lg text-muted-foreground">Every stage, every goal, every artist</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Music className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Turn Music Into Brands</h3>
                      <p className="text-muted-foreground">Strategic positioning that makes you unforgettable</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Build Real Fanbases</h3>
                      <p className="text-muted-foreground">Genuine connections that last beyond one song</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Scale Your Revenue</h3>
                      <p className="text-muted-foreground">Multiple income streams beyond streaming</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Launch Like Labels</h3>
                      <p className="text-muted-foreground">Professional campaigns without the overhead</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us Section */}
              <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16 px-8 rounded-2xl">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Artists Choose Label Ready</h2>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">No Fluff. No Scams.</h3>
                      <p className="text-muted-foreground">Real results for real artists</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Built by Experts</h3>
                      <p className="text-muted-foreground">Engineers, marketers, and producers who work in music</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">You Own Everything</h3>
                      <p className="text-muted-foreground">Transparent pricing and low overhead</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action Section */}
              <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Go Label Ready?</h2>
                <p className="text-lg text-muted-foreground mb-8">Join hundreds of artists building sustainable music careers</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2" onClick={() => navigate('/services')}>
                    View Our Services <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Get Free Consultation
                  </Button>
                </div>
              </section>
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
      
      <div id="contact">
        <ContactSection />
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
