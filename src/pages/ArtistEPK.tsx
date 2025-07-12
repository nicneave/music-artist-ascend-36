import { Button } from "@/components/ui/button";
import { Home, FileText, Music, Video, Camera, Users, Mail, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArtistEPK = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Artist Bio",
      description: "A short and long version written to highlight your story, style, and achievements — tailored for press, venues, and industry professionals."
    },
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "Music Section",
      description: "Streamable embeds or links to your latest tracks, albums, and unreleased previews (optional)."
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Live Performance Footage or Videos",
      description: "Add music videos, concert footage, or behind-the-scenes clips that show who you are as a performer and creator."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Press & Quotes",
      description: "Got any blog writeups, reviews, or testimonials? We'll feature them front and center to build trust."
    },
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "Photos",
      description: "High-res press shots and performance images ready for blogs, posters, or press coverage."
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Contact & Social Links",
      description: "Easy access for promoters, labels, and blogs to get in touch or explore more about you."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Custom Design (PDF or Web-Based)",
      description: "Professionally designed and exportable — ready to send via email or showcase on your website."
    }
  ];

  const benefits = [
    "Book More Shows – Venues and booking agents expect to see an EPK. Without one, you're missing gigs.",
    "Media Ready – Bloggers, playlist curators, and journalists need fast access to your info and photos.",
    "Instant Credibility – A sleek, professional EPK makes you look legit — even if you're just starting out.",
    "Time Saver – No more sending 10 links and files separately. One clean package does it all.",
    "Built for Conversion – Designed to get you booked, covered, and discovered."
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
            <FileText className="w-16 h-16 mx-auto text-white mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🎬 Artist EPK
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-4">
            (Electronic Press Kit)
          </p>
          <p className="text-xl md:text-2xl opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed">
            Your Artist Resume — Built to Impress
          </p>
          <div className="bg-white/20 border border-white/30 rounded-xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-2xl font-bold text-white">📦 One-Time Setup: $97</p>
          </div>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed mb-4">
            A well-designed EPK (Electronic Press Kit) is a must-have for every serious music artist. It's your all-in-one resume — used to pitch yourself to venues, labels, blogs, playlists, radio stations, and brand partners.
          </p>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
            Whether you're applying to festivals, booking shows, or trying to get media coverage, an EPK gives you instant credibility and makes it easy for people to say yes.
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
            <FileText className="w-5 h-5" />
            Buy Now - $97
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

      {/* Why You Need an EPK Section */}
      <div className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why You Need an EPK:
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
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Professional EPK?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the industry-standard press kit that opens doors and gets you noticed.
          </p>
          <Button 
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
            size="lg" 
            className="gap-2 px-8 py-6 text-lg"
          >
            <FileText className="w-5 h-5" />
            Get Started
          </Button>
        </div>
      </div>

      {/* Buy Now Section */}
      <div id="buy-now-section" className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Professional Artist EPK</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the industry-standard press kit that opens doors and gets you noticed.
            </p>
            <div className="mb-8">
              <div className="text-4xl font-bold text-primary mb-2">$97</div>
              <p className="text-muted-foreground">Complete EPK design & optimization</p>
            </div>
            <Button 
              onClick={() => {/* External link will be added later */}}
              size="lg" 
              className="gap-2 px-8 py-6 text-lg bg-primary text-white hover:bg-primary/90"
            >
              <FileText className="w-5 h-5" />
              Get Started - $97
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Build your professional press kit today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistEPK;