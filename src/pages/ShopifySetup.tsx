import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag, 
  Check, 
  Clock, 
  DollarSign, 
  Palette, 
  Package,
  Megaphone,
  Home
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShopifySetup = () => {
  const navigate = useNavigate();

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
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShoppingBag className="w-12 h-12 text-white" />
              <h1 className="text-5xl md:text-6xl font-bold">Shopify Merch Store Setup</h1>
            </div>
            
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Powered by Label Ready
            </Badge>
          
            <p className="text-xl text-white/90 mb-8">
              Launch your merch line in days — not weeks.
            </p>
            
            <p className="text-lg mb-8 max-w-3xl mx-auto text-white/80">
              We'll build your fully branded merch store using Shopify and Printful, upload your designs, 
              and connect everything so you're ready to start selling immediately.
            </p>

            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$750</div>
                <div className="text-sm text-white/70">One-Time Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2-4</div>
                <div className="text-sm text-white/70">Business Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-sm text-white/70">Products Included</div>
              </div>
            </div>
            <Button 
              onClick={() => {
                document.getElementById('buy-now-section')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              size="lg"
              className="gap-2 bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              Buy Now - $750
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* What's Included */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Check className="w-6 h-6 text-green-500" />
            What's Included
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Full Shopify Store Setup */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  Full Shopify Store Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Custom Shopify site build
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Homepage and product page design
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Mobile-friendly layout
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Domain connection (if provided)
                </div>
              </CardContent>
            </Card>

            {/* Merch Integration */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Merch Integration (Up to 5 Products)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Upload and configure 5 merch items
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Add to Printful for print-on-demand
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Setup product variants
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Connect Printful to Shopify
                </div>
                <div className="text-xs text-muted-foreground mt-3 p-2 bg-muted rounded">
                  🧢 Hoodies, t-shirts, hats, totes, stickers — we'll help you choose the best combos for your brand.
                </div>
              </CardContent>
            </Card>

            {/* Payment & Shipping */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Payment & Shipping Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Payment gateways (Stripe, PayPal, etc.)
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Shipping rates + tax configuration
                </div>
              </CardContent>
            </Card>

            {/* Meta Ads Integration */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-primary" />
                  Meta Ads Integration
                  <Badge variant="outline" className="text-xs">Optional</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Install and verify Facebook Pixel
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Connect to Meta Business Manager
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  Prepare for future ad campaigns
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Add-On Options */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Add-On Options</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📦 Extra Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Need more than 5 products? No problem.
                </p>
                <p className="text-lg font-semibold">
                  Add any additional item for just $50 each.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📢 Merch Ad Campaign Setup
                  <Badge variant="outline" className="text-xs">Optional</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We'll design and launch a custom Facebook/Instagram ad campaign to drive traffic to your store.
                </p>
                <p className="text-lg font-semibold">
                  Pricing available upon request.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You Provide & Delivery */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  What You Provide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Logo + brand colors
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Your designs (PNG/vector)
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Product types you'd like to launch
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Delivery Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">
                  2–4 business days once all assets are received.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Buy Now Section */}
        <div id="buy-now-section" className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Selling?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's build your professional merch store and start generating revenue from day one.
              </p>
              <div className="mb-8">
                <div className="text-4xl font-bold text-primary mb-2">$750</div>
                <p className="text-muted-foreground">Complete Shopify setup & optimization</p>
              </div>
            <Button 
              onClick={() => {/* External link will be added later */}}
              size="lg" 
              className="gap-2 px-8 py-6 text-lg bg-white text-primary hover:bg-white/90"
            >
              <ShoppingBag className="w-5 h-5" />
              Get Started - $750
            </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Start selling your merch professionally today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopifySetup;