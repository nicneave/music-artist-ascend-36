import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Users, TrendingUp, MessageSquare, Heart, DollarSign } from "lucide-react";

const NewsletterGuide = () => {
  const handleGetStarted = () => {
    // Placeholder for checkout functionality
    console.log("Initiating newsletter setup checkout...");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary/80 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
            Free Resource Guide
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Independent Artist's Guide to Newsletters & Fan Funnels
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Turn casual listeners into lifelong superfans with email and SMS marketing that actually works
          </p>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why This Matters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a loyal fanbase isn't about going viral — it's about making real, long-term connections 
            with people who want to support your art.
          </p>
        </div>

        {/* Part 1: Why Artists Need a Newsletter */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              Why Artists Need a Newsletter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">You Own Your Audience</h4>
                  <p className="text-muted-foreground">Social platforms can disappear or shadowban you. Your email list is yours forever.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">High Engagement</h4>
                  <p className="text-muted-foreground">Emails have 90% open rates. Instagram? You're lucky if 10% see your post.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Monetization Friendly</h4>
                  <p className="text-muted-foreground">Sell merch, promote shows, drop exclusive content without gatekeepers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Trust Builder</h4>
                  <p className="text-muted-foreground">Email feels personal. You're not fighting for attention — you're invited in.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Part 2: Collecting Data */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Collecting Emails and Phone Numbers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">What to Collect:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>First Name</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Email Address</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Phone Number (SMS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>City/Location (optional)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">How to Collect:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Signup forms on website/Linktree</li>
                  <li>• Offer free downloads or demos</li>
                  <li>• QR codes at live shows</li>
                  <li>• Social media giveaways</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Part 3: The 3-Stage Fan Funnel */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              The 3-Stage Fan Funnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Discovery → Awareness</h4>
                <p className="text-sm text-muted-foreground mb-3">TikTok, Instagram, live shows, collabs</p>
                <Badge variant="outline">Capture Interest</Badge>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Awareness → Engagement</h4>
                <p className="text-sm text-muted-foreground mb-3">Welcome emails, stories, behind-the-scenes</p>
                <Badge variant="outline">Build Connection</Badge>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Engagement → Monetization</h4>
                <p className="text-sm text-muted-foreground mb-3">Merch drops, shows, exclusive content</p>
                <Badge variant="outline">Generate Revenue</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SMS Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-primary" />
              SMS: The Underrated Secret Weapon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-primary/5 p-6 rounded-lg">
              <p className="text-lg font-semibold text-center mb-4">
                Texts have 90%+ open rates, and fans actually appreciate them — when used sparingly.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Best Practices:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Use SMS only for key drops</li>
                    <li>• Keep it short and personal</li>
                    <li>• Combine with email for max reach</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Example Text:</h4>
                  <div className="bg-background p-3 rounded border">
                    <p className="text-sm">"Hey it's [Your Name], new single just dropped! 💔 [link]"</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips for Superfans */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              Building Superfans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Quality over quantity: 1,000 true fans &gt; 100,000 followers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Use storytelling: share your process, wins, and challenges</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Be consistent: email every 2-3 weeks</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Track engagement and reward loyal fans</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Make fans feel seen: reply and ask for input</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Build Your Fan Empire?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            You can't rely on algorithms forever. You need a direct line to your fans — and newsletters + SMS give you that. 
            This is how you go from streams to sales, from followers to true fans, from music as a hobby to music as your life.
          </p>
        </div>

        {/* Pricing Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl">
              <DollarSign className="w-6 h-6 text-primary" />
              Newsletter Setup & Management
            </CardTitle>
            <p className="text-muted-foreground">Let us build and maintain your fan funnel system</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-8">
              <div className="text-4xl font-bold text-primary mb-2">$149</div>
              <p className="text-muted-foreground mb-4">One-time setup fee</p>
              <div className="text-2xl font-semibold mb-2">+ $97/month</div>
              <p className="text-muted-foreground">Weekly email management & optimization</p>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-4">What's Included:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Complete email/SMS setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Fan funnel automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Weekly email campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Performance tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Content strategy guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Monthly optimization reports</span>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleGetStarted}
              className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              Get Started - $149 Setup
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Start building your superfan community today
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsletterGuide;