import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InternetSafety from "./pages/InternetSafety";
import Puberty from "./pages/Puberty";
import Hygiene from "./pages/Hygiene";
import Relationships from "./pages/Relationships";
import Addiction from "./pages/Addiction";
import FAQs from "./pages/FAQs";
import Helpline from "./pages/Helpline";
import AnonymousQuestions from "./pages/AnonymousQuestions";
import Admin from "./pages/Admin"; // Add this import
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
          <Route path="/internet-safety" element={<InternetSafety />} />
          <Route path="/puberty" element={<Puberty />} />
          <Route path="/hygiene" element={<Hygiene />} />
          <Route path="/relationships" element={<Relationships />} />
          <Route path="/addiction" element={<Addiction />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/anonymous-questions" element={<AnonymousQuestions />} />
          <Route path="/admin" element={<Admin />} /> {/* Add this route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;