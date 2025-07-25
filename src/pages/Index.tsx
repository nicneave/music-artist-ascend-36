
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Music, TrendingUp, Users, Target, Award, Zap, CheckCircle, ArrowRight, ShoppingBag, BarChart3, DollarSign, Headphones, Instagram, Youtube, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import spotifyAnalytics from "@/assets/spotify-analytics.jpg";
import instagramAnalytics from "@/assets/instagram-analytics.jpg";
import youtubeAnalytics from "@/assets/youtube-analytics.jpg";

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
            
            <TabsContent value="about" className="space-y-24">
              {/* Problem Section */}
              <section className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">The Music Industry Changed.</h2>
                <p className="text-xl text-muted-foreground mb-4">Most artists are still using outdated strategies.</p>
                <p className="text-lg text-muted-foreground">While labels focus on quick wins, independent artists need real, sustainable growth.</p>
              </section>

              {/* What We Do Section */}
              <section className="bg-muted/30 py-16 px-8 rounded-2xl">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Label Ready: Your One-Stop Shop for Music Success</h2>
                  <p className="text-lg text-muted-foreground mb-4">We help independent artists grow real fanbases and build profitable careers.</p>
                  <p className="text-lg text-muted-foreground">Everything you need to get label ready — without needing one.</p>
                </div>
              </section>

              {/* Results Section */}
              <section className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results from Real Platforms</h2>
                  <p className="text-lg text-muted-foreground">Here's what our artists achieve with our strategies</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-card rounded-lg p-6 border shadow-lg">
                    <img src={spotifyAnalytics} alt="Spotify for Artists analytics dashboard showing growth" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-2">1K → 47K Monthly Listeners</h3>
                    <p className="text-muted-foreground">Spotify growth in 6 months</p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6 border shadow-lg">
                    <img src={instagramAnalytics} alt="Instagram Insights showing follower growth analytics" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-2">2K → 78K Followers</h3>
                    <p className="text-muted-foreground">Instagram organic growth</p>
                  </div>
                  
                  <div className="bg-card rounded-lg p-6 border shadow-lg">
                    <img src={youtubeAnalytics} alt="YouTube Studio analytics showing subscriber growth" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-2">834 → 28K Subscribers</h3>
                    <p className="text-muted-foreground">YouTube channel growth</p>
                  </div>
                </div>
              </section>

              {/* The Problem With Labels Section */}
              <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Labels Only Want You When You're Already Ready</h2>
                <p className="text-lg text-muted-foreground mb-4">Most artists wait for a label to "discover" them.</p>
                <p className="text-lg text-muted-foreground">But labels only sign artists who already have the numbers, the fanbase, and the business structure.</p>
              </section>

              {/* Our Approach Section */}
              <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16 px-8 rounded-2xl">
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">We Get You Label Ready Before You Need a Label</h2>
                  <p className="text-lg text-muted-foreground mb-4">Structure your career as a business from day one.</p>
                  <p className="text-lg text-muted-foreground">Build the foundation that makes labels want to work with you.</p>
                </div>
              </section>

              {/* Complete Business Structure Section */}
              <section className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Build a Music Business</h2>
                  <p className="text-lg text-muted-foreground">From marketing to merchandise, we handle it all</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Digital Marketing & Ads</h3>
                    <p className="text-muted-foreground">Facebook, Instagram, TikTok, and Spotify advertising that converts</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <ShoppingBag className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Merch Store Setup</h3>
                    <p className="text-muted-foreground">Complete e-commerce solution with automated fulfillment</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Social Media Growth</h3>
                    <p className="text-muted-foreground">Content strategy and growth tactics for all platforms</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Headphones className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Streaming Optimization</h3>
                    <p className="text-muted-foreground">Playlist placement and algorithmic growth strategies</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Revenue Optimization</h3>
                    <p className="text-muted-foreground">Multiple income streams beyond streaming royalties</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Fan Engagement</h3>
                    <p className="text-muted-foreground">Build superfans who buy everything you release</p>
                  </div>
                </div>
              </section>

              {/* How We Transform Section */}
              <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">From Hobby to Business: The Label Ready Method</h2>
                  <p className="text-lg text-muted-foreground">Step-by-step transformation process</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Brand & Identity Development</h3>
                      <p className="text-muted-foreground">Turn your music into a memorable brand that stands out</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Digital Infrastructure Setup</h3>
                      <p className="text-muted-foreground">Professional website, social media, and streaming presence</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Audience Building & Engagement</h3>
                      <p className="text-muted-foreground">Grow a real fanbase that actually cares about your music</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Revenue Stream Creation</h3>
                      <p className="text-muted-foreground">Merchandise, shows, licensing, and more income sources</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Scale & Professional Growth</h3>
                      <p className="text-muted-foreground">Launch campaigns like a major label would</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us Section */}
              <section className="bg-muted/30 py-16 px-8 rounded-2xl">
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

              {/* What Makes Us Different Section */}
              <section className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Label Ready Different</h2>
                  <p className="text-lg text-muted-foreground">We're not just another marketing agency</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card p-6 rounded-lg border">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Other Companies</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Focus on single campaigns</li>
                      <li>• Temporary growth spikes</li>
                      <li>• No business structure</li>
                      <li>• Cookie-cutter approaches</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Label Ready</h3>
                    <ul className="space-y-2">
                      <li>• <CheckCircle className="w-4 h-4 inline mr-2 text-primary" />Complete business ecosystem</li>
                      <li>• <CheckCircle className="w-4 h-4 inline mr-2 text-primary" />Sustainable, long-term growth</li>
                      <li>• <CheckCircle className="w-4 h-4 inline mr-2 text-primary" />Professional business structure</li>
                      <li>• <CheckCircle className="w-4 h-4 inline mr-2 text-primary" />Customized strategies per artist</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* The End Result Section */}
              <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 px-8 rounded-2xl text-center">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">The End Result: You Become Label Ready</h2>
                  <p className="text-lg text-muted-foreground mb-4">When labels finally notice you, you'll have options.</p>
                  <p className="text-lg text-muted-foreground mb-8">You'll have the numbers, the business, and the leverage to negotiate on your terms.</p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Strong Fanbase</h4>
                      <p className="text-sm text-muted-foreground">Real fans who buy and support</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Multiple Revenue Streams</h4>
                      <p className="text-sm text-muted-foreground">Not dependent on one source</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Professional Infrastructure</h4>
                      <p className="text-sm text-muted-foreground">Ready for major partnerships</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final Call to Action */}
              <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Music Business?</h2>
                <p className="text-lg text-muted-foreground mb-8">Join hundreds of artists who chose to go label ready</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2" onClick={() => {
                    const servicesTab = document.querySelector('[value="services"]') as HTMLElement;
                    servicesTab?.click();
                  }}>
                    See Our Services <ArrowRight className="w-4 h-4" />
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
