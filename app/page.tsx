import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroScroll } from "@/components/HeroScroll";
import { ProfileSection } from "@/components/ProfileSection";


import { SolutionsGrid } from "@/components/SolutionsGrid";
import { ServicesOverview } from "@/components/ServicesOverview";
import { DetailedTimeline } from "@/components/DetailedTimeline";
import { RisksSection } from "@/components/RisksSection";
import { MarketingFeature } from "@/components/MarketingFeature";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";
import { GratitudeSection } from "@/components/GratitudeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingAssistant } from "@/components/FloatingAssistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand-light selection:bg-brand selection:text-white">
      <Navbar />
      <HeroScroll />
      <ProfileSection />
      <RisksSection />

      <SolutionsGrid />
      <ServicesOverview />
      <DetailedTimeline />

      <MarketingFeature />
      <Testimonials />
      <CtaSection />
      <GratitudeSection />
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
      <Footer />
      <FloatingAssistant />
    </main>
  );
}
