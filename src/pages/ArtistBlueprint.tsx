import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Calendar, Music, ShoppingBag, DollarSign, Users, TrendingUp, Star, Play, MessageSquare, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArtistBlueprint = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/");
  };

  const monthlyGoals = [
    { type: "📥 Email/SMS Signups", target: "25 fans/month" },
    { type: "💽 Streams", target: "5,000–10,000" },
    { type: "📦 Merch Sales", target: "$100–300" },
    { type: "📲 Content Output", target: "10–15 videos" },
    { type: "📈 Ad Spend", target: "$100–500" }
  ];

  const sixMonthPlan = [
    { month: 1, focus: "Build identity, prep first single, create landing page" },
    { month: 2, focus: "Release #1, run ads, collect fans" },
    { month: 3, focus: "Double down: Release #2 + merch teaser" },
    { month: 4, focus: "Release #3 + content series + fan email list push" },
    { month: 5, focus: "Launch Shopify merch store + retarget fans" },
    { month: 6, focus: "Release #4 + monetize fanbase (ads → merch)" }
  ];

  const royaltyPlatforms = [
    { platform: "BMI/ASCAP", purpose: "Collects US performance royalties", link: "bmi.com" },
    { platform: "SoundExchange", purpose: "Digital radio royalties (Pandora, SiriusXM)", link: "soundexchange.com" },
    { platform: "Songtrust", purpose: "Global publishing admin (YouTube, radio, etc.)", link: "songtrust.com" },
    { platform: "UnitedMasters", purpose: "Distribution + backend metadata", link: "unitedmasters.com" }
  ];

  const services = [
    { service: "🎯 Spotify / IG / YouTube Ads", price: "$300/campaign", includes: "Setup, targeting, reporting" },
    { service: "🧩 Full Release Strategy", price: "$300/month", includes: "1-on-1 check-ins, rollout planning" },
    { service: "🧵 Merch Design + Store Setup", price: "$250–500", includes: "Shopify, product mockups" },
    { service: "📈 Weekly Accountability Calls", price: "Included for paying clients", includes: "Strategy + content reviews" }
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
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
            Free Artist Blueprint
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            From Zero to 100 True Fans
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-4">
            The 6-Month Artist Blueprint
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            You don't need a label, millions of streams, or industry connections to build a music career. 
            You need structure, consistency, and a plan.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Section 1: Mindset & Goals */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              Mindset &amp; Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">🎯 What Is a "True Fan"?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Signs up for your email/SMS list</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Streams your music and saves it</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Shows up to live shows</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Buys merch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Tells their friends about your music</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-center font-semibold">
                  You don't need 1,000,000 listeners. You need 100 of these people. Then scale.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">💡 Set Monthly Goals</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 border-b">Goal Type</th>
                      <th className="text-left p-4 border-b">Monthly Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyGoals.map((goal, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-4">{goal.type}</td>
                        <td className="p-4 font-semibold">{goal.target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: 6-Month Strategy */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              6-Month Fan Building Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sixMonthPlan.map((month, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{month.month}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Month {month.month}</h4>
                    <p className="text-muted-foreground">{month.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Monthly Structure */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Music className="w-6 h-6 text-primary" />
              Monthly Structure &amp; Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">🔁 Each Release (30 Days Before + 30 Days After)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>10 content pieces</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>1 music video</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>1 BTS vlog</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>1 live performance</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Weekly TikTok/IG ad campaign</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Email/SMS blast (pre-save, post-release, BTS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Retargeting ads (from previous engagement)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Royalty Registration */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-primary" />
              Royalty &amp; Registration Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">🎵 Collect Your Money (Every Time You Drop)</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 border-b">Platform</th>
                    <th className="text-left p-4 border-b">What It Does</th>
                    <th className="text-left p-4 border-b">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {royaltyPlatforms.map((platform, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4 font-semibold">{platform.platform}</td>
                      <td className="p-4">{platform.purpose}</td>
                      <td className="p-4 text-primary">{platform.link}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Register songs before release</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Register your splits + IPI numbers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Set up your publisher profile (Songtrust or TuneCore Pub)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Merch & Revenue */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-primary" />
              Merch &amp; Revenue Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">📦 Your First 100 Fans Should Buy</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Use Shopify (we can set it up for you)</li>
                  <li>• Sell low-cost, high-margin items (stickers, tees, hoodies)</li>
                  <li>• Price point: $20–$50</li>
                </ul>
                
                <h4 className="font-semibold mb-2">We help:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Design merch</li>
                  <li>• Build Shopify</li>
                  <li>• Run retargeted ads to engaged fans</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Revenue Model:</h4>
                <div className="space-y-2 text-sm">
                  <p>100 fans x $20 every 3 months = <span className="font-bold text-primary">$2,000/qtr</span> in merch</p>
                  <p>+ streaming &amp; sync royalties = <span className="font-bold text-primary">a real business</span></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Services */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              How We Can Help
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-6">🧭 Work With Our Team</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 border-b">Service</th>
                    <th className="text-left p-4 border-b">Price</th>
                    <th className="text-left p-4 border-b">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="p-4">{service.service}</td>
                      <td className="p-4 font-semibold text-primary">{service.price}</td>
                      <td className="p-4">{service.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Budget Planner */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              Tracker &amp; Budget Planner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 border-b">Category</th>
                    <th className="text-left p-4 border-b">Monthly Budget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4">Ad Spend</td>
                    <td className="p-4">$___</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Content (gear, editing)</td>
                    <td className="p-4">$___</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Studio / Mixing</td>
                    <td className="p-4">$___</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Merch (setup, samples)</td>
                    <td className="p-4">$___</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Management (if any)</td>
                    <td className="p-4">$___</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Total</td>
                    <td className="p-4 font-semibold">$___</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <Star className="w-6 h-6 text-primary" />
              Your Path to 100 True Fans
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Most artists spend 5+ years releasing music with no plan, no growth, and no revenue. 
              This plan shows you how to build momentum and make money — starting now.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleGetStarted}
                className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90"
              >
                View Our Packages
              </Button>
              <p className="text-sm text-muted-foreground">
                Start building your superfan community today
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Email Collection Section */}
      <div className="py-16 px-4 bg-muted/20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get the Complete PDF Guide</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Enter your email to download the full "Zero to 100 True Fans" blueprint with worksheets, templates, and bonus resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground"
            />
            <Button className="px-8 py-3 bg-white text-primary hover:bg-white/90">
              Download PDF
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            We'll also send you our weekly artist tips and industry insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistBlueprint;