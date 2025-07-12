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
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShopifySetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Shopify Merch Store Setup</h1>
          </div>
          
          <Badge variant="secondary" className="mb-6">
            Powered by Label Ready
          </Badge>
          
          <p className="text-xl text-muted-foreground mb-8">
            Launch your merch line in days — not weeks.
          </p>
          
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We'll build your fully branded merch store using Shopify and Printful, upload your designs, 
            and connect everything so you're ready to start selling immediately.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$750</div>
              <div className="text-sm text-muted-foreground">One-Time Setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2-4</div>
              <div className="text-sm text-muted-foreground">Business Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Products Included</div>
            </div>
          </div>
        </div>

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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Merch Store?</h3>
            <p className="text-muted-foreground mb-6">
              Get everything set up professionally and start selling your designs in days.
            </p>
            <Button size="lg" className="gap-2">
              <ShoppingBag className="w-5 h-5" />
              Get Started - $750
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopifySetup;