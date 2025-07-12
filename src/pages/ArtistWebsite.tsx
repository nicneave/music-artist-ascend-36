import { Button } from "@/components/ui/button";
import { Home, Globe, Music, ShoppingBag, Camera, Search, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArtistWebsite = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "Custom Bio Page",
      description: "We'll feature your story in a clean, compelling layout that fans and industry pros can connect with."
    },
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "Music Showcase",
      description: "Embed your latest singles, projects, and music videos directly on the site — Spotify, Apple Music, YouTube, SoundCloud, you name it."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
      title: "Merch Store Integration",
      description: "Already selling merch? We'll connect your existing Shopify, Printful, or Bandcamp store. Need help getting started? We can help with that too."
    },
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "Visual Identity",
      description: "High-quality photos are essential. We'll work with your existing images or help recreate stunning visuals to match your brand."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO Optimized",
      description: "Your name should show up on Google — not get buried under social links. We'll optimize your site to boost your search engine visibility so fans, venues, blogs, and industry pros can find you fast."
    }
  ];

  const benefits = [
    "Professional Credibility – Stand out from the sea of social media profiles. A polished site makes you look serious about your craft.",
    "Full Control – No algorithms. No distractions. Just your music, your merch, and your brand — exactly how you want it.",
    "Fan Funnel Hub – Collect emails, sell tickets, promote drops, and capture direct fan data all from one central place.",
    "Better Branding – Your visuals, your message, your tone — fully customized to match your aesthetic.",
    "Long-Term Footprint – Plant your digital flag on Google and build authority over time. Every search result, every backlink, every fan interaction counts."
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Home Button */}
      <div className="absolute top-6 left-6 z-10">
        <Button 
          onClick={() => navigate("/")}
          variant="ghost"
          className="gap-2 text-white hover:bg-white/20"
        >
          <Home className="w-4 h-4" />
          Home
        </Button>
      </div>


      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <div className="mb-6">
            <Globe className="w-16 h-16 mx-auto text-white mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🎤 Artist Website Build
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Your Digital Homebase — Built to Convert
          </p>
          <div className="bg-white/20 border border-white/30 rounded-xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-2xl font-bold text-white">🌐 Starting at: $197</p>
          </div>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
            We build modern, professional websites designed specifically for music artists. Whether you're just starting out or leveling up your career, having your own website is one of the most powerful tools for growing your brand, building your fanbase, and generating revenue.
          </p>
          <Button 
            onClick={() => {
              document.getElementById('buy-now-section')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            size="lg"
            className="gap-2 bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
          >
            <Globe className="w-5 h-5" />
            Buy Now - $197
          </Button>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What's Included:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Every Artist Needs a Website Section */}
      <div className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Every Artist Needs a Website:
          </h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Digital Homebase?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create a professional website that converts visitors into fans and grows your music career.
          </p>
          <Button 
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
            size="lg" 
            className="gap-2 px-8 py-6 text-lg"
          >
            <Globe className="w-5 h-5" />
            Get Started
          </Button>
        </div>
      </div>

      {/* Buy Now Section */}
      <div id="buy-now-section" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Professional Artist Website</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your digital homebase that converts visitors into fans and grows your music career.
            </p>
            <div className="mb-8">
              <div className="text-4xl font-bold text-primary mb-2">$197</div>
              <p className="text-muted-foreground">Complete website build & optimization</p>
            </div>
            <Button 
              onClick={() => {/* External link will be added later */}}
              size="lg" 
              className="gap-2 px-8 py-6 text-lg bg-white text-primary hover:bg-white/90"
            >
              <Globe className="w-5 h-5" />
              Get Started - $197
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Build your professional online presence today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistWebsite;