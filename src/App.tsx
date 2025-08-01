
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MembersOnly from "./pages/MembersOnly";
import ShopifySetup from "./pages/ShopifySetup";
import NewsletterGuide from "./pages/NewsletterGuide";
import ArtistBlueprint from "./pages/ArtistBlueprint";
import ArtistWebsite from "./pages/ArtistWebsite";
import ArtistEPK from "./pages/ArtistEPK";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/members" element={<MembersOnly />} />
          <Route path="/shopify-setup" element={<ShopifySetup />} />
          <Route path="/newsletter-guide" element={<NewsletterGuide />} />
          <Route path="/artist-blueprint" element={<ArtistBlueprint />} />
          <Route path="/artist-website" element={<ArtistWebsite />} />
          <Route path="/artist-epk" element={<ArtistEPK />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
